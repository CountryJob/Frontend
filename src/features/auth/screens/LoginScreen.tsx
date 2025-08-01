import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { RootStackNavigationProp } from '../../../types/navigation';
import SignupLayout from '../components/layout/AuthLayout';
import Title, { HighlightText } from '../components/ui/Title';
import SubTitle from '../components/ui/SubTitle';
import InputBox from '../components/ui/InputBox';
import Button from '../components/ui/Button';
import { authApi } from '../../../api/auth/authApi';

export default function LoginScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const [currentStep, setCurrentStep] = useState<'phone' | 'verification'>('phone');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const formatPhoneNumber = (text: string) => {
        const numbers = text.replace(/[^0-9]/g, '');
        if (numbers.length > 11) return phoneNumber;

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

    const handleVerificationCodeChange = (text: string) => {
        setVerificationCode(text);
    };

    const handleSendVerification = async () => {
        if (phoneNumber.replace(/[^0-9]/g, '').length === 11) {
            const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
            console.log('📤 API 전송 - 인증번호 요청:', { phoneNumber: cleanPhoneNumber });

            try {
                // Fetch 기반 API 사용 (더 안정적)
                console.log('🔄 Fetch로 인증번호 요청...');
                const response = await authApi.requestCode({ phoneNumber: cleanPhoneNumber });
                console.log('📥 API 응답 - 인증번호 요청:', response);
                setCurrentStep('verification');
            } catch (error) {
                console.error('❌ API 에러 - 인증번호 요청:', error);
                Alert.alert('오류', '인증번호 요청에 실패했습니다. 네트워크 연결을 확인해주세요.');
            }
        }
    };

    const handleVerifyCode = async () => {
        if (verificationCode.length === 6) {
            const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
            const codeNumber = parseInt(verificationCode);
            console.log('📤 API 전송 - 로그인:', { phoneNumber: cleanPhoneNumber, code: codeNumber });

            try {
                const response = await authApi.login(cleanPhoneNumber, codeNumber);
                console.log('📥 API 응답 - 로그인:', response);
                navigation.navigate('Main');
            } catch (error) {
                console.error('❌ API 에러 - 로그인:', error);
                Alert.alert('오류', '로그인에 실패했습니다. 인증번호를 확인해주세요.');
            }
        }
    };

    const handleClearPhone = () => {
        setPhoneNumber('');
    };

    const handleClearCode = () => {
        setVerificationCode('');
    };

    const handleBack = () => {
        if (currentStep === 'verification') {
            setCurrentStep('phone');
        } else if (currentStep === 'phone') {
            navigation.navigate('MainScreen');
        } else {
            navigation.goBack();
        }
    };

    const isPhoneNumberComplete = phoneNumber.replace(/[^0-9]/g, '').length === 11;
    const isVerificationCodeComplete = verificationCode.length === 6;

    // 전화번호 입력 화면
    if (currentStep === 'phone') {
        return (
            <SignupLayout onBack={handleBack}>
                <View style={styles.container}>
                    <Title>
                        <HighlightText>전화번호</HighlightText>를 입력해주세요
                    </Title>
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
                            onClear={handleClearPhone}
                            isPhoneNumber={true}
                        />

                        {isPhoneNumberComplete && (
                            <Button
                                onPress={handleSendVerification}
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

    // 인증번호 입력 화면
    if (currentStep === 'verification') {
        return (
            <SignupLayout onBack={handleBack}>
                <View style={styles.container}>
                    <Title>
                        <HighlightText>인증번호</HighlightText>를 입력해주세요
                    </Title>
                    <SubTitle>{phoneNumber}로 인증번호를 발송했습니다</SubTitle>

                    <View style={styles.inputSection}>
                        <InputBox
                            placeholder="000000"
                            value={verificationCode}
                            onChangeText={handleVerificationCodeChange}
                            keyboardType="number-pad"
                            maxLength={6}
                            variant="borderless"
                            showClearButton={true}
                            onClear={handleClearCode}
                            isPhoneNumber={true}
                        />

                        {isVerificationCodeComplete && (
                            <Button
                                onPress={handleVerifyCode}
                                isActive={true}
                            >
                                로그인
                            </Button>
                        )}
                    </View>
                </View>
            </SignupLayout>
        );
    }

    return null;
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