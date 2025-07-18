import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CropManagementScreen() {
    const crops = [
        {
            id: 1,
            name: '토마토',
            status: '성장 중',
            health: 95,
            daysLeft: 15,
            icon: '🍅'
        },
        {
            id: 2,
            name: '상추',
            status: '수확 준비',
            health: 88,
            daysLeft: 3,
            icon: '🥬'
        },
        {
            id: 3,
            name: '고추',
            status: '새싹',
            health: 92,
            daysLeft: 45,
            icon: '🌶️'
        }
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="flex-1">
                {/* 헤더 */}
                <View className="bg-green-600 px-6 py-8">
                    <Text className="text-white text-2xl font-bold mb-2">
                        작물 관리
                    </Text>
                    <Text className="text-green-100">
                        현재 {crops.length}개 작물 재배 중
                    </Text>
                </View>

                {/* 작물 목록 */}
                <View className="px-6 py-6">
                    {crops.map((crop) => (
                        <TouchableOpacity
                            key={crop.id}
                            className="bg-white rounded-xl p-6 mb-4 shadow-sm"
                        >
                            <View className="flex-row items-center">
                                <View className="bg-green-100 w-16 h-16 rounded-full items-center justify-center mr-4">
                                    <Text className="text-2xl">{crop.icon}</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-semibold text-gray-800 mb-1">
                                        {crop.name}
                                    </Text>
                                    <Text className="text-gray-600 text-sm mb-2">
                                        {crop.status} • {crop.daysLeft}일 남음
                                    </Text>
                                    <View className="flex-row items-center">
                                        <View className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                                            <View
                                                className="bg-green-500 h-2 rounded-full"
                                                style={{ width: `${crop.health}%` }}
                                            />
                                        </View>
                                        <Text className="text-sm text-gray-600">
                                            {crop.health}%
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {/* 새 작물 추가 버튼 */}
                    <TouchableOpacity className="bg-green-600 rounded-xl p-6 items-center">
                        <Text className="text-white text-lg font-semibold">
                            + 새 작물 추가
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 