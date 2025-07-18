import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackNavigationProp } from '../types/navigation';

export default function LoginScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const handleLogin = () => {
        // 로그인 로직 구현
        navigation.navigate('Main');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center px-6">
                <View className="mb-8">
                    <Text className="text-3xl font-bold text-gray-900 mb-2">Farm4U</Text>
                    <Text className="text-gray-600">농업 관리 앱에 오신 것을 환영합니다</Text>
                </View>

                <View className="space-y-4">
                    <View>
                        <Text className="text-gray-700 mb-2 font-medium">이메일</Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900"
                            placeholder="이메일을 입력하세요"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View>
                        <Text className="text-gray-700 mb-2 font-medium">비밀번호</Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900"
                            placeholder="비밀번호를 입력하세요"
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        className="bg-green-600 py-3 rounded-lg mt-6"
                        onPress={handleLogin}
                    >
                        <Text className="text-white text-center font-semibold text-lg">
                            로그인
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="mt-4">
                        <Text className="text-green-600 text-center">회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
} 