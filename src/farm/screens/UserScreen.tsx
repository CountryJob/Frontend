import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserScreen() {
    const userData = {
        name: '김철수',
        email: 'kim@example.com',
        avatar: '👨‍🌾',
        joinDate: '2024년 1월',
        farmName: '행복농장',
        location: '경기도 수원시',
    };

    const stats = {
        totalCrops: 12,
        activeCrops: 8,
        completedHarvests: 5,
        totalArea: '2.5ha',
    };

    const menuItems = [
        { icon: '👤', title: '프로필 수정', subtitle: '개인정보 변경' },
        { icon: '🏠', title: '농장 정보', subtitle: '농장 상세 정보' },
        { icon: '📊', title: '농작물 통계', subtitle: '생산성 분석' },
        { icon: '⚙️', title: '앱 설정', subtitle: '알림, 언어 등' },
        { icon: '📚', title: '도움말', subtitle: '사용법 가이드' },
        { icon: '📞', title: '고객지원', subtitle: '문의 및 신고' },
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="flex-1">
                {/* 헤더 */}
                <View className="bg-green-600 px-6 py-8">
                    <Text className="text-white text-2xl font-bold mb-2">
                        마이페이지
                    </Text>
                    <Text className="text-green-100">
                        농장 관리 정보와 설정
                    </Text>
                </View>

                {/* 사용자 정보 카드 */}
                <View className="px-6 py-6">
                    <View className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                        <View className="flex-row items-center mb-4">
                            <Text className="text-4xl mr-4">{userData.avatar}</Text>
                            <View className="flex-1">
                                <Text className="text-xl font-bold text-gray-800">
                                    {userData.name}
                                </Text>
                                <Text className="text-gray-600">{userData.email}</Text>
                                <Text className="text-sm text-gray-500 mt-1">
                                    가입일: {userData.joinDate}
                                </Text>
                            </View>
                        </View>

                        <View className="border-t border-gray-100 pt-4">
                            <Text className="text-lg font-semibold text-gray-800 mb-2">
                                {userData.farmName}
                            </Text>
                            <Text className="text-gray-600">{userData.location}</Text>
                        </View>
                    </View>

                    {/* 농장 통계 */}
                    <View className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                        <Text className="text-lg font-semibold text-gray-800 mb-4">
                            농장 현황
                        </Text>
                        <View className="flex-row justify-between">
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-green-600">{stats.totalCrops}</Text>
                                <Text className="text-gray-600 text-sm">전체 작물</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-blue-600">{stats.activeCrops}</Text>
                                <Text className="text-gray-600 text-sm">재배 중</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-orange-600">{stats.completedHarvests}</Text>
                                <Text className="text-gray-600 text-sm">수확 완료</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-purple-600">{stats.totalArea}</Text>
                                <Text className="text-gray-600 text-sm">총 면적</Text>
                            </View>
                        </View>
                    </View>

                    {/* 메뉴 목록 */}
                    <View className="bg-white rounded-xl shadow-sm">
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                className={`flex-row items-center p-4 ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                            >
                                <Text className="text-2xl mr-4">{item.icon}</Text>
                                <View className="flex-1">
                                    <Text className="text-gray-800 font-medium">{item.title}</Text>
                                    <Text className="text-gray-500 text-sm">{item.subtitle}</Text>
                                </View>
                                <Text className="text-gray-400">›</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* 로그아웃 버튼 */}
                    <TouchableOpacity className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
                        <Text className="text-red-600 text-center font-medium">로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 