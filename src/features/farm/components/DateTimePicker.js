// components/DateTimeInput.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function DateTimeInput({ 
  label, 
  defaultStartDate,  // "2025-08-01" 
  defaultEndDate,    // "2025-08-03"
  defaultStartTime,  // "08:00"
  defaultEndTime,    // "17:00"
  onDateTimeChange   // 변경된 값을 상위로 전달
}) {
  // 서버 날짜 형식을 Date 객체로 변환
  const parseServerDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  // 서버 시간 형식을 Date 객체로 변환 (날짜는 임의로 설정)
  const parseServerTime = (timeStr) => {
    const [hour, minute] = timeStr.split(':');
    return new Date(2025, 0, 1, parseInt(hour), parseInt(minute));
  };

  // 초기값 설정
  const [startDate, setStartDate] = useState(() => 
    parseServerDate(defaultStartDate || "2025-08-01")
  );
  const [endDate, setEndDate] = useState(() => 
    parseServerDate(defaultEndDate || "2025-08-03")
  );
  const [startTime, setStartTime] = useState(() => 
    parseServerTime(defaultStartTime || "08:00")
  );
  const [endTime, setEndTime] = useState(() => 
    parseServerTime(defaultEndTime || "17:00")
  );

  const [picker, setPicker] = useState({ type: null, open: false });
  
  // 서버 형식으로 변환하는 함수들
  const formatServerDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatServerTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // 화면 표시용 포맷
  const formatDisplayDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };
  
  const formatDisplayTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Props 변경 시 상태 업데이트 (서버에서 새 데이터를 받았을 때)
  useEffect(() => {
    if (defaultStartDate) setStartDate(parseServerDate(defaultStartDate));
    if (defaultEndDate) setEndDate(parseServerDate(defaultEndDate));
    if (defaultStartTime) setStartTime(parseServerTime(defaultStartTime));
    if (defaultEndTime) setEndTime(parseServerTime(defaultEndTime));
  }, [defaultStartDate, defaultEndDate, defaultStartTime, defaultEndTime]);

  // 값이 변경될 때마다 상위 컴포넌트에 서버 형식으로 전달
  useEffect(() => {
    if (onDateTimeChange) {
      onDateTimeChange({
        start_date: formatServerDate(startDate),
        end_date: formatServerDate(endDate),
        work_start_time: formatServerTime(startTime),
        work_end_time: formatServerTime(endTime),
      });
    }
  }, [startDate, endDate, startTime, endTime]);

  // 피커 열기
  const openPicker = (type) => {
    setPicker({ type, open: true });
  };

  // 피커 닫기
  const closePicker = () => {
    setPicker({ type: null, open: false });
  };

  // 날짜/시간 확인
  const handleConfirm = (selectedDate) => {
    switch(picker.type) {
      case 'startDate':
        setStartDate(selectedDate);
        break;
      case 'endDate':
        setEndDate(selectedDate);
        break;
      case 'startTime':
        setStartTime(selectedDate);
        break;
      case 'endTime':
        setEndTime(selectedDate);
        break;
    }
    closePicker();
  };

  // 현재 선택된 값 가져오기
  const getCurrentValue = () => {
    switch(picker.type) {
      case 'startDate':
        return startDate;
      case 'endDate':
        return endDate;
      case 'startTime':
        return startTime;
      case 'endTime':
        return endTime;
      default:
        return new Date();
    }
  };

  // 피커 제목 가져오기
  const getPickerTitle = () => {
    switch(picker.type) {
      case 'startDate':
        return '시작 날짜 선택';
      case 'endDate':
        return '종료 날짜 선택';
      case 'startTime':
        return '시작 시간 선택';
      case 'endTime':
        return '종료 시간 선택';
      default:
        return '날짜 선택';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <View style={styles.inputContainer}>
        {/* 날짜 선택 영역 */}
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.inputBox}
            onPress={() => openPicker('startDate')}
          >
            <Text style={styles.inputText}>{formatDisplayDate(startDate)}</Text>
          </TouchableOpacity>
          
          <Text style={styles.separator}>-</Text>
          
          <TouchableOpacity 
            style={styles.inputBox}
            onPress={() => openPicker('endDate')}
          >
            <Text style={styles.inputText}>{formatDisplayDate(endDate)}</Text>
          </TouchableOpacity>
        </View>

        {/* 시간 선택 영역 */}
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.inputBox}
            onPress={() => openPicker('startTime')}
          >
            <Text style={styles.inputText}>{formatDisplayTime(startTime)}</Text>
          </TouchableOpacity>
          
          <Text style={styles.separator}>-</Text>
          
          <TouchableOpacity 
            style={styles.inputBox}
            onPress={() => openPicker('endTime')}
          >
            <Text style={styles.inputText}>{formatDisplayTime(endTime)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* DatePicker - 완전 한국어 지원 */}
      <DatePicker
        modal
        open={picker.open}
        date={getCurrentValue()}
        mode={picker.type?.includes('Date') ? 'date' : 'time'}
        onConfirm={handleConfirm}
        onCancel={closePicker}
        locale="ko"
        title={getPickerTitle()}
        confirmText="확인"
        cancelText="취소"
        // 날짜 피커 스타일링
        theme="light"
        // 시간 피커는 24시간 형식
        is24hourSource="device"
        // 추가 한국어 설정
        {...(picker.type?.includes('Date') && {
          // 날짜 피커 전용 설정
          minimumDate: new Date(2020, 0, 1),
          maximumDate: new Date(2030, 11, 31),
        })}
        {...(picker.type?.includes('Time') && {
          // 시간 피커 전용 설정
          minuteInterval: 30, // 30분 단위로 선택
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#4A5B67'
  },
  inputContainer: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inputBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  separator: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
});