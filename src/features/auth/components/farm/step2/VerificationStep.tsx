import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../common/SignupLayout';
import Title, { HighlightText } from '../../common/Title';
import InputBox from '../../common/InputBox';
import Button from '../../common/Button';

interface VerificationStepProps {
    navigation: RootStackNavigationProp;
    phoneNumber: string;
    onNext: () => void;
}

export default function VerificationStep({ navigation, phoneNumber, onNext }: VerificationStepProps) {
    const [verificationCode, setVerificationCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(600); // 10분
    const [error, setError] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const handleVerify = () => {
        if (verificationCode.trim()) {
            // 임시로 123456이 올바른 코드라고 가정
            if (verificationCode === '123456') {
                setError('');
                onNext();
            } else {
                setError('인증번호를 다시 확인해주세요.');
            }
        }
    };

    const handleClear = () => {
        setVerificationCode('');
        setError('');
    };

    const handleResend = () => {
        setTimeLeft(600);
        setError('');
        setVerificationCode('');
        console.log('Resending verification code to:', phoneNumber);
    };

    return (
        <SignupLayout onBack={handleBack}>
            <Title>
                {phoneNumber} 전송된{'\n'}
                <HighlightText>인증번호</HighlightText>를 입력해주세요
            </Title>

            <View style={styles.verificationContainer}>
                <InputBox
                    placeholder="인증번호 6자리"
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                    keyboardType="number-pad"
                    maxLength={6}
                    showClearButton={true}
                    showResendButton={true}
                    onClear={handleClear}
                    onResend={handleResend}
                    resendText="인증 재요청"
                />

                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                </View>

                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}
            </View>

            <Button
                onPress={handleVerify}
                isActive={verificationCode.trim().length > 0}
            >
                확인
            </Button>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    verificationContainer: {
        gap: 20,
    },
    timerContainer: {
        alignItems: 'flex-end',
    },
    timerText: {
        fontSize: 16,
        color: '#A7A7A7',
    },
    errorText: {
        color: '#EF4444',
        fontSize: 14,
        textAlign: 'center',
    },
}); 