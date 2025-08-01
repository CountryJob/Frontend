import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import Button from '../../ui/Button';

interface FinalSuccessStepProps {
    navigation: RootStackNavigationProp;
    onComplete: () => void;
    userType?: 'farm' | 'worker';
}

export default function FinalSuccessStep({ navigation, onComplete, userType = 'farm' }: FinalSuccessStepProps) {
    const handleComplete = () => {
        onComplete();
    };

    return (
        <SignupLayout onBack={() => navigation.goBack()}>
            <View style={styles.container}>
                <View style={styles.successIcon}>
                    <Text style={styles.checkmark}>✓</Text>
                </View>

                <Title>
                    <HighlightText>회원가입</HighlightText>이 완료되었습니다!
                </Title>

                <View style={styles.messageContainer}>
                    <Text style={styles.message}>
                        {userType === 'farm'
                            ? '농장 정보가 성공적으로 등록되었습니다.'
                            : '구직자 등록이 완료되었습니다.'
                        }
                    </Text>
                    <Text style={styles.subMessage}>
                        {userType === 'farm'
                            ? '이제 근로자들을 찾을 수 있습니다.'
                            : '이제 일자리를 찾을 수 있습니다.'
                        }
                    </Text>
                </View>

                <View style={styles.buttonSection}>
                    <Button
                        onPress={handleComplete}
                        isActive={true}
                    >
                        시작하기
                    </Button>
                </View>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 30,
        marginTop: 100,
    },
    successIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkmark: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    messageContainer: {
        alignItems: 'center',
        gap: 10,
    },
    message: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    subMessage: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    buttonSection: {
        marginTop: 40,
        width: '100%',
    },
}); 