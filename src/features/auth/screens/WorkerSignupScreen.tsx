import React, { useState } from 'react';
import { RootStackNavigationProp } from '../../../types/navigation';
import Step1 from '../components/signup/shared/Step1';
import BirthdayStep from '../components/signup/shared/BirthdayStep';
import WorkerStep2 from '../components/signup/worker/step2/Step2';

export default function WorkerSignupScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const [currentStep, setCurrentStep] = useState<'step1' | 'birthday' | 'step2'>('step1');
    const [userData, setUserData] = useState<{ phoneNumber: string; name: string; gender: 'male' | 'female' } | null>(null);
    const [birthday, setBirthday] = useState<string>('');

    const handleStep1Complete = (data: { phoneNumber: string; name: string; gender: 'male' | 'female' }) => {
        setUserData(data);
        setCurrentStep('birthday');
    };

    const handleBirthdayComplete = (birthdayData: string) => {
        setBirthday(birthdayData);
        setCurrentStep('step2');
    };

    const handleStep2Complete = () => {
        // Worker 전용 회원가입 완료 후 메인 화면으로 이동
        console.log('Worker signup completed:', { ...userData, birthday });
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

    if (currentStep === 'birthday') {
        return (
            <BirthdayStep
                navigation={navigation}
                onNext={handleBirthdayComplete}
            />
        );
    }

    if (currentStep === 'step2' && userData) {
        return (
            <WorkerStep2
                navigation={navigation}
                onComplete={handleStep2Complete}
                userData={userData}
            />
        );
    }

    return null;
} 