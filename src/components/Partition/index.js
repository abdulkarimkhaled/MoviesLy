import React, { } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { calcHeight, calcWidth } from '../../config/metrics';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';

type Props = {
    title: String,
    loading: String,
    data: Array,
}

export default Partition = (props: Props) => {
    let { title, loading, data } = props
    const generalState = useSelector(state => state.generalReducer)

    //Render
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.partitionContainer} >
                <LinearGradient style={styles.partitionKnob} colors={['red', 'purple']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} />
                <Text style={styles.partitionText} >
                    {title}
                </Text>
            </View>
            <View style={{ height: calcHeight(200), justifyContent: 'center' }} >
                {!generalState.Loading[loading] ?
                    <FlatList
                        data={data}
                        bounces={false}
                        horizontal
                        contentContainerStyle={{ paddingLeft: calcWidth(28), marginTop: calcHeight(16) }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('MovieDetails', { movieId: item.id });
                            }} >
                                <Image
                                    resizeMode={'contain'}
                                    style={{ width: calcWidth(120), height: calcHeight(180), marginRight: calcWidth(14), backgroundColor: '#383838' }}
                                    source={
                                        item.poster_path != null ?
                                            { uri: "https://image.tmdb.org/t/p/original" + item.poster_path } :
                                            item.backdrop_path != null ?
                                                { uri: "https://image.tmdb.org/t/p/original" + item.backdrop_path } :
                                                require('../../config/svgs/NoImage.png')
                                    } />
                            </TouchableOpacity>
                        )}
                    /> : <ActivityIndicator color={'grey'} size={'large'} />}
            </View>
        </View>
    )

}

