import React, { useState } from 'react';
import { RootStackNavigationProp } from '../../../types/navigation';
import PhoneNumberStep from '../components/farm/step1/PhoneNumberStep';
import VerificationStep from '../components/farm/step2/VerificationStep';

export default function FarmSignupScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const [currentStep, setCurrentStep] = useState<'phone' | 'verification'>('phone');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNext = (phone: string) => {
        setPhoneNumber(phone);
        setCurrentStep('verification');
    };

    const handleVerificationNext = () => {
        // 다음 단계로 이동 (예: 성별 선택)
        console.log('Verification completed, moving to next step');
    };

    if (currentStep === 'verification') {
        return (
            <VerificationStep
                navigation={navigation}
                phoneNumber={phoneNumber}
                onNext={handleVerificationNext}
            />
        );
    }

    return (
        <PhoneNumberStep
            navigation={navigation}
            onNext={handlePhoneNext}
        />
    );
} 