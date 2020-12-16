import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { isTablet } from 'react-native-device-detection';
import MenuDrawer from 'react-native-side-drawer';
import verses from '../../assets/verses';
import Header from './Header';
import Verse from './Verse';
import Info from './Info';

const Sidebar = ({ drawer, verseNo, setDrawer, setVerseNo }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const handleToggle = () => setIsEnabled((previousState) => !previousState);

	const verseList = () => {
		const v = Array.from({ length: 103 }, (_, i) => i + 1);

		const verses = v.map((v) => (
			<Text
				key={`verse${v}`}
				onPress={() => {
					setVerseNo(v);
					setDrawer(false);
				}}
				style={[
					styles.verseMenu,
					v === 1 ? styles.first : null,
					v === verseNo ? styles.strike : null,
				]}
			>
				{v}
			</Text>
		));

		return (
			<ScrollView style={styles.scrollView}>
				<TouchableOpacity style={styles.menu}>
					{verses}

					<Text
						onPress={() => {
							setVerseNo('info');
							setDrawer(false);
						}}
						style={[styles.i]}
					>
						i
					</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	};

	return (
		<MenuDrawer
			open={drawer}
			opacity={0.3}
			overlay={true}
			animationTime={200}
			drawerContent={verseList()}
			drawerPercentage={isTablet ? 10 : 22.5}
		>
			<Header
				key="header"
				drawer={drawer}
				setDrawer={setDrawer}
				setVerseNo={setVerseNo}
			/>
			{verseNo === 'info' ? (
				<Info />
			) : (
				<Verse
					key="chapters"
					drawer={drawer}
					verseNo={verseNo}
					text={verses[verseNo]}
				/>
			)}
		</MenuDrawer>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		marginTop: 40,
		marginBottom: 50,
	},
	i: {
		padding: 5,
		margin: 10,
		color: 'black',
		borderWidth: 1,
		borderRadius: 7,
		textAlign: 'center',
		borderColor: 'gray',
	},
	menu: {
		flex: 1,
		padding: 10,
		borderRightWidth: 1,
		backgroundColor: 'white',
		borderRightColor: '#dfdfdf',
	},
	verseMenu: {
		textAlign: 'center',
		fontFamily: 'meta-normal',
		padding: isTablet ? 8 : 5,
		fontSize: isTablet ? 25 : 18,
	},
	strike: { textDecorationLine: 'line-through' },
	first: { paddingTop: 20 },
});

export default Sidebar;
