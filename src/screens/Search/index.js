import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator, Image, Text, Animated } from 'react-native';
import styles from './styles';
import GradientText from '../../components/TextGradient'
import LinearGradient from 'react-native-linear-gradient';
import { getPopularMovies, getUpcomingMovies, getTopRatedMovies, searchMovieByName } from '../../api/ApisFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { calcHeight, calcWidth } from '../../config/metrics';
import Images from '../../config/Images'
import NavigationService from '../../navigation/NavigationService';
import { FlatList } from 'react-native-gesture-handler';


export default Search = () => {
    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)
    const flatListRef = React.useRef()
    const dispatch = useDispatch()


    useEffect(() => {
        if (searchValue != '') {
            dispatch(searchMovieByName(searchValue))
        }
    }, [searchValue])

    useEffect(() => {
        if (generalState.data.SearchList != []) { // set search results list on general state change 
            setSearchList(generalState.data.SearchList)
        }
    }, [generalState.data.SearchList])

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <TouchableOpacity onPress={() => {
                    NavigationService.goBack()
                }} style={styles.backIcon} >
                    <Images source={'Back'} />
                </TouchableOpacity>
                <GradientText colors={['white', 'grey']} style={styles.headerText} >
                    Search
                </GradientText>
            </View>
            <LinearGradient style={styles.headerBottomLine} colors={['black', 'white'].reverse()} start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 0 }} />
            <View style={styles.searchContainer} >
                <View style={{ marginHorizontal: calcWidth(14) }}>
                    <Images color={'#000'} source={'Search'} />
                </View>
                <TextInput
                    placeholder={'Search a Movie'}
                    value={searchValue}
                    style={styles.searchInput}
                    onChangeText={(text) => {
                        setSearchValue(text)
                    }}
                />
            </View >
            <View style={{ justifyContent: 'center' }} >
                {searchList && searchList.length != 0 && searchValue == '' && <Text
                    numberOfLines={2}
                    style={styles.movieTitle} >Recent Search:</Text>}
                {searchList && !generalState.Loading["SEARCH"] && searchValue != '' && searchList.length == 0 && <Text
                    numberOfLines={2}
                    style={styles.movieTitle} >No results found</Text>}
                {!generalState.Loading["SEARCH"] ?
                    <FlatList
                        data={searchList}
                        bounces={false}
                        ref={flatListRef}
                        contentContainerStyle={{ paddingBottom: calcWidth(180) }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('MovieDetails', { movieId: item.id });
                            }} style={{ borderWidth: calcWidth(1), borderColor: 'grey', borderRadius: calcWidth(8), overflow: 'hidden', marginTop: calcHeight(14) }} >
                                <Image
                                    resizeMode={'contain'}
                                    style={{ width: calcWidth(320), height: calcHeight(180), backgroundColor: '#383838' }}

                                    source={
                                        item.backdrop_path != null ?
                                            { uri: "https://image.tmdb.org/t/p/original" + item.backdrop_path } :
                                            item.poster_path != null ?
                                                { uri: "https://image.tmdb.org/t/p/original" + item.poster_path } :
                                                require('../../config/svgs/NoImage.png')
                                    } />
                                <Text
                                    numberOfLines={2}
                                    style={styles.movieTitle} >{item.title}</Text>
                                <Text
                                    numberOfLines={2}
                                    style={styles.info} >Release Date: {item.release_date}</Text>
                                <Text
                                    numberOfLines={2}
                                    style={styles.info} >Language: {(item.original_language).toUpperCase()}</Text>
                                <Text
                                    numberOfLines={2}
                                    style={[styles.info, { marginBottom: calcHeight(6) }]} >Average Vote: {item.vote_average}</Text>
                            </TouchableOpacity>
                        )}
                    /> : <View style={{ marginTop: calcHeight(100) }}>
                        <ActivityIndicator color={'grey'} size={'large'} />
                    </View>

                }
            </View>
            {searchList && searchList.length != 0 && <TouchableOpacity onPress={() => {
                toTop()
            }} style={styles.floatingToToP} >
                <Images rotateDegree={270} source={'Back'} />
            </TouchableOpacity>}
        </View >
    )
}
