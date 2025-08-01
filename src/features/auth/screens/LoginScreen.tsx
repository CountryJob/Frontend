import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackNavigationProp } from '../../../types/navigation';
import MainIcon from '../../../assets/main-icon.svg'; // Using react-native-svg-transformer

const { height } = Dimensions.get('window');

export default function LoginScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(0)).current;
    const contentAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // 첫 번째 애니메이션: 아이콘과 제목 페이드인
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // 두 번째 애니메이션: 위로 슬라이드하면서 내용 나타남
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(contentAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }),
            ]).start();
        }, 1200);
    }, [fadeAnim, slideAnim, contentAnim]);

    const handleLogin = () => {
        // 로그인 로직 구현
        navigation.navigate('Main');
    };

    // 시작 전 구경해보기 (userMain으로 이동)
    const handleUserMain = () => {
        navigation.navigate('UserMain');
    }

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* 첫 번째 화면: 아이콘과 제목 */}
                <Animated.View
                    style={[
                        styles.firstScreen,
                        {
                            opacity: fadeAnim,
                            transform: [{
                                translateY: slideAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -height * 0.15], // 살짝 위로 올라감
                                })
                            }]
                        }
                    ]}
                >
                    <View style={styles.iconContainer}>
                        <MainIcon width={200} height={200} />
                    </View>

                    <Text style={styles.title}>팜포유</Text>
                    <Text style={styles.subtitle}>농촌 인력 중개</Text>
                </Animated.View>

                {/* 두 번째 화면: 로그인 폼 */}
                <Animated.View
                    style={[
                        styles.secondScreen,
                        {
                            opacity: contentAnim,
                            transform: [{
                                translateY: contentAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [50, 0],
                                })
                            }]
                        }
                    ]}
                >
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginButtonText}>로그인</Text>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupQuestion}>처음 방문이신가요? </Text>
                        <TouchableOpacity onPress={handleSignup}>
                            <Text style={styles.signupText}>회원가입</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.previewButton} onPress={handleUserMain}>
                        <Text style={styles.previewText}>시작 전 구경해보기</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    firstScreen: {
        alignItems: 'center',
        position: 'absolute',
        top: height * 0.3,
    },
    secondScreen: {
        alignItems: 'center',
        position: 'absolute',
        top: height * 0.55,
        width: '100%',
        marginTop: 30,
    },
    iconContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: '600',
        color: '#7FCB8F',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 25,
        color: '#7FCB8F',
        opacity: 0.8,
    },
    loginButton: {
        backgroundColor: '#7FCB8F',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
    },
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 10,
    },
    signupQuestion: {
        color: '#DBDBDB',
        fontSize: 15,
    },
    signupText: {
        color: '#EE962E',
        fontSize: 15,
        fontWeight: '600',
    },
    previewButton: {
        marginTop: 30,
    },
    previewText: {
        color: '#7FCB8F',
        textAlign: 'center',
        fontSize: 16,
    },
}); 