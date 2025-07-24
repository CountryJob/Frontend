import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { UserNavigationProp } from 'src/types/navigation'
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';
import HomeHeader from '../components/HomeHeader';
import { useState } from 'node_modules/@types/react';

export default function HomeScreen() {
  const navigation = useNavigation<UserNavigationProp>();
  // 선택 필터 값
  // const [selectedFilters, setSelectedFilters] = useState({
  //   radius: 'all',
  //   experience: 'all',
  //   sort: 'default'
  // })

  // 검색버튼 클릭
  const handleSearchPress = () => {
    console.log('검색클릭');
  }
  // 알림버튼 클릭
  const handleNotificationPress = () => {
    console.log('알림 클릭');
  }
  // 필터 버튼 클릭
  const handleFilterPress =() => {
    
  }
  return (
    <View style={styles.container}>
      {/* 고정 헤더 */}
      <View style={styles.headerContainer}>
        <HomeHeader
          onSearchPress={handleSearchPress}
          onNotificationPress={handleNotificationPress}
          hasNotification={true} />
        <FilterBar
          onFilterPress={handleFilterPress} />
      </View>
      {/* 스크롤 가능 카드 리스트 */}
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.cardList}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 20, // 상태바 여백
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  cardList: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
    gap: 12,
  },
})
