import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProp } from '../../types/navigation';

export default function HomeScreen() {
    const navigation = useNavigation<TabNavigationProp>();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* 헤더 */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        농가 구인
                    </Text>
                    <Text style={styles.headerSubtitle}>
                        농장 일손 구하기 플랫폼
                    </Text>
                </View>

                {/* 메인 콘텐츠 */}
                <View style={styles.content}>
                    {/* 환영 메시지 */}
                    <View style={styles.welcomeCard}>
                        <Text style={styles.welcomeTitle}>
                            안녕하세요! 👨‍🌾
                        </Text>
                        <Text style={styles.welcomeText}>
                            농장 일손을 구하시나요? 간단한 공고로 빠르게 구인하세요.
                        </Text>
                    </View>

                    {/* 주요 기능 */}
                    <View style={styles.featuresContainer}>
                        {/* 공고 올리기 */}
                        <TouchableOpacity
                            style={styles.featureCard}
                            onPress={() => navigation.navigate('Post')}
                        >
                            <View style={styles.featureRow}>
                                <View style={styles.featureIcon}>
                                    <Text style={styles.iconText}>📝</Text>
                                </View>
                                <View style={styles.featureContent}>
                                    <Text style={styles.featureTitle}>
                                        공고 올리기
                                    </Text>
                                    <Text style={styles.featureText}>
                                        새로운 구인 공고를 작성하세요
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* 내 공고 관리 */}
                        <TouchableOpacity
                            style={[styles.featureCard, styles.blueCard]}
                            onPress={() => navigation.navigate('User')}
                        >
                            <View style={styles.featureRow}>
                                <View style={[styles.featureIcon, styles.blueIcon]}>
                                    <Text style={styles.iconText}>📋</Text>
                                </View>
                                <View style={styles.featureContent}>
                                    <Text style={styles.featureTitle}>
                                        내 공고 관리
                                    </Text>
                                    <Text style={styles.featureText}>
                                        등록한 공고와 지원자 확인
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* 간단한 통계 */}
                    <View style={styles.statsContainer}>
                        <Text style={styles.statsTitle}>
                            이번 달 현황
                        </Text>
                        <View style={styles.statsCard}>
                            <View style={styles.statsRow}>
                                <View style={styles.statItem}>
                                    <Text style={styles.statLabel}>등록한 공고</Text>
                                    <Text style={styles.statValue}>3</Text>
                                </View>
                                <View style={styles.statItem}>
                                    <Text style={styles.statLabel}>지원자</Text>
                                    <Text style={[styles.statValue, styles.blueValue]}>12</Text>
                                </View>
                                <View style={styles.statItem}>
                                    <Text style={styles.statLabel}>채용 완료</Text>
                                    <Text style={[styles.statValue, styles.orangeValue]}>2</Text>
                                </View>
                            </View>
                        </View>
                    </View>
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
        paddingVertical: 48,
    },
    headerTitle: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    headerSubtitle: {
        color: '#D1FAE5',
        fontSize: 18,
    },
    content: {
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    welcomeCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 24,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    welcomeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 8,
    },
    welcomeText: {
        color: '#6B7280',
        fontSize: 16,
    },
    featuresContainer: {
        gap: 16,
    },
    featureCard: {
        backgroundColor: '#F0FDF4',
        borderWidth: 1,
        borderColor: '#BBF7D0',
        borderRadius: 12,
        padding: 24,
    },
    blueCard: {
        backgroundColor: '#EFF6FF',
        borderColor: '#BFDBFE',
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    featureIcon: {
        backgroundColor: '#059669',
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    blueIcon: {
        backgroundColor: '#3B82F6',
    },
    iconText: {
        color: 'white',
        fontSize: 20,
    },
    featureContent: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    featureText: {
        color: '#6B7280',
    },
    statsContainer: {
        marginTop: 32,
    },
    statsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 16,
    },
    statsCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        color: '#6B7280',
        fontSize: 14,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#059669',
    },
    blueValue: {
        color: '#3B82F6',
    },
    orangeValue: {
        color: '#F97316',
    },
}); 