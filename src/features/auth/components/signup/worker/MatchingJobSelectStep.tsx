import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title from '../../ui/Title';
import SubTitle from '../../ui/SubTitle';
import Button from '../../ui/Button';

interface MatchingJobSelectStepProps {
    navigation: RootStackNavigationProp;
    onNext: (matchingJobs: string[]) => void;
    onBack: () => void;
    onSkip?: () => void;
}

export default function MatchingJobSelectStep({ onNext, onBack, onSkip }: MatchingJobSelectStepProps) {
    const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

    const jobCategories = [
        {
            name: '과일',
            jobs: [
                { key: 'fruit_cultivation', label: '재배' },
                { key: 'fruit_management', label: '관리' },
                { key: 'fruit_harvesting', label: '수확' },
                { key: 'fruit_packaging', label: '포장' },
            ]
        },
        {
            name: '채소',
            jobs: [
                { key: 'vegetable_cultivation', label: '재배' },
                { key: 'vegetable_management', label: '관리' },
                { key: 'vegetable_harvesting', label: '수확' },
                { key: 'vegetable_packaging', label: '포장' },
            ]
        },
        {
            name: '곡류',
            jobs: [
                { key: 'grain_cultivation', label: '재배' },
                { key: 'grain_management', label: '관리' },
                { key: 'grain_harvesting', label: '수확' },
                { key: 'grain_packaging', label: '포장' },
            ]
        },
        {
            name: '특용작물 (버섯·약초)',
            jobs: [
                { key: 'special_cultivation', label: '재배' },
                { key: 'special_management', label: '관리' },
                { key: 'special_harvesting', label: '수확' },
                { key: 'special_packaging', label: '포장' },
            ]
        },
        {
            name: '화훼',
            jobs: [
                { key: 'flower_cultivation', label: '재배' },
                { key: 'flower_management', label: '관리' },
                { key: 'flower_harvesting', label: '수확' },
                { key: 'flower_packaging', label: '포장' },
            ]
        },
        {
            name: '수목',
            jobs: [
                { key: 'tree_planting', label: '식재' },
                { key: 'tree_management', label: '관리' },
                { key: 'tree_digging', label: '굴취' },
                { key: 'tree_packaging', label: '포장' },
            ]
        },
        {
            name: '기타관리',
            jobs: [
                { key: 'other_mowing', label: '예초' },
                { key: 'other_pesticide', label: '농약' },
            ]
        },
    ];

    const handleJobToggle = (jobKey: string) => {
        setSelectedJobs(prev =>
            prev.includes(jobKey)
                ? prev.filter(job => job !== jobKey)
                : [...prev, jobKey]
        );
    };

    const handleNext = () => {
        if (selectedJobs.length > 0) {
            onNext(selectedJobs);
        }
    };

    const handleSkip = () => {
        if (onSkip) {
            onSkip(); // 모든 worker 단계 건너뛰기
        } else {
            onNext([]); // 기본값으로 빈 배열 전달
        }
    };

    return (
        <SignupLayout onBack={onBack} onSkip={handleSkip} showSkip={true}>
            <SubTitle>AI 추천 매칭을 위해 작성해주세요</SubTitle>
            <Title>
                경험한 작업을 모두 선택해주세요
            </Title>
            <Text style={styles.subtitleText}>
                선택하신 경험을 바탕으로 일자리를 추천해드릴게요
            </Text>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {jobCategories.map((category) => (
                    <View key={category.name} style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>{category.name}</Text>
                        <View style={styles.jobContainer}>
                            {category.jobs.map((job) => (
                                <TouchableOpacity
                                    key={job.key}
                                    style={[
                                        styles.jobButton,
                                        selectedJobs.includes(job.key) && styles.selectedJobButton
                                    ]}
                                    onPress={() => handleJobToggle(job.key)}
                                >
                                    <Text style={[
                                        styles.jobText,
                                        selectedJobs.includes(job.key) && styles.selectedJobText
                                    ]}>
                                        {job.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>

            {selectedJobs.length > 0 && (
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
    subtitleText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 30,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 30,
    },
    categoryContainer: {
        marginBottom: 30,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#333',
        marginBottom: 20,
    },
    jobContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    jobButton: {
        backgroundColor: '#ffffff',
        borderColor: '#DAF1DB',
        borderWidth: 2,
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 8,
        minWidth: 70,
        alignItems: 'center',
    },
    selectedJobButton: {
        backgroundColor: '#7FCB8F',
    },
    jobText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666',
    },
    selectedJobText: {
        color: '#ffffff',
        fontWeight: '600',
    },
});
