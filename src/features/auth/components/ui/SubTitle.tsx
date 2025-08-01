import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SubTitleProps {
    children: React.ReactNode;
    style?: any;
}

export default function SubTitle({ children, style }: SubTitleProps) {
    return (
        <Text style={[styles.subtitle, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: '#A7A7A7',
        textAlign: 'left',
        lineHeight: 24,
    },
});