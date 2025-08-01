import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import InputBox from '../../ui/InputBox';
import Button from '../../ui/Button';

interface NameInputStepProps {
    navigation: RootStackNavigationProp;
    onNext: (name: string) => void;
    onBack: () => void;
}

export default function NameInputStep({ navigation, onNext }: NameInputStepProps) {
    const [name, setName] = useState('');

    const handleNext = () => {
        if (name.trim()) {
            onNext(name.trim());
        }
    };

    const handleClear = () => {
        setName('');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SignupLayout onBack={handleBack}>
            <View style={styles.container}>
                <Title>
                    <HighlightText>성함</HighlightText>를 입력해주세요
                </Title>
            </View>

            <View style={styles.inputSection}>
                <InputBox
                    placeholder=""
                    value={name}
                    onChangeText={setName}
                    variant="borderless"
                    showClearButton={true}
                    onClear={handleClear}
                    style={styles.inputText}
                    selectionColor="#DAF1DB"
                />
            </View>

            {name.trim().length > 0 && (
                <Button
                    onPress={handleNext}
                    isActive={true}
                >
                    확인
                </Button>
            )}
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    inputText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        paddingHorizontal: 0,
        paddingLeft: 0,
    },
    inputSection: {
        marginTop: 60,
        marginBottom: 40,
        paddingHorizontal: 10,
    },
}); 