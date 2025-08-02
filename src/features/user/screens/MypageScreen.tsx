import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { UserNavigationProp } from 'src/types/navigation';
import HeartIcon from '../../../assets/icons/heart-icon.svg';
import PaperIcon from '../../../assets/icons/paper-icon.svg';
import MailIcon from '../../../assets/icons/mail-icon.svg';
import RightIcon from '../../../assets/icons/right-icon.svg';
import SendIcon from '../../../assets/icons/send-icon.svg';
import ChatIcon from '../../../assets/icons/message-icon.svg';
export default function MypageScreen() {
  const navigation = useNavigation<UserNavigationProp>();
  
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>마이페이지</Text>
        </View>

        {/* User Info Section */}
        <View style={styles.userSection}>
          <Text style={styles.userName}>이구름 님</Text>
          
          <View style={styles.incomeSection}>
            <Text style={styles.incomeLabel}>이달의 수입</Text>
            <Text style={styles.incomeAmount}>250,000원</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.actionButton}>
              <HeartIcon width={24} height={24} color="#A5AEBA" />
              <Text style={styles.actionButtonText}>관심공고</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <PaperIcon width={24} height={24} color='#A5AEBA' />
              <Text style={styles.actionButtonText}>작업이력</Text>
            </TouchableOpacity>
          </View>

          {/* Notice Box */}
          <View style={styles.noticeBox}>
            <Text style={styles.noticeText}>폭염 시 안전에 유의하세요</Text>
            <Text style={styles.noticeSubText}>규칙적으로 시원한 물 마시기</Text>
          </View>
        </View>

        {/* Menu List */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <MailIcon width={24} height={24} color='#A5AEBA' />
            <Text style={styles.menuText}>내 정보 관리</Text>
            <RightIcon width={24} height={24} color='#A5AEBA' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <SendIcon width={24} height={24} color='#A5AEBA' />
            <Text style={styles.menuText}>공지사항</Text>
            <RightIcon width={24} height={24} color='#A5AEBA' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <ChatIcon width={24} height={24} color='#A5AEBA' />
            <Text style={styles.menuText}>작업미션</Text>
            <RightIcon width={24} height={24} color='#A5AEBA' />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 16,
  },
  backIcon: {
    fontSize: 24,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  incomeSection: {
    marginBottom: 24,
    backgroundColor: '#FAFAFA',
    padding: 16,
    borderRadius: 10,
  },
  incomeLabel: {
    fontSize: 16,
    color: '#999',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  incomeAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#4A5B67',
    fontWeight: 'bold',
  },
  noticeBox: {
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
  },
  noticeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  noticeSubText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'semibold',
  },
  menuSection: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    fontSize: 18,
    color: '#666',
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#2A2A2A',
  },
  menuArrow: {
    fontSize: 18,
    color: '#ccc',
  },
  logoutButton: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 32,
    backgroundColor: '#A9AAAB',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});