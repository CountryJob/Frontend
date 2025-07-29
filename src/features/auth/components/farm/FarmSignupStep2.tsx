import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FarmSignupStep2Props {
    phoneNumber: string;
    onNext: () => void;
    onBack: () => void;
    onResend: () => void;
}

export default function FarmSignupStep2({ phoneNumber, onNext, onBack, onResend }: FarmSignupStep2Props) {
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

    const handleResend = () => {
        setTimeLeft(600);
        setError('');
        setVerificationCode('');
        onResend();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* 뒤로가기 버튼 */}
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </TouchableOpacity>

                {/* 제목 */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        {phoneNumber} 전송된{'\n'}인증번호를 입력해주세요
                    </Text>
                </View>

                {/* 인증번호 입력 */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.verificationInput}
                        placeholder="인증번호 6자리"
                        value={verificationCode}
                        onChangeText={setVerificationCode}
                        keyboardType="number-pad"
                        maxLength={6}
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>

                {/* 타이머 및 재전송 */}
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                    {timeLeft === 0 && (
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.resendText}>인증 재요청</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* 확인 버튼 */}
                <TouchableOpacity
                    style={[
                        styles.verifyButton,
                        verificationCode.trim() && styles.verifyButtonActive
                    ]}
                    onPress={handleVerify}
                    disabled={!verificationCode.trim()}
                >
                    <Text style={[
                        styles.verifyButtonText,
                        verificationCode.trim() && styles.verifyButtonTextActive
                    ]}>
                        확인
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    backButtonText: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
    },
    titleContainer: {
        marginBottom: 40,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 32,
    },
    inputContainer: {
        marginBottom: 20,
    },
    verificationInput: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        backgroundColor: 'white',
        textAlign: 'center',
        letterSpacing: 8,
    },
    errorText: {
        color: '#EF4444',
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center',
    },
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    timerText: {
        fontSize: 16,
        color: '#666666',
    },
    resendText: {
        fontSize: 16,
        color: '#7FCB8F',
        fontWeight: '600',
    },
    verifyButton: {
        backgroundColor: '#DAF1DB',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    verifyButtonActive: {
        backgroundColor: '#7FCB8F',
    },
    verifyButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#383737',
    },
    verifyButtonTextActive: {
        color: '#FFFFFF',
    },
}); 