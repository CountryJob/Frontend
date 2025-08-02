import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchButton from './SearchButton'
import NotificationButton from './NotificationButton'

export default function HomeHeader({onSearchPress, onNotificationPress, hasNotification}) {
  return (
    <View style={styles.container}>
      {/* 제목 + 검색/알림 */}
      <View style={styles.firstRow}>
        <Text style={styles.title}>팜포유 농가 리스트</Text>
        <View style={styles.buttonSection}>
          <NotificationButton onPress={onNotificationPress}
                              hasNotification={hasNotification} />
        </View>
      </View>
      {/* 서브타이틀 */}
      <Text style={styles.subtitle}>내 정보와 잘 맞는 공고를 AI 추천해드려요</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF9A5C',
    flex: 1, // 남은 공간 차지
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF9A5C',
    lineHeight: 20,
  },
});