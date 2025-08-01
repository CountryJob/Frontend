import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackNavigationProp, RootStackParamList } from '../../../types/navigation';
import Step1 from '../components/signup/shared/Step1';
import FarmNameInputStep from '../components/signup/farm/FarmNameInputStep';
import BusinessLicenseStep from '../components/signup/farm/BusinessLicenseStep';
import FarmLocationStep from '../components/signup/farm/FarmLocationStep';
import FinalSuccessStep from '../components/signup/shared/FinalSuccessStep';

type FarmSignupScreenRouteProp = RouteProp<RootStackParamList, 'FarmSignup'>;

interface FarmSignupScreenProps {
    navigation: RootStackNavigationProp;
    route: FarmSignupScreenRouteProp;
}

export default function FarmSignupScreen({ navigation, route }: FarmSignupScreenProps) {
    const userType = route.params?.userType || 'FARMER';
    const [currentStep, setCurrentStep] = useState<'step1' | 'farmName' | 'businessLicense' | 'farmLocation' | 'finalSuccess'>('step1');
    const [userData, setUserData] = useState<{
        phoneNumber: string;
        name: string;
        gender: 'male' | 'female';
        farmName?: string;
        businessNumber?: string;
        location?: { address: string; latitude: number; longitude: number };
    } | null>(null);

    const handleStep1Complete = (data: { phoneNumber: string; name: string; gender: 'male' | 'female' }) => {
        setUserData(data);
        setCurrentStep('farmName');
    };

    const handleFarmNameComplete = (farmName: string) => {
        setUserData(prev => prev ? { ...prev, farmName } : null);
        setCurrentStep('businessLicense');
    };

    const handleBusinessLicenseComplete = (businessNumber: string) => {
        setUserData(prev => prev ? { ...prev, businessNumber } : null);
        setCurrentStep('farmLocation');
    };

    const handleFarmLocationComplete = (location: { address: string; latitude: number; longitude: number }) => {
        setUserData(prev => prev ? { ...prev, location } : null);
        setCurrentStep('finalSuccess');
    };

    const handleFinalSuccess = () => {
        console.log('Farm signup completed:', userData);
        navigation.navigate('Main');
    };

    const handleBackToFarmName = () => {
        setCurrentStep('farmName');
    };

    const handleBackToBusinessLicense = () => {
        setCurrentStep('businessLicense');
    };

    if (currentStep === 'step1') {
        return (
            <Step1
                navigation={navigation}
                userType={userType}
                onComplete={handleStep1Complete}
            />
        );
    }

    if (currentStep === 'farmName' && userData) {
        return (
            <FarmNameInputStep
                navigation={navigation}
                onNext={handleFarmNameComplete}
                onBack={() => setCurrentStep('step1')}
            />
        );
    }

    if (currentStep === 'businessLicense' && userData) {
        return (
            <BusinessLicenseStep
                navigation={navigation}
                onNext={handleBusinessLicenseComplete}
                onBack={handleBackToFarmName}
            />
        );
    }

    if (currentStep === 'farmLocation' && userData) {
        return (
            <FarmLocationStep
                navigation={navigation}
                onNext={handleFarmLocationComplete}
                onBack={handleBackToBusinessLicense}
            />
        );
    }

    if (currentStep === 'finalSuccess' && userData) {
        return (
            <FinalSuccessStep
                navigation={navigation}
                onComplete={handleFinalSuccess}
                userType="farm"
            />
        );
    }

    return null;
} 