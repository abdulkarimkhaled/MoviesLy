import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import GradientText from '../../components/TextGradient'
import LinearGradient from 'react-native-linear-gradient';
import { getPopularMovies, getUpcomingMovies, getTopRatedMovies } from '../../api/ApisFunctions';
import { useDispatch, useSelector } from 'react-redux';
import Partition from '../../components/Partition';
import { calcHeight, calcWidth } from '../../config/metrics';
import Images from '../../config/Images'
import NavigationService from '../../navigation/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default Start = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)
    const dispatch = useDispatch()

    useEffect(() => { //call movies Api 
        dispatch(getPopularMovies())
        dispatch(getUpcomingMovies())
        dispatch(getTopRatedMovies())
    }, [])

    useEffect(() => {
        if (generalState.data.PopularList) { // set popular movies list on general state change 
            setPopularMovies(generalState.data.PopularList)
        }
    }, [generalState.data.PopularList])

    useEffect(() => {
        if (generalState.data.UpcomingList) { // set upcoming movies list on general state change 
            setUpcomingMovies(generalState.data.UpcomingList)
        }
    }, [generalState.data.UpcomingList])

    useEffect(() => {
        if (generalState.data.TopRatedList) { // set top rated movies list on general state change 
            setTopRatedMovies(generalState.data.TopRatedList)
        }
    }, [generalState.data.TopRatedList])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <GradientText colors={['white', 'grey']} style={styles.headerText} >
                    Explore
                </GradientText>
                <View style={{ flexDirection: 'row', width: calcWidth(70), justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        NavigationService.navigate('Search');
                    }} >
                        <Images style={{}} source={'Search'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        presistState.data && presistState.data.Favorites &&
                            presistState.data.Favorites.length != 0 ? NavigationService.navigate('FavoriteMovies', { favoriteList: presistState.data.Favorites }) : global.openToast('You dont have any movie added to your favorites', 'e');
                    }} >
                        <Images style={{}} source={'Heart'} />
                    </TouchableOpacity>
                </View>
            </View>
            <LinearGradient style={styles.headerBottomLine} colors={['black', 'white'].reverse()} start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 0 }} />
            <ScrollView bounces={false} nestedScrollEnabled contentContainerStyle={{ paddingBottom: calcHeight(28) }}>
                <Partition title={'Popular'} loading={'POPULAR'} data={popularMovies} />
                <Partition title={'Upcoming'} loading={'UPCOMING'} data={upcomingMovies} />
                <Partition title={'Top Rated'} loading={'TOP_RATED'} data={topRatedMovies} />
            </ScrollView>
        </View>
    )
}
