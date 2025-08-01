import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SignupLayoutProps {
    children: React.ReactNode;
    onBack: () => void;
    onSkip?: () => void;
    showSkip?: boolean;
}

export default function SignupLayout({ children, onBack, onSkip, showSkip = false }: SignupLayoutProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* 헤더 영역 */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={onBack}>
                        <Text style={styles.backButtonText}>{'<'}</Text>
                    </TouchableOpacity>

                    {showSkip && onSkip && (
                        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
                            <Text style={styles.skipText}>건너뛰기</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* 내용 영역 */}
                <View style={styles.childrenContainer}>
                    {children}
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
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    backButtonText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
    },
    skipButton: {
        padding: 8,
    },
    skipText: {
        fontSize: 14,
        color: '#999',
    },
    childrenContainer: {
        flex: 1,
    },
}); 