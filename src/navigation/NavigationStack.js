import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from '../screens/Start';
import Search from '../screens/Search';
import MovieDetails from '../screens/MovieDetails';
import FavoriteMovies from '../screens/FavoriteMovies';

export type Navigators = "Start" | "Search" | "TabNavigationStack"

const RNApp = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: { header: null, gesturesEnabled: true }
    },
    Search: {
      screen: Search,
      navigationOptions: { header: null, gesturesEnabled: true }
    },
    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: { header: null, gesturesEnabled: true }
    },
    FavoriteMovies: {
      screen: FavoriteMovies,
      navigationOptions: { header: null, gesturesEnabled: true }
    },
  },
  {
    initialRouteName: 'Start',
  },
);



export default createAppContainer(RNApp);
