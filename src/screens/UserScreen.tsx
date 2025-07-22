import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserScreen() {
    const userData = {
        name: '김철수',
        email: 'kim@ex.com',
        avatar: '👨‍🌾',
        joinDate: '2024년 1월',
        farmName: '행복농장',
        location: '경기도 수원시',
    };

    const stats = {
        totalCrops: 12,
        activeCrops: 8,
        completedHarvests: 5,
        totalArea: '2.5ha',
    };

    const menuItems = [
        { icon: '👤', title: '프로필 수정', subtitle: '개인정보 변경' },
        { icon: '🏠', title: '농장 정보', subtitle: '농장 상세 정보' },
        { icon: '📊', title: '농작물 통계', subtitle: '생산성 분석' },
        { icon: '⚙️', title: '앱 설정', subtitle: '알림, 언어 등' },
        { icon: '📚', title: '도움말', subtitle: '사용법 가이드' },
        { icon: '📞', title: '고객지원', subtitle: '문의 및 신고' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* 헤더 */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        마이페이지
                    </Text>
                    <Text style={styles.headerSubtitle}>
                        농장 관리 정보와 설정
                    </Text>
                </View>

                {/* 사용자 정보 카드 */}
                <View style={styles.content}>
                    <View style={styles.userCard}>
                        <View style={styles.userInfo}>
                            <Text style={styles.avatar}>{userData.avatar}</Text>
                            <View style={styles.userDetails}>
                                <Text style={styles.userName}>
                                    {userData.name}
                                </Text>
                                <Text style={styles.userEmail}>{userData.email}</Text>
                                <Text style={styles.joinDate}>
                                    가입일: {userData.joinDate}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.farmInfo}>
                            <Text style={styles.farmName}>
                                {userData.farmName}
                            </Text>
                            <Text style={styles.farmLocation}>{userData.location}</Text>
                        </View>
                    </View>

                    {/* 농장 통계 */}
                    <View style={styles.statsCard}>
                        <Text style={styles.statsTitle}>
                            농장 현황
                        </Text>
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <Text style={styles.statValue}>{stats.totalCrops}</Text>
                                <Text style={styles.statLabel}>전체 작물</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={[styles.statValue, styles.blueValue]}>{stats.activeCrops}</Text>
                                <Text style={styles.statLabel}>재배 중</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={[styles.statValue, styles.orangeValue]}>{stats.completedHarvests}</Text>
                                <Text style={styles.statLabel}>수확 완료</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={[styles.statValue, styles.purpleValue]}>{stats.totalArea}</Text>
                                <Text style={styles.statLabel}>총 면적</Text>
                            </View>
                        </View>
                    </View>

                    {/* 메뉴 목록 */}
                    <View style={styles.menuCard}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.menuItem,
                                    index !== menuItems.length - 1 && styles.menuItemBorder
                                ]}
                            >
                                <Text style={styles.menuIcon}>{item.icon}</Text>
                                <View style={styles.menuContent}>
                                    <Text style={styles.menuTitle}>{item.title}</Text>
                                    <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                                </View>
                                <Text style={styles.menuArrow}>›</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* 로그아웃 버튼 */}
                    <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutText}>로그아웃</Text>
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
    userCard: {
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
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        fontSize: 40,
        marginRight: 16,
    },
    userDetails: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    userEmail: {
        color: '#6B7280',
    },
    joinDate: {
        fontSize: 14,
        color: '#9CA3AF',
        marginTop: 4,
    },
    farmInfo: {
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        paddingTop: 16,
    },
    farmName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    farmLocation: {
        color: '#6B7280',
    },
    statsCard: {
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
    statsTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'center',
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
    purpleValue: {
        color: '#8B5CF6',
    },
    statLabel: {
        color: '#6B7280',
        fontSize: 14,
    },
    menuCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    menuItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    menuIcon: {
        fontSize: 24,
        marginRight: 16,
    },
    menuContent: {
        flex: 1,
    },
    menuTitle: {
        color: '#1F2937',
        fontWeight: '500',
    },
    menuSubtitle: {
        color: '#9CA3AF',
        fontSize: 14,
    },
    menuArrow: {
        color: '#D1D5DB',
    },
    logoutButton: {
        marginTop: 24,
        backgroundColor: '#FEF2F2',
        borderWidth: 1,
        borderColor: '#FECACA',
        borderRadius: 12,
        padding: 16,
    },
    logoutText: {
        color: '#DC2626',
        textAlign: 'center',
        fontWeight: '500',
    },
}); 