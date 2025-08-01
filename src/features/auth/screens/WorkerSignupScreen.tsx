import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackNavigationProp, RootStackParamList } from '../../../types/navigation';
import Step1 from '../components/signup/shared/Step1';
import WorkTypeSelectStep from '../components/signup/worker/WorkTypeSelectStep';
import WorkDaySelectStep from '../components/signup/worker/WorkDaySelectStep';
import ExperienceSelectStep from '../components/signup/worker/ExperienceSelectStep';
import MatchingJobSelectStep from '../components/signup/worker/MatchingJobSelectStep';
import WorkerLocationStep from '../components/signup/worker/WorkerLocationStep';
import FinalSuccessStep from '../components/signup/shared/FinalSuccessStep';

type WorkerSignupScreenRouteProp = RouteProp<RootStackParamList, 'WorkerSignup'>;

interface WorkerSignupScreenProps {
    navigation: RootStackNavigationProp;
    route: WorkerSignupScreenRouteProp;
}

export default function WorkerSignupScreen({ navigation, route }: WorkerSignupScreenProps) {
    const userType = route.params?.userType || 'WORKER';
    const [currentStep, setCurrentStep] = useState<'step1' | 'workType' | 'workDay' | 'experience' | 'matchingJob' | 'workerLocation' | 'finalSuccess'>('step1');
    const [userData, setUserData] = useState<{
        phoneNumber: string;
        name: string;
        gender: 'male' | 'female';
        workType?: 'short' | 'long' | 'any';
        workDays?: string[];
        experience?: boolean;
        matchingJobs?: string[];
        location?: { address: string; latitude: number; longitude: number };
    } | null>(null);

    const handleStep1Complete = (data: { phoneNumber: string; name: string; gender: 'male' | 'female' }) => {
        setUserData(data);
        setCurrentStep('workType');
    };

    const handleWorkTypeComplete = (workType: 'short' | 'long' | 'any') => {
        setUserData(prev => prev ? { ...prev, workType } : null);
        setCurrentStep('workDay');
    };

    const handleSkipAll = () => {
        // 모든 worker 단계를 건너뛰고 바로 완료 화면으로
        setCurrentStep('finalSuccess');
    };

    const handleWorkDayComplete = (workDays: string[]) => {
        setUserData(prev => prev ? { ...prev, workDays } : null);
        setCurrentStep('experience');
    };

    const handleExperienceComplete = (experience: boolean) => {
        setUserData(prev => prev ? { ...prev, experience } : null);
        setCurrentStep('matchingJob');
    };

    const handleMatchingJobComplete = (matchingJobs: string[]) => {
        setUserData(prev => prev ? { ...prev, matchingJobs } : null);
        setCurrentStep('workerLocation');
    };

    const handleWorkerLocationComplete = (location: { address: string; latitude: number; longitude: number }) => {
        setUserData(prev => prev ? { ...prev, location } : null);
        setCurrentStep('finalSuccess');
    };

    const handleFinalSuccess = () => {
        console.log('Worker signup completed:', userData);
        navigation.navigate('Main');
    };

    const handleBackToStep1 = () => {
        setCurrentStep('step1');
    };

    const handleBackToWorkType = () => {
        setCurrentStep('workType');
    };

    const handleBackToWorkDay = () => {
        setCurrentStep('workDay');
    };

    const handleBackToExperience = () => {
        setCurrentStep('experience');
    };

    const handleBackToMatchingJob = () => {
        setCurrentStep('matchingJob');
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

    if (currentStep === 'workType' && userData) {
        return (
            <WorkTypeSelectStep
                navigation={navigation}
                onNext={handleWorkTypeComplete}
                onBack={handleBackToStep1}
                onSkip={handleSkipAll}
            />
        );
    }

    if (currentStep === 'workDay' && userData) {
        return (
            <WorkDaySelectStep
                navigation={navigation}
                onNext={handleWorkDayComplete}
                onBack={handleBackToWorkType}
                onSkip={handleSkipAll}
            />
        );
    }

    if (currentStep === 'experience' && userData) {
        return (
            <ExperienceSelectStep
                navigation={navigation}
                onNext={handleExperienceComplete}
                onBack={handleBackToWorkDay}
                onSkip={handleSkipAll}
            />
        );
    }

    if (currentStep === 'matchingJob' && userData) {
        return (
            <MatchingJobSelectStep
                navigation={navigation}
                onNext={handleMatchingJobComplete}
                onBack={handleBackToExperience}
                onSkip={handleSkipAll}
            />
        );
    }

    if (currentStep === 'workerLocation' && userData) {
        return (
            <WorkerLocationStep
                navigation={navigation}
                onNext={handleWorkerLocationComplete}
                onBack={handleBackToMatchingJob}
            />
        );
    }

    if (currentStep === 'finalSuccess' && userData) {
        return (
            <FinalSuccessStep
                navigation={navigation}
                onComplete={handleFinalSuccess}
                userType="worker"
            />
        );
    }

    return null;
} 