import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import DateTimeInput from '../components/DateTimePicker';
import LeftIcon from '../../../assets/icons/left-icon.svg';
export default function JobPostForm({ onChat }) {
  // 서버에서 받아온 데이터 (더미 데이터)
  const dummyJobPost = {
    title: "상추 수확",
    area_size: 50,
    start_date: "2025-08-01",
    end_date: "2025-08-03",
    start_time: "08:00",
    end_time: "17:00",
    address: "전북특별자치도 진안군 부귀면 가치길 17-41",
    description: "상추 밭에서 수확 작업\n상태 확인 후 포장 및 이동 보조",
    recruit_count_male: 1,
    recruit_count_female: 2,
    salary_male: 120000,
    salary_female: 110000,
    meal: true,
    snack: true,
    transport_allowance: false,
    experience_required: false
  };

  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    title: dummyJobPost.title,
    area_size: dummyJobPost.area_size.toString(),
    start_date: dummyJobPost.start_date,
    end_date: dummyJobPost.end_date,
    start_time: dummyJobPost.start_time,
    end_time: dummyJobPost.end_time,
    address: dummyJobPost.address,
    description: dummyJobPost.description,
    recruit_count_male: dummyJobPost.recruit_count_male.toString(),
    recruit_count_female: dummyJobPost.recruit_count_female.toString(),
    salary_male: dummyJobPost.salary_male.toString(),
    salary_female: dummyJobPost.salary_female.toString(),
    meal: dummyJobPost.meal,
    snack: dummyJobPost.snack,
    transport_allowance: dummyJobPost.transport_allowance,
    experience_required: dummyJobPost.experience_required,
  });

  // 폼 데이터 업데이트 함수
  const updateFormData = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 날짜/시간 변경 핸들러
  const handleDateTimeChange = (dateTimeData) => {
    setFormData(prev => ({
      ...prev,
      start_date: dateTimeData.start_date,
      end_date: dateTimeData.end_date,
      start_time: dateTimeData.work_start_time,
      end_time: dateTimeData.work_end_time,
    }));
  };

  // 제공내역 토글 함수
  const toggleProvision = (key) => {
    setFormData(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // 경험자 필요여부 설정
  const setExperienceRequired = (required) => {
    setFormData(prev => ({
      ...prev,
      experience_required: required
    }));
  };

  // 폼 제출
  const handleSubmit = () => {
    console.log('수정된 데이터:', formData);
    // API 호출로 서버에 전송
    // updateJobPost(formData);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onChat}>
          <LeftIcon width={24} height={24} color='#BDC2D0'/>
        </TouchableOpacity>
        <View style={styles.headerTextWrap}>
          <Text style={styles.title}>공고 올리기</Text>
          <Text style={styles.subtext}>ⓘ 자동 모집 마감 (작업 마감일)</Text>
        </View>
      </View>

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* 제목 */}
        <LabelInput 
          label="제목" 
          placeholder="제목 입력" 
          value={formData.title}
          onChangeText={(value) => updateFormData('title', value)}
        />

        {/* 작업 면적 */}
        <LabelInput 
          label="작업 면적" 
          value={formData.area_size}
          unit="m²"
          keyboardType="numeric"
          onChangeText={(value) => updateFormData('area_size', value)}
        />

        {/* 작업기간 및 시간 */}
        <DateTimeInput
          label="작업기간 및 시간"
          defaultStartDate={formData.start_date}
          defaultEndDate={formData.end_date}
          defaultStartTime={formData.start_time}
          defaultEndTime={formData.end_time}
          onDateTimeChange={handleDateTimeChange}
        />

        {/* 농장 주소 */}
        <LabelInput 
          label="농장 주소" 
          value={formData.address}
          onChangeText={(value) => updateFormData('address', value)}
        />

        {/* 작업 내용 */}
        <LabelInput 
          label="작업 내용" 
          multiline 
          value={formData.description}
          onChangeText={(value) => updateFormData('description', value)}
        />

        {/* 필요 인력 */}
        <Text style={styles.sectionTitle}>필요 인력</Text>
        <RowInput 
          leftLabel="남자" 
          leftValue={formData.recruit_count_male}
          rightLabel="여자" 
          rightValue={formData.recruit_count_female}
          unit="명"
          onLeftChange={(value) => updateFormData('recruit_count_male', value)}
          onRightChange={(value) => updateFormData('recruit_count_female', value)}
        />

        {/* 임금조건(일급) */}
        <Text style={styles.sectionTitle}>임금조건(일급)</Text>
        <RowInput 
          leftLabel="남자" 
          leftValue={parseInt(formData.salary_male).toLocaleString()}
          rightLabel="여자" 
          rightValue={parseInt(formData.salary_female).toLocaleString()}
          unit="원"
          keyboardType="numeric"
          onLeftChange={(value) => updateFormData('salary_male', value)}
          onRightChange={(value) => updateFormData('salary_female', value)}
        />

        {/* 제공내역 */}
        <Text style={styles.sectionTitle}>제공내역</Text>
        <TagRow 
          tags={[
            { key: 'meal', label: '중식' },
            { key: 'snack', label: '간식' },
            { key: 'transport_allowance', label: '교통비' }
          ]}
          selectedKeys={{
            meal: formData.meal,
            snack: formData.snack,
            transport_allowance: formData.transport_allowance
          }}
          onToggle={toggleProvision}
        />

        {/* 경험자 필요여부 */}
        <Text style={styles.sectionTitle}>경험자 필요여부</Text>
        <ExperienceSelector 
          selected={formData.experience_required}
          onSelect={setExperienceRequired}
        />

        {/* 제출 버튼 */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>작성 완료</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// 개별 입력 컴포넌트
function LabelInput({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  unit, 
  multiline, 
  keyboardType = 'default' 
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          keyboardType={keyboardType}
        />
        {unit && <Text style={styles.unit}>{unit}</Text>}
      </View>
    </View>
  );
}

// 두 개 입력이 나란히 있는 컴포넌트
function RowInput({ 
  leftLabel, 
  leftValue, 
  rightLabel, 
  rightValue, 
  unit, 
  keyboardType = 'default',
  onLeftChange,
  onRightChange
}) {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.rowBox}>
        <Text style={styles.smallLabel}>{leftLabel}</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={leftValue}
            onChangeText={onLeftChange}
            keyboardType={keyboardType}
          />
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
      <View style={styles.rowBox}>
        <Text style={styles.smallLabel}>{rightLabel}</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={rightValue}
            onChangeText={onRightChange}
            keyboardType={keyboardType}
          />
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    </View>
  );
}

// 제공내역 태그 컴포넌트
function TagRow({ tags, selectedKeys, onToggle }) {
  return (
    <View style={styles.tagRow}>
      {tags.map((tag) => {
        const isSelected = selectedKeys[tag.key];
        return (
          <TouchableOpacity
            key={tag.key}
            style={[styles.tag, isSelected && styles.tagSelected]}
            onPress={() => onToggle(tag.key)}
          >
            <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
              {tag.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// 경험자 필요여부 선택 컴포넌트
function ExperienceSelector({ selected, onSelect }) {
  return (
    <View style={[styles.tagRow, { justifyContent: 'space-between' }]}>
      {[
        { value: true, label: '필요' },
        { value: false, label: '무관' }
      ].map((option) => (
        <TouchableOpacity
          key={option.value.toString()}
          style={[
            styles.tag, 
            styles.tagFull,
            selected === option.value && styles.tagSelected
          ]}
          onPress={() => onSelect(option.value)}
        >
          <Text style={[
            styles.tagText, 
            selected === option.value && styles.tagTextSelected
          ]}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// 스타일은 기존과 동일
const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: { 
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backButton: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  headerTextWrap: { 
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
    fontWeight: '600',
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
    color: '#989898' 
  },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 8,
    color: '#4A5B67' 
  },
  rowContainer: { 
    flexDirection: 'row', 
    gap: 16, 
    marginBottom: 20 
  },
  rowBox: { 
    flex: 1 
  },
  smallLabel: { 
    fontSize: 13, 
    color: '#989898', 
    marginBottom: 4, 
    fontWeight: 'bold' 
  },
  tagRow: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10, 
    marginBottom: 24 
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: 100, // 최소 너비 설정
  },
  tagSelected: {
    backgroundColor: '#FF9A5C',
    borderColor: '#FF9A5C',
  },
  tagFull: {
    flex: 1,
    alignItems: 'center',
  },
  tagText: { 
    fontSize: 14, 
    color: '#666',
    textAlign: 'center'
  },
  tagTextSelected: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  submitButton: {
    backgroundColor: '#FF914D',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});