import React from 'react';
import { isTablet } from 'react-native-device-detection';
import {
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';

const Header = ({ setDrawer }) => (
	<TouchableOpacity onPress={() => setDrawer((drawer) => !drawer)}>
		<SafeAreaView style={styles.view}>
			<Image
				style={styles.menuBtn}
				source={require('./../../assets/circle.png')}
			/>

			<Text style={styles.header}>Gitanjali</Text>
			<Image
				style={[styles.menuBtn, styles.hidden]}
				source={require('./../../assets/circle.png')}
			/>
		</SafeAreaView>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	hidden: { opacity: 0 },
	header: {
		flexGrow: 1,
		marginTop: 70,
		marginBottom: 30,
		textAlign: 'center',
		fontFamily: 'meta-normal',
		fontSize: isTablet ? 45 : 28,
	},
	menuBtn: {
		flexGrow: 0,
		marginTop: 85,
		marginBottom: 30,
		textAlign: 'center',
		width: isTablet ? 20 : 15,
		height: isTablet ? 20 : 15,
		marginLeft: isTablet ? 40 : 15,
		marginRight: isTablet ? 40 : 15,
	},
	view: { display: 'flex', flexDirection: 'row' },
});

export default Header;
