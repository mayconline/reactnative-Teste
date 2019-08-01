import React, {Fragment, Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native';
import api from '../services/api';


export default class Feed extends Component{

 static navigationOptions =({navigation})=>({
    headerRight:(
        <TouchableOpacity style={{marginRight:20}} onPress={()=>{navigation.navigate('New')}}>
            <Text>Abrir</Text>        
        </TouchableOpacity>
    )
 })
 
 state={
     bolos:[]
 }
    
 async componentDidMount(){
    const res = await api.get('/bolos');
          await this.setState({bolos:res.data});

    
 }
 
render(){
    return(
        <View style={styles.container}>
            <FlatList 
                data={this.state.bolos}
                keyExtractor={item=>item._id}
                renderItem={({item})=>(

                   
                    <View style={styles.feedItem}>
                        <Image style={styles.feedImage} source={{uri:item.url}}/>  

                         <View style={styles.feedItemHeader}>
                                <Text>{item.descricao}</Text>
                                     <View style={styles.userInfo}>
                                         <Text>Likes: {item.likes}</Text>    
                                     </View>

                           

                        </View> 

                         

                    </View>
                )}
            
            />

        
        </View>
    )
}
        
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    feedItem:{
        marginTop:20,
    },
    feedItemHeader:{
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    feedImage:{
        width:'100%',
        height: 400,
        marginVertical:15,
    }
})