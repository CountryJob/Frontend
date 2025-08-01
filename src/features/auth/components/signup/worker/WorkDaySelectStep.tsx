import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import SubTitle from '../../ui/SubTitle';
import Button from '../../ui/Button';

interface WorkDaySelectStepProps {
    navigation: RootStackNavigationProp;
    onNext: (workDays: string[]) => void;
    onBack: () => void;
    onSkip?: () => void;
}

export default function WorkDaySelectStep({ onNext, onBack, onSkip }: WorkDaySelectStepProps) {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const workDays = [
        { key: 'monday', label: '월요일' },
        { key: 'tuesday', label: '화요일' },
        { key: 'wednesday', label: '수요일' },
        { key: 'thursday', label: '목요일' },
        { key: 'friday', label: '금요일' },
        { key: 'saturday', label: '토요일' },
        { key: 'sunday', label: '일요일' },
    ];

    const handleDayToggle = (dayKey: string) => {
        setSelectedDays(prev =>
            prev.includes(dayKey)
                ? prev.filter(day => day !== dayKey)
                : [...prev, dayKey]
        );
    };

    const handleNext = () => {
        if (selectedDays.length > 0) {
            onNext(selectedDays);
        }
    };

    const handleSkip = () => {
        if (onSkip) {
            onSkip(); // 모든 worker 단계 건너뛰기
        } else {
            onNext([]); // 기본값으로 빈 배열 전달
        }
    };

    return (
        <SignupLayout onBack={onBack} onSkip={handleSkip} showSkip={true}>
            <SubTitle>AI 추천 매칭을 위해 작성해주세요</SubTitle>
            <Title>
                근무 가능한 <HighlightText>요일</HighlightText>을 선택해주세요
            </Title>

            <View style={styles.dayContainer}>
                {workDays.map((day) => (
                    <TouchableOpacity
                        key={day.key}
                        style={[
                            styles.dayButton,
                            selectedDays.includes(day.key) && styles.selectedDayButton
                        ]}
                        onPress={() => handleDayToggle(day.key)}
                    >
                        <Text style={[
                            styles.dayText,
                            selectedDays.includes(day.key) && styles.selectedDayText
                        ]}>
                            {day.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedDays.length > 0 && (
                <Button
                    onPress={handleNext}
                    isActive={true}
                >
                    다음
                </Button>
            )}
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    dayContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 60,
        marginBottom: 60,
    },
    dayButton: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        minWidth: 80,
        alignItems: 'center',
    },
    selectedDayButton: {
        backgroundColor: '#7FCB8F',
    },
    dayText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    selectedDayText: {
        color: '#ffffff',
        fontWeight: '600',
    },
});
