import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { HomeScreen, SelectCards, CardBlue, CardRed, CardYelow } from "./screens/index";

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        SelectCards,
        CardBlue,
        CardRed,
        CardYelow
    },
    {
        initialRouteName : 'HomeScreen',
        headerMode : 'none'
    }
);

export default createAppContainer(AppNavigator);