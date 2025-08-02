import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { UserNavigationProp } from 'src/types/navigation';
import MailIcon from '../../../assets/icons/mail-icon.svg';
import RightIcon from '../../../assets/icons/right-icon.svg';

export default function MypageScreen() {
  const navigation = useNavigation<UserNavigationProp>();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Content + Scroll */}
      <View style={styles.flexContainer}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>마이페이지</Text>
          </View>

          {/* User Info Section */}
          <View style={styles.userSection}>
            <View style={styles.rowBetween}>
              <Text style={styles.userName}>전혜자 농장 님</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.label}>휴대폰 번호</Text>
              <Text style={styles.info}>010-1234-1234</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.label}>사업자등록번호</Text>
              <Text style={styles.info}>135-82-01164</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.label}>주소</Text>
              <Text style={styles.info}>전북특별자치도 임실군 오수면 군평길 28 (군평리)</Text>
            </View>

            <TouchableOpacity style={styles.menuItem}>
              <MailIcon width={24} height={24} color="#A5AEBA" />
              <Text style={styles.menuText}>지난 공고 내역</Text>
              <RightIcon width={24} height={24} color="#A5AEBA" />
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer: Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userSection: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  infoBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    color: '#989898',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A2A2A',
    marginLeft: 12,
  },
  logoutButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
