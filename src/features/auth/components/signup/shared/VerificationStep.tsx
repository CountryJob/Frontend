import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import InputBox from '../../ui/InputBox';
import Button from '../../ui/Button';
import AttentionCircle from '../../../../../assets/Attention-Circle.svg';
import { authApi } from '../../../../../api';

interface VerificationStepProps {
    navigation: RootStackNavigationProp;
    phoneNumber: string;
    userType: 'FARMER' | 'WORKER';
    onNext: () => void;
}

export default function VerificationStep({ navigation, phoneNumber, userType, onNext }: VerificationStepProps) {
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

    const handleVerify = async () => {
        console.log('handleVerify called with:', verificationCode);
        console.log('verificationCode length:', verificationCode.length);

        if (verificationCode.length === 6) {
            const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
            const codeNumber = parseInt(verificationCode);

            console.log('📤 API 전송 - 회원가입:', {
                phoneNumber: cleanPhoneNumber,
                code: codeNumber,
                mode: userType
            });

            try {
                const response = await authApi.signup(cleanPhoneNumber, codeNumber, userType);
                console.log('📥 API 응답 - 회원가입:', response);
                setError('');
                onNext();
            } catch (error) {
                console.error('❌ API 에러 - 회원가입:', error);
                setError('인증번호를 잘못 입력하셨습니다.\n다시 확인해주세요.');
            }
        } else {
            console.log('No verification code entered');
            setError('인증번호 6자리를 입력해주세요.');
        }
    };

    const handleClear = () => {
        setVerificationCode('');
        setError('');
    };

    const handleResend = async () => {
        const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        console.log('📤 API 전송 - 인증번호 재요청:', { phoneNumber: cleanPhoneNumber });

        try {
            const response = await authApi.requestCode({ phoneNumber: cleanPhoneNumber });
            console.log('📥 API 응답 - 인증번호 재요청:', response);
            setTimeLeft(600);
            setError('');
            setVerificationCode('');
        } catch (error) {
            console.error('❌ API 에러 - 인증번호 재요청:', error);
            setError('인증번호 재요청에 실패했습니다.\n잠시 후 다시 시도해주세요.');
        }
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