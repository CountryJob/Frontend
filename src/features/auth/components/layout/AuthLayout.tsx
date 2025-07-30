import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SignupLayoutProps {
    children: React.ReactNode;
    onBack: () => void;
}

export default function SignupLayout({ children, onBack }: SignupLayoutProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* 뒤로가기 버튼 */}
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </TouchableOpacity>

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
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 40,
    },
    backButtonText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
    },
    childrenContainer: {
        flex: 1,
    },
}); 