import React from 'react';
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	View,
	ScrollView,
} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Header from './Header';
import Verse from './Verse';
import verses from '../../assets/verses';

const Sidebar = ({ drawer, verseNo, setDrawer, setVerseNo }) => {
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
					v === 103 ? styles.last : null,
					v === verseNo ? styles.strike : null,
				]}
			>
				{v}
			</Text>
		));

		return (
			<ScrollView>
				<TouchableOpacity style={styles.menu}>{verses}</TouchableOpacity>
			</ScrollView>
		);
	};

	return (
		<MenuDrawer
			open={drawer}
			opacity={0.3}
			overlay={true}
			animationTime={200}
			drawerPercentage={20}
			drawerContent={verseList()}
		>
			<Header
				key="header"
				drawer={drawer}
				setDrawer={setDrawer}
				setVerseNo={setVerseNo}
			/>
			<Verse
				key="chapters"
				drawer={drawer}
				verseNo={verseNo}
				text={verses[verseNo]}
			/>
		</MenuDrawer>
	);
};

const styles = StyleSheet.create({
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
	last: { paddingBottom: 80 },
	first: { paddingTop: 80 },
});

export default Sidebar;
