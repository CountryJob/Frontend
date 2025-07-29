import React, { useState } from 'react';
import { RootStackNavigationProp } from '../../../types/navigation';
import SignupLayout from '../components/common/SignupLayout';
import Title from '../components/common/Title';
import SubTitle from '../components/common/SubTitle';
import InputBox from '../components/common/InputBox';
import Button from '../components/common/Button';

export default function WorkerSignupScreen({ navigation }: { navigation: RootStackNavigationProp }) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleBack = () => {
        navigation.goBack();
    };

    const handleNext = () => {
        if (phoneNumber.trim()) {
            // 다음 단계로 이동
            console.log('Worker phone number:', phoneNumber);
        }
    };

    return (
        <SignupLayout onBack={handleBack}>
            <Title>전화번호를 입력해주세요</Title>
            <SubTitle>계정 확인이 필요해요</SubTitle>

            <InputBox
                placeholder="010-0000-0000"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                maxLength={13}
            />

            <Button
                onPress={handleNext}
                isActive={phoneNumber.trim().length > 0}
            >
                다음
            </Button>
        </SignupLayout>
    );
} 