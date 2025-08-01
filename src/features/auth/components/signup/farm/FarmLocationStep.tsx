import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { RootStackNavigationProp } from '../../../../../types/navigation';
import SignupLayout from '../../layout/AuthLayout';
import Title, { HighlightText } from '../../ui/Title';
import SubTitle from '../../ui/SubTitle';
import Button from '../../ui/Button';
import SearchIcon from '../../../../../assets/Search-icon.svg';
import LocationPinIcon from '../../../../../assets/LocationPin-icon.svg';

interface FarmLocationStepProps {
    navigation: RootStackNavigationProp;
    onNext: (location: { address: string; latitude: number; longitude: number }) => void;
    onBack: () => void;
}

export default function FarmLocationStep({ onNext, onBack }: FarmLocationStepProps) {
    const [address, setAddress] = useState('');
    const [isLocationSelected, setIsLocationSelected] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    const handleAddressChange = (text: string) => {
        setAddress(text);
        setIsLocationSelected(false);
    };

    const handleLocationConfirm = () => {
        // 실제로는 주소 검색 API를 호출하여 좌표를 가져와야 함
        const location = {
            address: address,
            latitude: 37.2342, // 예시 좌표
            longitude: 127.2013
        };
        onNext(location);
    };

    const handleSearch = async () => {
        if (!address.trim()) return;

        setIsSearching(true);
        try {
            // 카카오 주소 검색 API 호출
            const searchResult = await searchAddress(address);
            if (searchResult) {
                setAddress(searchResult.address);
                setIsLocationSelected(true);
            }
        } catch (error) {
            console.error('주소 검색 실패:', error);
        } finally {
            setIsSearching(false);
        }
    };

    const searchAddress = async (query: string) => {
        // 실제 구현에서는 카카오 API 키를 환경변수로 관리
        const KAKAO_API_KEY = 'YOUR_KAKAO_API_KEY';
        const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `KakaoAK ${KAKAO_API_KEY}`
                }
            });

            const data = await response.json();

            if (data.documents && data.documents.length > 0) {
                const firstResult = data.documents[0];
                return {
                    address: firstResult.address_name,
                    latitude: parseFloat(firstResult.y),
                    longitude: parseFloat(firstResult.x)
                };
            }
        } catch (error) {
            console.error('API 호출 실패:', error);
        }

        return null;
    };

    return (
        <SignupLayout onBack={onBack}>
            <View style={styles.container}>
                <Title>
                    <HighlightText>농장 위치</HighlightText>를 알려주세요
                </Title>
                <SubTitle>가까운 구직자를 추천해드릴게요. {'\n'}이 위치가 맞으신가요?</SubTitle>

                <View style={styles.inputSection}>
                    <View style={styles.addressInputContainer}>
                        <View style={styles.searchIconContainer}>
                            <SearchIcon width={20} height={20} />
                        </View>
                        <TextInput
                            style={styles.addressInput}
                            placeholder="주소를 입력해주세요"
                            placeholderTextColor="#ffffff80"
                            value={address}
                            onChangeText={handleAddressChange}
                            onSubmitEditing={handleSearch}
                            returnKeyType="search"
                        />
                        <View style={styles.locationIconContainer}>
                            <LocationPinIcon width={20} height={20} />
                        </View>
                    </View>
                    {isSearching && (
                        <Text style={styles.searchingText}>검색 중...</Text>
                    )}
                </View>

                <View style={styles.mapContainer}>
                    {/* 실제로는 지도 컴포넌트를 여기에 렌더링 */}
                    <View style={styles.mapPlaceholder}>
                        <Text style={styles.mapText}>지도가 여기에 표시됩니다</Text>
                        <Text style={styles.mapSubtext}>실제 구현 시 지도 라이브러리 사용</Text>
                    </View>
                </View>

                <View style={styles.buttonSection}>
                    <Button
                        onPress={handleLocationConfirm}
                        isActive={isLocationSelected}
                    >
                        확인
                    </Button>
                </View>
            </View>
        </SignupLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    inputSection: {
        marginTop: 10,
    },
    addressInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7FCB8F',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
    },
    addressInput: {
        flex: 1,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#ffffff',
        includeFontPadding: false,
        textAlignVertical: 'center',
        letterSpacing: 0.5,
    },
    searchIconContainer: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationIconContainer: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchingText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginTop: 8,
    },
    mapContainer: {
        flex: 1,
        marginVertical: 20,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
    },
    mapPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f5e8',
    },
    mapText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 8,
    },
    mapSubtext: {
        fontSize: 12,
        color: '#666',
    },
    buttonSection: {
        marginTop: 20,
    },
});
