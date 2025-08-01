import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import InputBox from '../../ui/InputBox';
import Button from '../../ui/Button';

interface BusinessLicenseStepProps {
    navigation: RootStackNavigationProp;
    onNext: (businessNumber: string) => void;
    onBack: () => void;
}

export default function BusinessLicenseStep({ navigation, onNext, onBack }: BusinessLicenseStepProps) {
    const [businessNumber, setBusinessNumber] = useState('');

    const formatBusinessNumber = (text: string) => {
        // 숫자만 추출
        const numbers = text.replace(/[^0-9]/g, '');

        // 10자리 제한 (사업자등록번호는 10자리)
        if (numbers.length > 10) return businessNumber;

        // 하이픈 추가 (000-00-00000 형식)
        if (numbers.length <= 3) {
            return numbers;
        } else if (numbers.length <= 5) {
            return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        } else {
            return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5)}`;
        }
    };

    const handleBusinessNumberChange = (text: string) => {
        const formatted = formatBusinessNumber(text);
        setBusinessNumber(formatted);
    };

    const handleBack = () => {
        onBack();
    };

    const handleNext = () => {
        if (businessNumber.replace(/[^0-9]/g, '').length === 10) {
            onNext(businessNumber);
        }
    };

    const handleClear = () => {
        setBusinessNumber('');
    };

    const isBusinessNumberComplete = businessNumber.replace(/[^0-9]/g, '').length === 10;

    return (
        <SignupLayout onBack={handleBack}>
            <View style={styles.container}>
                <Title>
                    <HighlightText>사업자등록번호</HighlightText>를 알려주세요
                </Title>

                <View style={styles.inputSection}>
                    <InputBox
                        placeholder="000-00-00000"
                        value={businessNumber}
                        onChangeText={handleBusinessNumberChange}
                        keyboardType="number-pad"
                        maxLength={12}
                        variant="borderless"
                        showClearButton={true}
                        onClear={handleClear}
                        isPhoneNumber={true}
                    />

                    {isBusinessNumberComplete && (
                        <Button
                            onPress={handleNext}
                            isActive={true}
                        >
                            확인
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
        marginTop: 20,
        gap: 20,
    },
}); 