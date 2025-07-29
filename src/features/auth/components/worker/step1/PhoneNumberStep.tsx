import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../common/SignupLayout';
import Title from '../../common/Title';
import SubTitle from '../../common/SubTitle';
import InputBox from '../../common/InputBox';
import Button from '../../common/Button';

interface PhoneNumberStepProps {
    navigation: RootStackNavigationProp;
    onNext: (phoneNumber: string) => void;
}

export default function PhoneNumberStep({ navigation, onNext }: PhoneNumberStepProps) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const formatPhoneNumber = (text: string) => {
        // 숫자만 추출
        const numbers = text.replace(/[^0-9]/g, '');

        // 11자리 제한
        if (numbers.length > 11) return phoneNumber;

        // 하이픈 추가
        if (numbers.length <= 3) {
            return numbers;
        } else if (numbers.length <= 7) {
            return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        } else {
            return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
        }
    };

    const handlePhoneNumberChange = (text: string) => {
        const formatted = formatPhoneNumber(text);
        setPhoneNumber(formatted);
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const handleNext = () => {
        if (phoneNumber.replace(/[^0-9]/g, '').length === 11) {
            onNext(phoneNumber);
        }
    };

    const handleClear = () => {
        setPhoneNumber('');
    };

    const isPhoneNumberComplete = phoneNumber.replace(/[^0-9]/g, '').length === 11;

    return (
        <SignupLayout onBack={handleBack}>
            <View style={styles.container}>
                <Title>전화번호를 입력해주세요</Title>
                <SubTitle>계정 확인이 필요해요</SubTitle>

                <View style={styles.inputSection}>
                    <InputBox
                        placeholder="010-0000-0000"
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        keyboardType="phone-pad"
                        maxLength={13}
                        variant="borderless"
                        showClearButton={true}
                        onClear={handleClear}
                        isPhoneNumber={true}
                    />

                    {isPhoneNumberComplete && (
                        <Button
                            onPress={handleNext}
                            isActive={true}
                        >
                            인증번호 받기
                        </Button>
                    )}
                </View>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    inputSection: {
        marginTop: 10,
        gap: 20,
    },
}); 