import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import verses from '../../assets/verses';
import Header from './Header';
import Mode from './Mode';
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
			<ScrollView
				style={{
					marginTop: 40,
					marginBottom: 50,
					borderTop: 2,
				}}
			>
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
			drawerPercentage={22.5}
			drawerContent={verseList()}
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
	i: {
		margin: 10,
		textAlign: 'center',
		color: 'black',
		padding: 5,
		borderRadius: 7,
		borderColor: 'gray',
		borderWidth: 1,
	},
	menu: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
		borderRightWidth: 1,
		borderRightColor: '#dfdfdf',
	},
	verseMenu: {
		fontSize: 18,
		padding: 5,
		textAlign: 'center',
		fontFamily: 'meta-normal',
	},
	strike: { textDecorationLine: 'line-through' },
	first: { paddingTop: 20 },
});

export default Sidebar;
