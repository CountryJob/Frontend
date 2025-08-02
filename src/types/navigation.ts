import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    MainScreen: undefined;
    Login: undefined;
    Signup: undefined;
    WorkerSignup: { userType: 'WORKER' } | undefined;
    FarmSignup: { userType: 'FARMER' } | undefined;
    Main: undefined;
    UserMain: undefined;
    Tabs: { screen: string };
};

export type TabParamList = {
    Home: undefined;
    Post: undefined;
    User: undefined;
};

// userNav
export type UserParamList = {
    Home: undefined;
    Map: undefined;
    Application: undefined;
    Mypage: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;
// userNav 추가
export type UserNavigationProp = BottomTabNavigationProp<UserParamList>;