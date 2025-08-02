import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlusIcon from '../../../assets/icons/plus-icon.svg';

export default function CreateJobSection({ onPress }) {
  return (
    <View style={styles.section}>
      {/* 헤더 (컨테이너 밖) */}
      <View style={styles.header}>
        <Text style={styles.title}>공고 작성</Text>
        <Text style={styles.subtitle}>우리 농장과 함께할 사람을 구해보세요.</Text>
      </View>

      {/* 흰 컨테이너 (터치 영역) */}
      <TouchableOpacity 
        style={styles.createContainer}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          <PlusIcon width={28} height={28} color='#4A5B67' />
        </View>
        <Text style={styles.buttonText}>새로운 공고 올리기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 16,
  },
  header: {
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    lineHeight: 20,
  },
  createContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A5B67',
  },
});