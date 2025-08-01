import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import InputBox from '../../ui/InputBox';
import Button from '../../ui/Button';

interface BirthdayStepProps {
    navigation: RootStackNavigationProp;
    onNext: (birthday: string) => void;
}

export default function BirthdayStep({ navigation, onNext }: BirthdayStepProps) {
    const [birthday, setBirthday] = useState('');

    const formatBirthday = (text: string) => {
        // 숫자만 추출
        const numbers = text.replace(/[^0-9]/g, '');

        // 8자리 제한
        if (numbers.length > 8) return birthday;

        // 자동 포맷팅
        if (numbers.length <= 4) {
            return numbers;
        } else if (numbers.length <= 6) {
            return `${numbers.slice(0, 4)}년 ${numbers.slice(4)}월`;
        } else {
            return `${numbers.slice(0, 4)}년 ${numbers.slice(4, 6)}월 ${numbers.slice(6)}일`;
        }
    };

    const handleBirthdayChange = (text: string) => {
        // 백스페이스 처리
        if (text.length < birthday.length) {
            // 삭제된 경우, 숫자만 남기고 다시 포맷팅
            const currentNumbers = birthday.replace(/[^0-9]/g, '');
            const newNumbers = currentNumbers.slice(0, -1);

            if (newNumbers.length <= 4) {
                setBirthday(newNumbers);
            } else if (newNumbers.length <= 6) {
                setBirthday(`${newNumbers.slice(0, 4)}년 ${newNumbers.slice(4)}월`);
            } else {
                setBirthday(`${newNumbers.slice(0, 4)}년 ${newNumbers.slice(4, 6)}월 ${newNumbers.slice(6)}일`);
            }
        } else {
            // 추가된 경우, 기존 포맷팅 로직 사용
            const formatted = formatBirthday(text);
            setBirthday(formatted);
        }
    };

    const handleNext = () => {
        if (birthday.replace(/[^0-9]/g, '').length === 8) {
            // API 형식으로 변환 (YYYY-MM-DD)
            const numbers = birthday.replace(/[^0-9]/g, '');
            const apiFormat = `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 8)}`;
            onNext(apiFormat);
        }
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const handleClear = () => {
        setBirthday('');
    };

    return (
        <SignupLayout onBack={handleBack}>
            <View style={styles.container}>
                <Title>
                    <HighlightText>생일</HighlightText>을 알려주세요
                </Title>

                <View style={styles.inputSection}>
                    <InputBox
                        placeholder="0000년 00월 00일"
                        value={birthday}
                        onChangeText={handleBirthdayChange}
                        keyboardType="phone-pad"
                        maxLength={13}
                        variant="borderless"
                        showClearButton={true}
                        onClear={handleClear}
                        style={styles.inputText}
                        selectionColor="#DAF1DB"
                        isPhoneNumber={true}
                    />
                </View>

                {birthday.replace(/[^0-9]/g, '').length === 8 && (
                    <Button
                        onPress={handleNext}
                        isActive={true}
                    >
                        확인
                    </Button>
                )}
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 30,
        backgroundColor: 'white',
    },
    inputSection: {
        marginTop: 25,
        alignItems: 'center',
    },
    inputText: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000000',
        paddingHorizontal: 0,
        paddingLeft: 0,
        textAlign: 'center',
    },
}); 