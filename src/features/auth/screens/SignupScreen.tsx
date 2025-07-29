import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../types/navigation';
import SignupLayout from '../components/common/SignupLayout';
import Title, { HighlightText } from '../components/common/Title';
import Button from '../components/common/Button';

export default function SignupScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const [hoveredButton, setHoveredButton] = useState<'worker' | 'farm' | null>(null);

    const handleWorkerSignup = () => {
        navigation.navigate('WorkerSignup');
    };

    const handleFarmSignup = () => {
        navigation.navigate('FarmSignup');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SignupLayout onBack={handleBack}>
            {/* 메인 질문 */}
            <View style={styles.questionContainer}>
                <Title>
                    어떤 <HighlightText>목적</HighlightText>으로{'\n'}
                    팜포유를 사용하시나요?
                </Title>
            </View>

            {/* 선택 버튼들 */}
            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleWorkerSignup}
                    isActive={hoveredButton === 'worker'}
                    onPressIn={() => setHoveredButton('worker')}
                    onPressOut={() => setHoveredButton(null)}
                >
                    나의 일자리 찾기
                </Button>

                <Button
                    onPress={handleFarmSignup}
                    isActive={hoveredButton === 'farm'}
                    onPressIn={() => setHoveredButton('farm')}
                    onPressOut={() => setHoveredButton(null)}
                >
                    농장 일손 구하기
                </Button>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    questionContainer: {
        alignItems: 'flex-start',
        marginBottom: 90,
    },
    buttonContainer: {
        gap: 30,
    },
}); 