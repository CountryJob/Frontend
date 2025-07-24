import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function JobCard(){
  return(
    <TouchableOpacity style={styles.card}>
      {/* 날짜/시간 + 하트 */}
      <View style={styles.headerRow}>
        <Text style={styles.dateText}>7/4(금)-7/6(일) 06:00-15:00</Text>
        <TouchableOpacity>
          {/* 하트 아이콘 나중에 추가 */}
        </TouchableOpacity>
      </View>
      {/* 주소 */}
      <Text style={styles.addressText}>전북특별자치도 임실군 오수면 군평길 28 (군평리)</Text>
      {/* 밑줄 */}
      <View style={styles.divider} />
      {/* 작업 */}
      <View style={styles.row}>
        <View style={[styles.badge, { backgroundColor: '#7FCB8F' }]}>
            <Text style={styles.badgeText}>작업</Text>
          </View>
          <Text style={styles.infoText}>상추 수확 및 상차</Text>
      </View>
      {/* 보수 + 자세히 버튼 */}
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.badge, { backgroundColor: '#FF9A5C' }]}>
            <Text style={styles.badgeText}>보수</Text>
          </View>
          <Text style={styles.infoText}>남 110,000 / 여 110,000</Text>
        </View>
        <View style={styles.detailButtonWrapper}>
          <Text style={styles.detailText}>자세히</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 16,
    // marginVertical: 10,
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

