import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProp } from '../../../types/navigation';
import NotificationButton from '../components/NotificationButton';
import CreateJobSection from '../components/CreateJobSection';
import OngoingJobsSection from '../components/OngoingJobSection';

export default function HomeScreen() {
  const navigation = useNavigation<TabNavigationProp>();

  const handleCreateJob = () => {
    navigation.navigate('Post');
  }
  return (
    <SafeAreaView style={styles.safe}>
      {/* 헤더 */}
      <View style={styles.header}>
        <NotificationButton 
          onPress={() => console.log('알림페이지 이동')}
          hasNotification={true}/>
      </View>
      <ScrollView style={styles.scrollContainer}>
      {/* 진행중 공고 */}
      <OngoingJobsSection />
      {/* 공고 작성 */}
      <CreateJobSection onPress={handleCreateJob} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
      flex: 1,
      backgroundColor: '#FBFBFB',
    },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 14,
  }
}); 