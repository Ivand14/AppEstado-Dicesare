import Auth  from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default ()=>{
    const UserId = useSelector(state => state.Auth.userId)
    
    return(
        <NavigationContainer>
            {UserId ? <BottomTabNavigator/> : <Auth/>}
        </NavigationContainer>
    )
}