import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FilterBar({onFilterPress}) {
  return(
    <View style={styles.container}>
      {/* filter buttons */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onFilterPress('radius')}>
        <Text style={styles.filterLabel}>반경</Text>
        <Text style={styles.filterValue}>전체</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onFilterPress('experience')}>
        <Text style={styles.filterLabel}>경력</Text>
        <Text style={styles.filterValue}>전체</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onFilterPress('sort')}>
        <Text style={styles.filterLabel}>보기</Text>
        <Text style={styles.filterValue}>기본</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    gap: 12,
  },
  filterButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#A5AEBA',
  },
  filterLabel: {
    fontSize: 14,
    color: '#A5AEBA',
    fontWeight: '600',
  },
  filterValue: {
    fontSize: 14,
    color: '#6D7984',
    fontWeight: '600',
  },
});