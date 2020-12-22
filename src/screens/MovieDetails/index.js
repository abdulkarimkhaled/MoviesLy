import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, FlatList, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import GradientText from '../../components/TextGradient'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Partition from '../../components/Partition';
import { calcHeight, calcWidth } from '../../config/metrics';
import Images from '../../config/Images'
import NavigationService from '../../navigation/NavigationService';
import { getMovieDetails, saveMoviePresist } from '../../api/ApisFunctions';
export default MovieDetails = (props) => {
    const movieId = useState(props.navigation.state.params.movieId)
    const [movieData, setMovieData] = useState(null);
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => { //call movie Api 
        dispatch(getMovieDetails(movieId))
    }, [])


    useEffect(() => { //call movie Api 
        let fav = presistState.data.Favorites
        setFavorite(
            presistState.data && presistState.data.Favorites && generalState.data.MovieDetails &&
                presistState.data.Favorites.length != 0 ?
                fav.some(fav => fav.id == generalState.data.MovieDetails.id) : false
        )
    }, [generalState.data.MovieDetails, presistState.data])


    useEffect(() => {
        if (generalState.data.MovieDetails != null) { // set movie details on general state change 
            setMovieData(generalState.data.MovieDetails)
            console.log('MovieDetails', generalState.data.MovieDetails);
            let fav = presistState.data.Favorites
            setFavorite(
                presistState.data && presistState.data.Favorites &&
                    presistState.data.Favorites.length != 0 ?
                    fav.some(fav => fav.id == generalState.data.MovieDetails.id) : false
            )
        }
    }, [generalState.data.MovieDetails])

    saveMovie = () => {
        let body = {
            id: movieData.id,
            backdrop_path: movieData.backdrop_path != null ?
                { uri: "https://image.tmdb.org/t/p/original" + movieData.backdrop_path } :
                movieData.poster_path != null ?
                    { uri: "https://image.tmdb.org/t/p/original" + movieData.poster_path } :
                    require('../../config/svgs/NoImage.png'),
            title: movieData.title,
            release_date: movieData.release_date,
            original_language: movieData.original_language,
            vote_average: movieData.vote_average
        }
        dispatch(saveMoviePresist(body))
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >

                <TouchableOpacity onPress={() => {
                    NavigationService.goBack()
                }} style={styles.backIcon} >
                    <Images source={'Back'} />
                </TouchableOpacity>
                <GradientText colors={['white', 'white']} style={styles.headerText} >
                    Movie
                </GradientText>
                <TouchableOpacity onPress={() => {
                    saveMovie()
                }} style={{
                    marginLeft: calcWidth(130)
                }} >
                    <Images color={favorite ? 'red' : 'white'} source={'Heart'} />
                </TouchableOpacity>
            </View>
            <LinearGradient style={styles.headerBottomLine} colors={['black', 'white'].reverse()} start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 0 }} />

            {movieData && !generalState.Loading["MOVIE_DETAILS"] && <View>
                <Image
                    resizeMode={'contain'}
                    style={{ width: calcWidth(375), height: calcHeight(210), backgroundColor: '#383838' }}
                    source={
                        movieData.backdrop_path != null ?
                            { uri: "https://image.tmdb.org/t/p/original" + movieData.backdrop_path } :
                            movieData.poster_path != null ?
                                { uri: "https://image.tmdb.org/t/p/original" + movieData.poster_path } :
                                require('../../config/svgs/NoImage.png')
                    } />
                <GradientText colors={['#AF7AC5', '#5DADE2']} style={{
                    marginLeft: calcWidth(10),
                    marginTop: calcHeight(6),
                    fontSize: calcWidth(26),
                    fontWeight: '600'
                }} >
                    {movieData.title}
                </GradientText>
                <Text style={{ color: 'white', marginLeft: calcWidth(10), marginTop: calcHeight(6), fontSize: calcWidth(18) }}  >
                    Genres:
                </Text>
                <View style={{ height: calcHeight(20) }} >
                    <FlatList
                        data={movieData.genres}
                        bounces={false}
                        horizontal
                        contentContainerStyle={{ paddingLeft: calcWidth(10), marginTop: calcHeight(4), }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Text style={{ color: 'white', marginRight: calcWidth(10), fontSize: calcWidth(14) }}  >
                                {item.name}
                            </Text>
                        )}
                    />
                </View>
                <Text style={{ color: 'white', fontSize: calcWidth(18), marginLeft: calcWidth(10) }}>
                    Language: {movieData.original_language.toUpperCase()}
                </Text>
                <Text style={{ color: 'white', fontSize: calcWidth(18), marginLeft: calcWidth(10) }}>
                    Release date: {movieData.release_date}
                </Text>
                <Text style={{ color: 'white', fontSize: calcWidth(18), marginLeft: calcWidth(10) }}>
                    Rate: {movieData.vote_average} ({movieData.vote_count})
                </Text>
                <Text style={{ color: 'white', fontSize: calcWidth(18), marginLeft: calcWidth(10) }}>
                    Overview: <Text style={{ color: 'white', fontSize: calcWidth(14), marginLeft: calcWidth(10) }}>
                        {movieData.overview}
                    </Text>
                </Text>

            </View>}
            {generalState.Loading["MOVIE_DETAILS"] &&
                <View style={{ marginTop: calcHeight(100) }}>
                    <ActivityIndicator color={'grey'} size={'large'} />
                </View>
            }

        </View>
    )
} 