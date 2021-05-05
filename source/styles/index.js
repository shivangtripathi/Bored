import { StyleSheet, Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	
	alignItemsCenter:{
		alignItems: "center"
	},
	activityImage:{
		width: WIDTH,
		height: WIDTH
	},
	activity_color:{
		color: '#7c37A6'
	},


	button:{
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 8,
		paddingBottom: 8,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "#dedede",
		width: WIDTH/3,
		alignItems: "center"
	},


	card_container:{
		height: HEIGHT/1.5, 
		width:WIDTH, 
		padding: 10, 
		position: 'absolute' ,
		marginTop:10
	},
	color_white:{
		color: "#fff"
	},



	flex:{
		flex: 1
	},
	followingContainer:{
		position: "absolute",
		top: WIDTH/2 + 10,
		left: WIDTH/9
	},
	followersContainer:{
		position: "absolute",
		top: WIDTH/2 + 10,
		right: WIDTH/9
	},
	font_24:{
		fontSize: 24
	},
	font_18:{
		fontSize: 18
	},
	font_16:{
		fontSize: 16
	},
	font_14:{
		fontSize: 14
	},
	font_12:{
		fontSize: 12
	},
	font_32:{
		fontSize: 32
	},
	font_bold:{
		fontWeight: "700"
	},
	uppercase:{
		textTransform:'uppercase'
	},
	headerComponent:{
		height: WIDTH/2 + WIDTH/6 + 10
	},


	icon_lit:{
		width: 30,
		height: 30
	},

	like_text:{ 
		borderWidth: 1,
		borderColor: 'green', 
		color: 'green', 
		fontSize: 32, 
		fontWeight: '800', 
		padding: 10 
	},
	like_container:{
		transform: [{ rotate: '-30deg' }],
		position: 'absolute',
		top: 50,
		left: 40,
		zIndex: 1000 
	},
	margin_top_5:{
		marginTop: 5
	},
	margin_top_10:{
		marginTop: 10
	},
	margin_top_20:{
		marginTop: 20
	},
	margin_20:{
		marginVertical:20,
		marginHorizontal:20,
	},
	margin_bottom_30:{
		marginBottom:30
	},
	margin_bottom_20:{
		marginBottom:20
	},
	margin_horizontal_20:{
		marginHorizontal:20,
	},
	margin_top_20:{
		marginTop:20,
	},
	
	margin_top_40:{
		marginTop:40,
	},

	nope_container:{ 
		transform: [{ rotate: '30deg' }], 
		position: 'absolute', 
		top: 50, 
		right: 40, 
		zIndex: 1000 
	},
	nope_text:{
		borderWidth: 1,
		borderColor: 'red',
		color: 'red',
		fontSize: 32,
		fontWeight: '800', 
		padding: 10
	 },
	padding_10:{
		padding: 10
	},
	primary_button:{
		backgroundColor: '#7c37A6',
		borderColor: '#7c37A6'
	},
	profileHeader:{
		width: WIDTH,
		height: WIDTH/2
	},
	profileImage:{
		width: WIDTH/3,
		height: WIDTH/3,
		borderRadius: WIDTH/6,
		position: 'absolute',
		top: WIDTH/3,
		left: WIDTH/3
	},

	
	recko_container:{
		borderTopWidth: 1,
		borderTopColor: "#dedede"
	}
})