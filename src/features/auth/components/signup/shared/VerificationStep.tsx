import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import InputBox from '../../ui/InputBox';
import Button from '../../ui/Button';
import AttentionCircle from '../../../../../assets/Attention-Circle.svg';

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
                    setError('인증 유효시간이 초과되었습니다.\n인증번호를 다시 요청하세요.');
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
        console.log('handleVerify called with:', verificationCode);
        console.log('verificationCode length:', verificationCode.length);

        if (verificationCode.length > 0) {
            // 임시로 123456이 올바른 코드라고 가정
            if (verificationCode === '123456') {
                console.log('Correct code, proceeding to next step');
                setError('');
                onNext();
            } else {
                setError('인증번호를 잘못 입력하셨습니다.\n다시 확인해주세요.');
            }
        } else {
            console.log('No verification code entered');
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

                <View style={styles.timerErrorContainer}>
                    <View style={styles.leftContainer}>
                        {error ? (
                            <View style={styles.errorContainer}>
                                <AttentionCircle width={16} height={16} style={styles.errorIcon} />
                                <Text style={styles.errorText}>{error}</Text>
                            </View>
                        ) : null}
                    </View>
                    <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                </View>

            </View>

            <Button
                onPress={handleVerify}
                isActive={verificationCode.length > 0}
            >
                확인
            </Button>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    verificationContainer: {
        gap: 10,
        marginTop: 20,
    },
    timerErrorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 30,
    },
    timerText: {
        fontSize: 15,
        color: '#D9D9D9',
    },
    leftContainer: {
        flex: 1,
        marginRight: 10,
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    errorIcon: {
        marginRight: 6,
        marginTop: 2,
    },
    errorText: {
        color: '#FF364B',
        fontSize: 12,
        textAlign: 'left',
        lineHeight: 20,
        flex: 1,
    },
}); 