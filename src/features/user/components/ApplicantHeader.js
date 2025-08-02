import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const STATUS_TYPES = ['전체', '대기중', '합격', '불합격'];
const STATUS_COUNTS = { 전체: 0, 대기중: 0, 합격: 0, 불합격: 0 };

export default function ApplicationHeader({ onSelectStatus }) {
  const [selected, setSelected] = useState('전체');

  const handlePress = (status) => {
    setSelected(status);
    onSelectStatus?.(status); // props 함수 호출
  };

  return (
    <View style={styles.container}>
      {STATUS_TYPES.map((status) => (
        <TouchableOpacity
          key={status}
          onPress={() => handlePress(status)}
          style={[styles.tab, selected === status]}
        >
          <Text style={[styles.label, selected === status && styles.labelSelected]}>
            {status}
          </Text>
          <Text style={[styles.count, selected === status && styles.labelSelected]}>
            {STATUS_COUNTS[status]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FAFAFA',
    paddingVertical: 12,
    borderColor: '#eee',
    borderRadius: 10,
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    color: '#4A5B67',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
  },
  labelSelected: {
    color: '#FF914D',
  },
});
