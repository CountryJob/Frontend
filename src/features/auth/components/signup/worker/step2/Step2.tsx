import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackNavigationProp } from '../../../../../../types/navigation';
import Button from '../../../ui/Button';

interface WorkerStep2Props {
    navigation: RootStackNavigationProp;
    onComplete: () => void;
    userData: { phoneNumber: string; name: string; gender: 'male' | 'female' };
}

export default function WorkerStep2({ navigation, onComplete, userData }: WorkerStep2Props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>온보딩/근로자6</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>근로자 추가 정보</Text>
                    <Text style={styles.subtitleText}>
                        {userData.name}님의 근로자 정보를 입력해주세요
                    </Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        전화번호: {userData.phoneNumber}
                    </Text>
                    <Text style={styles.infoText}>
                        이름: {userData.name}
                    </Text>
                    <Text style={styles.infoText}>
                        성별: {userData.gender === 'male' ? '남성' : '여성'}
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={onComplete}
                        isActive={true}
                        style={styles.completeButton}
                    >
                        회원가입 완료
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    backButton: {
        padding: 8,
    },
    backButtonText: {
        fontSize: 24,
        color: '#7FCB8F',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginLeft: 10,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    titleContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        lineHeight: 40,
        marginBottom: 10,
    },
    subtitleText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    infoContainer: {
        marginBottom: 40,
        padding: 20,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    completeButton: {
        width: '100%',
        maxWidth: 300,
    },
}); 