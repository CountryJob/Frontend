import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import SubTitle from '../../ui/SubTitle';
import Button from '../../ui/Button';

interface WorkTypeSelectStepProps {
    navigation: RootStackNavigationProp;
    onNext: (workType: 'short' | 'long' | 'any') => void;
    onBack: () => void;
    onSkip?: () => void;
}

export default function WorkTypeSelectStep({ onNext, onBack, onSkip }: WorkTypeSelectStepProps) {
    const [selectedWorkType, setSelectedWorkType] = useState<'short' | 'long' | 'any' | null>(null);

    const handleWorkTypeSelect = (workType: 'short' | 'long' | 'any') => {
        setSelectedWorkType(workType);
        // 선택 시 자동으로 다음으로 넘어가기
        onNext(workType);
    };

    const handleSkip = () => {
        if (onSkip) {
            onSkip(); // 모든 worker 단계 건너뛰기
        } else {
            onNext('any'); // 기본값으로 '상관없음' 선택
        }
    };

    return (
        <SignupLayout onBack={onBack} onSkip={handleSkip} showSkip={true}>
            <View style={styles.container}>
                <SubTitle>AI 추천 매칭을 위해 작성해주세요</SubTitle>
                <Title>
                    원하는 <HighlightText>근무 형태</HighlightText>를 선택해주세요
                </Title>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => handleWorkTypeSelect('short')}
                        isActive={selectedWorkType === 'short'}
                    >
                        단기
                    </Button>

                    <Button
                        onPress={() => handleWorkTypeSelect('long')}
                        isActive={selectedWorkType === 'long'}
                    >
                        장기
                    </Button>

                    <Button
                        onPress={() => handleWorkTypeSelect('any')}
                        isActive={selectedWorkType === 'any'}
                    >
                        상관없음
                    </Button>
                </View>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        gap: 20,
        marginTop: 80,
    },
}); 