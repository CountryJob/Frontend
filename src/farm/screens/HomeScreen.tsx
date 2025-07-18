import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProp } from '../../types/navigation';

export default function HomeScreen() {
    const navigation = useNavigation<TabNavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="flex-1">
                {/* 헤더 */}
                <View className="bg-green-600 px-6 py-12">
                    <Text className="text-white text-3xl font-bold mb-2">
                        농가 구인
                    </Text>
                    <Text className="text-green-100 text-lg">
                        농장 일손 구하기 플랫폼
                    </Text>
                </View>

                {/* 메인 콘텐츠 */}
                <View className="px-6 py-8">
                    {/* 환영 메시지 */}
                    <View className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                        <Text className="text-2xl font-bold text-gray-800 mb-2">
                            안녕하세요! 👨‍🌾
                        </Text>
                        <Text className="text-gray-600 text-base">
                            농장 일손을 구하시나요? 간단한 공고로 빠르게 구인하세요.
                        </Text>
                    </View>

                    {/* 주요 기능 */}
                    <View className="space-y-4">
                        {/* 공고 올리기 */}
                        <TouchableOpacity
                            className="bg-green-50 border border-green-200 rounded-xl p-6"
                            onPress={() => navigation.navigate('Post')}
                        >
                            <View className="flex-row items-center">
                                <View className="bg-green-500 w-12 h-12 rounded-full items-center justify-center mr-4">
                                    <Text className="text-white text-xl">📝</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-semibold text-gray-800 mb-1">
                                        공고 올리기
                                    </Text>
                                    <Text className="text-gray-600">
                                        새로운 구인 공고를 작성하세요
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* 내 공고 관리 */}
                        <TouchableOpacity
                            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                            onPress={() => navigation.navigate('User')}
                        >
                            <View className="flex-row items-center">
                                <View className="bg-blue-500 w-12 h-12 rounded-full items-center justify-center mr-4">
                                    <Text className="text-white text-xl">📋</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-semibold text-gray-800 mb-1">
                                        내 공고 관리
                                    </Text>
                                    <Text className="text-gray-600">
                                        등록한 공고와 지원자 확인
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* 간단한 통계 */}
                    <View className="mt-8">
                        <Text className="text-xl font-bold text-gray-800 mb-4">
                            이번 달 현황
                        </Text>
                        <View className="bg-white rounded-xl p-6 shadow-sm">
                            <View className="flex-row justify-between">
                                <View>
                                    <Text className="text-gray-600 text-sm">등록한 공고</Text>
                                    <Text className="text-2xl font-bold text-green-600">3</Text>
                                </View>
                                <View>
                                    <Text className="text-gray-600 text-sm">지원자</Text>
                                    <Text className="text-2xl font-bold text-blue-600">12</Text>
                                </View>
                                <View>
                                    <Text className="text-gray-600 text-sm">채용 완료</Text>
                                    <Text className="text-2xl font-bold text-orange-600">2</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 