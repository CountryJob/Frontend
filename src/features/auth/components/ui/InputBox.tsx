import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface InputBoxProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'phone-pad' | 'number-pad' | 'email-address';
    maxLength?: number;
    style?: any;
    variant?: 'bordered' | 'borderless';
    showClearButton?: boolean;
    showResendButton?: boolean;
    onClear?: () => void;
    onResend?: () => void;
    resendText?: string;
    isPhoneNumber?: boolean;
    isBusinessNumber?: boolean;
    selectionColor?: string;
}

export default function InputBox({
    placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    maxLength,
    style,
    variant = 'bordered',
    showClearButton = false,
    showResendButton = false,
    onClear,
    onResend,
    resendText = "인증 재요청",
    isPhoneNumber = false,
    selectionColor = '#DAF1DB',
}: InputBoxProps) {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        variant === 'borderless' ? styles.inputBorderless : styles.inputBordered,
                        isPhoneNumber ? styles.phoneInput : null,
                        isPhoneNumber && value.length > 0 ? styles.phoneInputWithClear : null,
                        style
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={isPhoneNumber ? '#A7A7A7' : '#9CA3AF'}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    textAlign={isPhoneNumber ? 'center' : 'left'}
                    selectionColor={selectionColor}
                />
                {showClearButton && value.length > 0 && (
                    <TouchableOpacity style={styles.clearButton} onPress={onClear}>
                        <Text style={styles.clearButtonText}>×</Text>
                    </TouchableOpacity>
                )}
            </View>
            {showResendButton && (
                <TouchableOpacity style={styles.resendButton} onPress={onResend}>
                    <Text style={styles.resendButtonText}>{resendText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    inputContainer: {
        flex: 1,
        position: 'relative',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        backgroundColor: 'white',
        paddingRight: 40, // X 버튼 공간
    },
    inputBordered: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
    },
    inputBorderless: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        borderRadius: 0,
    },
    phoneInput: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
        paddingHorizontal: 0,
        paddingVertical: 20,
        paddingRight: 0,
    },
    phoneInputWithClear: {
        paddingRight: 40,
    },
    clearButton: {
        position: 'absolute',
        right: 12,
        top: '50%',
        transform: [{ translateY: -10 }],
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearButtonText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    resendButton: {
        backgroundColor: '#7FCB8F',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 10,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resendButtonText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600',
    },
}); 