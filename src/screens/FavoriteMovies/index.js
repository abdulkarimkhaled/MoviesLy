import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import styles from './styles';
import GradientText from '../../components/TextGradient'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { calcHeight, calcWidth } from '../../config/metrics';
import Images from '../../config/Images'
import NavigationService from '../../navigation/NavigationService';

export default Search = (props) => {
    const [favoriteList, setFavorite] = useState([])
    const presistState = useSelector(state => state.presistReducer)

    const [start, setStart] = useState(true)

    useEffect(() => {
        console.log('favoriteList', favoriteList);
        console.log('presistState', presistState.data.Favorites);
        setFavorite(presistState.data.Favorites)
        // setTimeout(() => {
        //     setStart(true)
        // }, 1000);
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <TouchableOpacity onPress={() => {
                    NavigationService.goBack()
                }} style={styles.backIcon} >
                    <Images source={'Back'} />
                </TouchableOpacity>
                <GradientText colors={['white', 'grey']} style={styles.headerText} >
                    Favorites
                </GradientText>
            </View>
            <LinearGradient style={styles.headerBottomLine} colors={['black', 'white'].reverse()} start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 0 }} />

            <View style={{ justifyContent: 'center' }} >
                <FlatList
                    data={favoriteList}
                    bounces={false}
                    contentContainerStyle={{ paddingBottom: calcWidth(180) }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            NavigationService.navigate('MovieDetails', { movieId: item.id });
                        }} style={{ borderWidth: calcWidth(1), borderColor: 'grey', borderRadius: calcWidth(8), overflow: 'hidden', marginTop: calcHeight(14) }} >
                            <Image
                                resizeMode={'contain'}
                                style={{ width: calcWidth(320), height: calcHeight(180), backgroundColor: '#383838' }}

                                source={item.backdrop_path} />
                            <Text
                                numberOfLines={2}
                                style={styles.movieTitle} >{item.title}</Text>
                            <Text
                                numberOfLines={2}
                                style={styles.info} >Release Date: {item.release_date}</Text>
                            <Text
                                numberOfLines={2}
                                style={styles.info} >Language: {(item.original_language)}</Text>
                            <Text
                                numberOfLines={2}
                                style={[styles.info, { marginBottom: calcHeight(6) }]} >Average Vote: {item.vote_average}</Text>
                        </TouchableOpacity>
                    )
                    }
                />
            </View>
        </View >
    )
}
