import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from '../screens/Start';

export type Navigators = "Start"

const RNApp = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: { header: null, gesturesEnabled: true }
    },
  },
  {
    initialRouteName: 'Start',
  },
);



export default createAppContainer(RNApp);
