import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuIcon from "../../../assets/icons/menu-icon.svg";
export default function JobPostContent({ job }){
  return(
    <TouchableOpacity style={styles.card}>
      {/* 날짜/시간 + 더보기 */}
      <View style={styles.headerRow}>
        <Text style={styles.dateText}>{job.workPeriod} {job.workTime}</Text>
        <TouchableOpacity>
          <MenuIcon width={24} height={24} color='#B2B4B5' />
        </TouchableOpacity>
      </View>
      {/* 주소 */}
      <Text style={styles.addressText}>{job.location}</Text>
      {/* 밑줄 */}
      <View style={styles.divider} />
      {/* 작업 */}
      <View style={styles.row}>
        <View style={[styles.badge, { backgroundColor: '#7FCB8F' }]}>
            <Text style={styles.badgeText}>작업</Text>
          </View>
          <Text style={styles.infoText}>{job.workType}</Text>
      </View>
      {/* 보수 + 자세히 버튼 */}
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.badge, { backgroundColor: '#FF9A5C' }]}>
            <Text style={styles.badgeText}>보수</Text>
          </View>
          <Text style={styles.infoText}>{job.wage}</Text>
        </View>
        <View style={styles.detailButtonWrapper}>
          <Text style={styles.detailText}>AI 추천</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4A5B67'
  },
  addressText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A5B67'
  },
  divider: {
    height: 2,
    backgroundColor: '#E9EBEE',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  badge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A5B67'
  },
  detailButtonWrapper: {
    alignSelf: 'flex-end',
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A5B67'
  },
});

