import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../features/auth/screens/MainScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';
import SignupScreen from '../features/auth/screens/SignupScreen';
import FarmSignupScreen from '../features/auth/screens/FarmSignupScreen';
import WorkerSignupScreen from '../features/auth/screens/WorkerSignupScreen';
import HomeScreen from '../features/farm/screens/HomeScreen';
import PostScreen from '../features/farm/screens/PostScreen';
import UserScreen from '../features/farm/screens/UserScreen';
import { RootStackParamList, TabParamList, UserParamList } from '../types/navigation';
// user screens
import UserHomeScreen from '../features/user/screens/HomeScreen';
import UserMapScreen from '../features/user/screens/MapScreen';
import UserApplicationScreen from '../features/user/screens/ApplicationScreen';
import UserMypageScreen from '../features/user/screens/MypageScreen';
// 아이콘들
import HomeIcon from '../assets/icons/house-icon.svg';
import PostIcon from '../assets/icons/paper-icon.svg';
import UserIcon from '../assets/icons/user-icon.svg';
import MapIcon from '../assets/icons/map-icon.svg';
import CreateIcon from '../assets/icons/pencil-icon.svg';



// 아이콘 컴포넌트들
const Home = ({ color, size }: { color: string; size: number }) => (
    <HomeIcon width={size} height={size} color='#848585' />
);

const Post = ({ color, size }: { color: string; size: number }) => (
    <PostIcon width={size} height={size} color='#848585' />
);

const User = ({ color, size }: { color: string; size: number }) => (
    <UserIcon width={size} height={size} color='#848585' />
);

// 추가된 아이콘
const Map = ({ color, size }: { color: string; size: number }) => (
    <MapIcon width={size} height={size} color='#848585' />
);

const Create = ({ color, size }: { color: string; size: number }) => (
    <CreateIcon width={size} height={size} color='#848585' />
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const UserNav = createBottomTabNavigator<UserParamList>();

// 탭 네비게이터
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FF9A5C',
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
                    tabBarIcon: Home,
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    title: '공고 작성',
                    tabBarIcon: Create,
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    title: '마이페이지',
                    tabBarIcon: User,
                }}
            />
        </Tab.Navigator>
    );
}

// user Nav
function UserTabNavigator() {
    return (
        <UserNav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FF9A5C',
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
            <UserNav.Screen
                name="Home"
                component={UserHomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: Home,
                }}
            />
            <UserNav.Screen
                name="Map"
                component={UserMapScreen}
                options={{
                    title: '지도',
                    tabBarIcon: Map,
                }}
            />
            <UserNav.Screen
                name="Application"
                component={UserApplicationScreen}
                options={{
                    title: '지원이력',
                    tabBarIcon: Post,
                }}
            />
            <UserNav.Screen
                name="Mypage"
                component={UserMypageScreen}
                options={{
                    title: '마이페이지',
                    tabBarIcon: User,
                }}
            />
        </UserNav.Navigator>
    );
}


// 메인 네비게이터
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right', // 오른쪽에서 왼쪽으로 슬라이드
                    gestureEnabled: true, // 제스처 활성화
                    gestureDirection: 'horizontal', // 수평 제스처
                }}
            >
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="FarmSignup" component={FarmSignupScreen} />
                <Stack.Screen name="WorkerSignup" component={WorkerSignupScreen} />
                <Stack.Screen name="Main" component={TabNavigator} />
                <Stack.Screen name="UserMain" component={UserTabNavigator} />
                <Stack.Screen name="Tabs" component={TabNavigator} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
} 