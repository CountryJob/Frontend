import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../auth/screens/LoginScreen';
import HomeScreen from '../farm/screens/HomeScreen';
import PostScreen from '../farm/screens/PostScreen';
import UserScreen from '../farm/screens/UserScreen';
import { RootStackParamList, TabParamList, UserParamList } from '../types/navigation';
// user screens
import UserHomeScreen from '../user/screens/HomeScreen';
import UserMapScreen from '../user/screens/MapScreen';
import UserApplicationScreen from '../user/screens/ApplicationScreen';
import UserMypageScreen from '../user/screens/MypageScreen';

// 아이콘 컴포넌트들
const HomeIcon = ({ color, size }: { color: string; size: number }) => (
    <Text style={{ color, fontSize: size }}>🏠</Text>
);

const PostIcon = ({ color, size }: { color: string; size: number }) => (
    <Text style={{ color, fontSize: size }}>🌱</Text>
);

const UserIcon = ({ color, size }: { color: string; size: number }) => (
    <Text style={{ color, fontSize: size }}>🙂</Text>
);

// 추가된 아이콘
const MapIcon = ({ color, size }: { color: string; size: number }) => (
    <Text style={{ color, fontSize: size }}>📍</Text>
);

const ApplicationIcon = ({ color, size }: { color: string; size: number }) => (
    <Text style={{ color, fontSize: size }}>📑</Text>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const User = createBottomTabNavigator<UserParamList>();

// 탭 네비게이터
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#059669',
                tabBarInactiveTintColor: '#6B7280',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#E5E7EB',
                    paddingBottom: 20,
                    paddingTop: 10,
                    height: 70,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: HomeIcon,
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    title: '공고 작성',
                    tabBarIcon: PostIcon,
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    title: '마이페이지',
                    tabBarIcon: UserIcon,
                }}
            />
        </Tab.Navigator>
    );
}

// user Nav
function UserTabNavigator() {
    return (
        <User.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#059669',
                tabBarInactiveTintColor: '#6B7280',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#E5E7EB',
                    paddingBottom: 20,
                    paddingTop: 10,
                    height: 70,
                },
            }}
        >
            <User.Screen
                name="Home"
                component={UserHomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: HomeIcon,
                }}
            />
            <User.Screen
                name="Map"
                component={UserMapScreen}
                options={{
                    title: '지도',
                    tabBarIcon: MapIcon,
                }}
            />
            <User.Screen
                name="Application"
                component={UserApplicationScreen}
                options={{
                    title: '지원이력',
                    tabBarIcon: ApplicationIcon,
                }}
            />
            <User.Screen
                name="Mypage"
                component={UserMypageScreen}
                options={{
                    title: '마이페이지',
                    tabBarIcon: UserIcon,
                }}
            />
        </User.Navigator>
    );
}


// 메인 네비게이터
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={TabNavigator} />
                <Stack.Screen name="UserMain" component={UserTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} 