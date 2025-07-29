import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    isActive?: boolean;
    style?: any;
    textStyle?: any;
}

export default function Button({
    children,
    onPress,
    onPressIn,
    onPressOut,
    isActive = false,
    style,
    textStyle
}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handlePressIn = () => {
        setIsHovered(true);
        onPressIn?.();
    };

    const handlePressOut = () => {
        setIsHovered(false);
        onPressOut?.();
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                (isActive || isHovered) && styles.buttonActive,
                style
            ]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={[
                styles.buttonText,
                (isActive || isHovered) && styles.buttonTextActive,
                textStyle
            ]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DAF1DB',
        paddingVertical: 20,
        paddingHorizontal: 24,
        borderRadius: 20,
        alignItems: 'center',
        minHeight: 60,
        justifyContent: 'center',
    },
    buttonActive: {
        backgroundColor: '#7FCB8F',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#383737',
        textAlign: 'center',
    },
    buttonTextActive: {
        color: '#FFFFFF',
    },
});
