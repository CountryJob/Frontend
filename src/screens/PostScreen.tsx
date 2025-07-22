import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CropManagementScreen() {
    const crops = [
        {
            id: 1,
            name: '토마토',
            status: '성장 중',
            health: 95,
            daysLeft: 15,
            icon: '🍅'
        },
        {
            id: 2,
            name: '상추',
            status: '수확 준비',
            health: 88,
            daysLeft: 3,
            icon: '🥬'
        },
        {
            id: 3,
            name: '고추',
            status: '새싹',
            health: 92,
            daysLeft: 45,
            icon: '🌶️'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* 헤더 */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        작물 관리
                    </Text>
                    <Text style={styles.headerSubtitle}>
                        현재 {crops.length}개 작물 재배 중
                    </Text>
                </View>

                {/* 작물 목록 */}
                <View style={styles.content}>
                    {crops.map((crop) => (
                        <TouchableOpacity
                            key={crop.id}
                            style={styles.cropCard}
                        >
                            <View style={styles.cropRow}>
                                <View style={styles.cropIcon}>
                                    <Text style={styles.iconText}>{crop.icon}</Text>
                                </View>
                                <View style={styles.cropInfo}>
                                    <Text style={styles.cropName}>
                                        {crop.name}
                                    </Text>
                                    <Text style={styles.cropStatus}>
                                        {crop.status} • {crop.daysLeft}일 남음
                                    </Text>
                                    <View style={styles.healthContainer}>
                                        <View style={styles.healthBar}>
                                            <View
                                                style={[
                                                    styles.healthProgress,
                                                    { width: `${crop.health}%` }
                                                ]}
                                            />
                                        </View>
                                        <Text style={styles.healthText}>
                                            {crop.health}%
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {/* 새 작물 추가 버튼 */}
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>
                            + 새 작물 추가
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        backgroundColor: '#059669',
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    headerSubtitle: {
        color: '#D1FAE5',
    },
    content: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    cropCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 24,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    cropRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cropIcon: {
        backgroundColor: '#D1FAE5',
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    iconText: {
        fontSize: 24,
    },
    cropInfo: {
        flex: 1,
    },
    cropName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    cropStatus: {
        color: '#6B7280',
        fontSize: 14,
        marginBottom: 8,
    },
    healthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    healthBar: {
        flex: 1,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        height: 8,
        marginRight: 12,
    },
    healthProgress: {
        backgroundColor: '#059669',
        height: 8,
        borderRadius: 4,
    },
    healthText: {
        fontSize: 14,
        color: '#6B7280',
    },
    addButton: {
        backgroundColor: '#059669',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
}); 