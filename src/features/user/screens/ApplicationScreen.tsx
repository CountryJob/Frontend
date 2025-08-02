import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UserNavigationProp } from 'src/types/navigation'
import ApplicationHeader from '../components/ApplicantHeader';

export default function ApplicationScreen() {
  const handleStatusChange = () => {
    // 필터링 처리
  };
  const navigation = useNavigation<UserNavigationProp>();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>지원이력</Text>
        <ApplicationHeader onSelectStatus={handleStatusChange}/>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
})