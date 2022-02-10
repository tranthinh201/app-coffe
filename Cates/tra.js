import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList } from 'react-native';

const DATA=[
    {
        id: 1,
        title: 'Trà thạch vải',
        price:'33.450',
        thumbnail:require('../assets/images/tra1.png'),
    },
    {
        id: 2,
        title: 'Trà thạch đào',
        price:'43.450',
        thumbnail:require('../assets/images/tra2.png'),
    },
    {
        id: 3,
        title: 'Trà thanh đào',
        price:'43.450',
        thumbnail:require('../assets/images/tra3.png'),
    },
    {
        id: 4,
        title: 'Trà sen vàng',
        price:'43.450',
        thumbnail:require('../assets/images/tra4.png'),
    },

];

const Items=({thumbnail,title,price,onPress})=>(
    <View style={styles.listitem}>
        <TouchableOpacity style={styles.item} 
            onPress={onPress}
        >
            <Image style={styles.thumbnail} source={thumbnail} />
            <View style={styles.in4}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}đ</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default function freeze({navigation}) {
    const renderItem=({item})=>(
        <Items 
            title={item.title}
            onPress={() => navigation.navigate('detailnhe',{title:item.title,price: item.price,thumb: item.thumbnail})}
            thumbnail={item.thumbnail}
            price={item.price}

        >
        </Items>
    );

  return (
    <View style={styles.container} >
        <FlatList
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
        >

        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  listitem: {
    flexDirection: 'row',
    justifyContent:'space-evenly', 
    marginHorizontal:10
  },
  item: {
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:3,
    shadowOffset:{width:0,height:8},
    width:150,
    height:250,
    margin:10,
    borderRadius:10,
    
  },
  thumbnail: {
    width:150,
    height:170, 
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    backgroundColor:'#f5eedc'
  },
  in4: {
    padding:10
  },
  title: {
    fontWeight:'bold',
    paddingBottom:10,
    fontSize:17
  },
  price: {
      fontWeight:"500",
  }
});