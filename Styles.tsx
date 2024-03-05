import {Dimensions, Platform, StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    safeArea:{
      paddingTop: Platform.OS === 'android' ? 10 : 20,
    },
  
    container:{
      width: '100%',
      padding: 30,
    },
  
    title: {
      fontSize: 20,
      color: '#6f6f6f',
    },
    text:{
      fontSize: 20,
      color: '#6f6f6f',
    },
  
    textDone:{
      fontSize: 20,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
  
    whiteText:{
      fontSize: 20,
      color: '#FFF',
    },
    TextInput:{
      borderColor: '#6f6f6f',
      borderWidth: 1,
      width: Dimensions.get('screen').width * 0.6,
      borderRadius: 15,
      paddingLeft: 15,
    },
    inputContainer:{
      marginTop: 20,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    addButton:{
      backgroundColor: '#1e90ff',
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:12,
      width: Dimensions.get('screen').width * 0.25,
      borderRadius: 10,
    },
  
    scrollContainer:{
      marginTop:20,
  
    },
  
    removeButton:{
      backgroundColor: '#F33D3D',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 10,
      paddingHorizontal:12,
    },
  
    itemContainer:{
      paddingVertical:20,
      borderBottomColor:'#e4e4e4',
      borderBottomWidth: 1,
      flexDirection:'row',
      justifyContent:'space-between'
    }
  
  });

  export default styles;