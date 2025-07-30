import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

export default function JobPostForm({onChat}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onChat}>
          <Text>{'<'}뒤로가기</Text>
        </TouchableOpacity>
        <View style={styles.headerTextWrap}>
          <Text style={styles.title}>공고 올리기</Text>
          <Text style={styles.subtext}>ⓘ 자동 모집 마감 (작업 마감일)</Text>
        </View>
      </View>

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LabelInput label="제목" placeholder="제목 입력" defaultValue="상추 수확" />
        <LabelInput label="작업 면적" defaultValue="50" unit="m2" />
        <LabelInput label="작업기간 및 시간" defaultValue="2025.08.01 - 2025.08.03   08:00 - 17:00" />
        <LabelInput label="농장 주소" defaultValue="전북특별자치도 진안군 부귀면 가치길 17-41" />
        <LabelInput label="작업 내용" multiline defaultValue={`상추 밭에서 수확 작업\n상태 확인 후 포장 및 이동 보조`} />

        <Text style={styles.sectionTitle}>필요 인력</Text>
        <RowInput leftLabel="남자" leftValue="1" rightLabel="여자" rightValue="2" unit="명" />

        <Text style={styles.sectionTitle}>임금조건(일급)</Text>
        <RowInput leftLabel="남자" leftValue="120,000" rightLabel="여자" rightValue="110,000" unit="원" />

        <Text style={styles.sectionTitle}>제공내역</Text>
        <TagRow tags={['중식', '간식', '교통비']} selected={['중식', '간식']} />

        <Text style={styles.sectionTitle}>경험자 필요여부</Text>
        <TagRow tags={['필요', '무관']} selected={['무관']} fullWidth />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>작성 완료</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function LabelInput({ label, placeholder, defaultValue, unit, multiline }) {
  const [value, setValue] = React.useState(defaultValue || '');
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          multiline={multiline}
        />
        {unit && <Text style={styles.unit}>{unit}</Text>}
      </View>
    </View>
  );
}

function RowInput({ leftLabel, leftValue, rightLabel, rightValue, unit }) {
  return (
    <View style={styles.rowContainer}>
      {[{ label: leftLabel, value: leftValue }, { label: rightLabel, value: rightValue }].map((item, idx) => (
        <View key={idx} style={styles.rowBox}>
          <Text style={styles.smallLabel}>{item.label}</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              defaultValue={item.value}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>{unit}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function TagRow({ tags, selected = [], fullWidth }) {
  return (
    <View style={[styles.tagRow, fullWidth && { justifyContent: 'space-between' }]}>
      {tags.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, isSelected && styles.tagSelected, fullWidth && styles.tagFull]}
          >
            <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>{tag}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: { 
    flexDirection: 'col',
    alignItems: 'start',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTextWrap: { 
    flexDirection:'col',
    alignItems: 'center',
   },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  subtext: { 
    fontSize: 12, 
    color: '#989898', 
    marginTop: 8,
    fontWeight: 'semibold',
  },
  scrollContainer: { 
    padding: 16, 
    paddingBottom: 80 
  },
  inputGroup: { 
    marginBottom: 20 
  },
  label: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    marginBottom: 6,
    color: '#4A5B67'
  },
  inputRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  unit: { 
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, 
    color: '#989898' },

  sectionTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 8,
    color: '#4A5B67' 
  },
  rowContainer: { flexDirection: 'row', gap: 16, marginBottom: 20 },
  rowBox: { flex: 1 },
  smallLabel: { 
    fontSize: 13, 
    color: '#989898', 
    marginBottom: 4, 
    fontWeight: 'bold' 
  },

  tagRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  tagSelected: {
    backgroundColor: '#FF9A5C',
  },
  tagFull: {
    flex: 1,
    alignItems: 'center',
  },
  tagText: { 
    fontSize: 14, 
    color: '#989898' 
  },
  tagTextSelected: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },

  submitButton: {
    backgroundColor: '#FF914D',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
