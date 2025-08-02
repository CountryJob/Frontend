import { StyleSheet, Text, TouchableOpacity } from "react-native";
import RightIcon from '../../../assets/icons/right-icon.svg';

export default function JobApplicant({ applicantCount = 0, onPress }) {
  return (
    <TouchableOpacity style={styles.applicantHeader} onPress={onPress}>
      <Text style={styles.applicantText}>
        새로운 지원자 <Text style={styles.countText}>{applicantCount}명</Text>
      </Text>
      <RightIcon width={24} height={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  applicantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16, // 좌우 여백 추가
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  applicantText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A5B67',
  },
  countText: {
    color: '#FF5C5C',
    fontWeight: 'bold',
  },
})