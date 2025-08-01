import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import SubTitle from '../../ui/SubTitle';
import Button from '../../ui/Button';

interface ExperienceSelectStepProps {
    navigation: RootStackNavigationProp;
    onNext: (experience: boolean) => void;
    onBack: () => void;
    onSkip?: () => void;
}

export default function ExperienceSelectStep({ onNext, onBack, onSkip }: ExperienceSelectStepProps) {
    const [selectedExperience, setSelectedExperience] = useState<boolean | null>(null);

    const handleExperienceSelect = (experience: boolean) => {
        setSelectedExperience(experience);
        // 선택 시 자동으로 다음으로 넘어가기
        onNext(experience);
    };

    const handleSkip = () => {
        if (onSkip) {
            onSkip(); // 모든 worker 단계 건너뛰기
        } else {
            onNext(false); // 기본값으로 false 전달
        }
    };

    return (
        <SignupLayout onBack={onBack} onSkip={handleSkip} showSkip={true}>
            <SubTitle>AI 추천 매칭을 위해 작성해주세요</SubTitle>
            <Title>
                <HighlightText>농업 경험</HighlightText>을 선택해주세요
            </Title>

            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => handleExperienceSelect(true)}
                    isActive={selectedExperience === true}
                >
                    네, 경험해봤어요
                </Button>

                <Button
                    onPress={() => handleExperienceSelect(false)}
                    isActive={selectedExperience === false}
                >
                    아니요, 처음이에요
                </Button>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        gap: 20,
        marginTop: 80,
    },
});
