import React, { useState } from 'react';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import PhoneNumberStep from './PhoneNumberStep';
import VerificationStep from './VerificationStep';
import NameInputStep from './NameInputStep';
import GenderSelectionStep from './GenderSelectionStep';

interface Step1Props {
    navigation: RootStackNavigationProp;
    userType: 'FARMER' | 'WORKER';
    onComplete: (data: { phoneNumber: string; name: string; gender: 'male' | 'female' }) => void;
}

export default function Step1({ navigation, userType, onComplete }: Step1Props) {
    const [currentStep, setCurrentStep] = useState<'phone' | 'verification' | 'name' | 'gender'>('phone');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [_gender, setGender] = useState<'male' | 'female' | null>(null);

    const handlePhoneNext = (phone: string) => {
        setPhoneNumber(phone);
        setCurrentStep('verification');
    };

    const handleVerificationNext = () => {
        setCurrentStep('name');
    };

    const handleNameNext = (userName: string) => {
        setName(userName);
        setCurrentStep('gender');
    };

    const handleGenderNext = (userGender: 'male' | 'female') => {
        setGender(userGender);
        onComplete({ phoneNumber, name, gender: userGender });
    };

    const handleBack = () => {
        switch (currentStep) {
            case 'verification':
                setCurrentStep('phone');
                break;
            case 'name':
                setCurrentStep('verification');
                break;
            case 'gender':
                setCurrentStep('name');
                break;
        }
    };

    if (currentStep === 'phone') {
        return (
            <PhoneNumberStep
                navigation={navigation}
                onNext={handlePhoneNext}
            />
        );
    }

    if (currentStep === 'verification') {
        return (
            <VerificationStep
                navigation={navigation}
                phoneNumber={phoneNumber}
                userType={userType}
                onNext={handleVerificationNext}
            />
        );
    }

    if (currentStep === 'name') {
        return (
            <NameInputStep
                navigation={navigation}
                onNext={handleNameNext}
                onBack={handleBack}
            />
        );
    }

    if (currentStep === 'gender') {
        return (
            <GenderSelectionStep
                navigation={navigation}
                onNext={handleGenderNext}
                onBack={handleBack}
            />
        );
    }

    return null;
} 