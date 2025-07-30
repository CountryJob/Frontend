import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import Button from '../../ui/Button';

interface GenderSelectionStepProps {
    navigation: RootStackNavigationProp;
    onNext: (gender: 'male' | 'female') => void;
    onBack: () => void;
}

export default function GenderSelectionStep({ navigation, onNext }: GenderSelectionStepProps) {
    const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);

    const handleGenderSelect = (gender: 'male' | 'female') => {
        setSelectedGender(gender);
        onNext(gender);
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SignupLayout onBack={handleBack}>
            <View style={styles.container}>
                <Title>
                    <HighlightText>성별</HighlightText>을 알려주세요
                </Title>
            </View>

            <View style={styles.genderSection}>
                <Button
                    onPress={() => handleGenderSelect('male')}
                    isActive={selectedGender === 'male'}
                    style={styles.genderButton}
                >
                    남성
                </Button>

                <Button
                    onPress={() => handleGenderSelect('female')}
                    isActive={selectedGender === 'female'}
                    style={styles.genderButton}
                >
                    여성
                </Button>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
        backgroundColor: 'white',
    },
    genderSection: {
        gap: 30,
        marginTop: 60,
        marginBottom: 40,
    },
    genderButton: {
        marginBottom: 0,
    },
}); 