import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const Mode = ({ isEnabled, handleToggle }) => (
	<View style={styles.container}>
		<Switch
			trackColor={{ false: '#767577', true: '#81b0ff' }}
			thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
			ios_backgroundColor="#3e3e3e"
			value={isEnabled}
			onValueChange={handleToggle}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 80,
	},
});

export default Mode;
