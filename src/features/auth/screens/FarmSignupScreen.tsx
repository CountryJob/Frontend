import React, { useState } from 'react';
import { RootStackNavigationProp } from '../../../types/navigation';
import Step1 from '../components/signup/shared/Step1';
import FarmStep2 from '../components/signup/farm/step2/Step2';

export default function FarmSignupScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const [currentStep, setCurrentStep] = useState<'step1' | 'step2'>('step1');
    const [userData, setUserData] = useState<{ phoneNumber: string; name: string; gender: 'male' | 'female' } | null>(null);

    const handleStep1Complete = (data: { phoneNumber: string; name: string; gender: 'male' | 'female' }) => {
        setUserData(data);
        setCurrentStep('step2');
    };

    const handleStep2Complete = () => {
        // Farm 전용 회원가입 완료 후 메인 화면으로 이동
        console.log('Farm signup completed:', userData);
        navigation.navigate('Main');
    };

    if (currentStep === 'step1') {
        return (
            <Step1
                navigation={navigation}
                onComplete={handleStep1Complete}
            />
        );
    }

    if (currentStep === 'step2' && userData) {
        return (
            <FarmStep2
                navigation={navigation}
                onComplete={handleStep2Complete}
                userData={userData}
            />
        );
    }

    return null;
} 