import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
    children: React.ReactNode;
    style?: any;
}

// 강조 텍스트를 위한 내부 컴포넌트
export const HighlightText = ({ children, style }: { children: React.ReactNode; style?: any }) => (
    <Text style={[styles.highlightText, style]}>
        {children}
    </Text>
);

export default function Title({ children, style }: TitleProps) {
    return (
        <Text style={[styles.title, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        lineHeight: 40,
    },
    highlightText: {
        color: '#7FCB8F',
    },
});