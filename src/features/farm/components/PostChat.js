import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MicIcon from '../../../assets/icons/mic-icon.svg';

export default function PostChat({ onComplete}) {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false); 

  const toggleRecording = () => {
    if (isRecording) {
      // 녹음 중지
      setIsRecording(false);
      setHasRecorded(true);
    } else {
      // 녹음 시작
      setIsRecording(true);
    }
  };

  const handleComplete = () => {
    // 완료 처리 (나중에 실제 데이터와 함께)
    onComplete && onComplete();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 고정 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>AI 공고 올리기</Text>
        <Text style={styles.subtitle}>대화를 통해 구인 글이 완성됩니다</Text>
      </View>

      {/* 스크롤 가능한 콘텐츠 */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.instruction}>
          안녕하세요. 질문을 확인하신 후, 답변해주세요!
        </Text>

        {/* 질문 목록 */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            1. 어떤 농작물을 도와줄 사람을 찾으시나요?{'\n'}
            예를 들면, 사과따기, 고구마 캐기처럼요.
          </Text>

          <Text style={styles.questionText}>
            2. 일할 날짜는 언제부터 언제까지인가요?{'\n'}
            7월 23일부터 25일까지 처럼 얘기해주세요.
          </Text>

          <Text style={styles.questionText}>
            3. 몇시에 시작해서 몇시에 끝나나요?
          </Text>

          <Text style={styles.questionText}>
            4. 이번에 작업해야하는 논밭이나 과수원 면적이 어느 정도 되나요?
          </Text>

          <Text style={styles.questionText}>
            5. 점심/간식/교통비 중 제공해주시는 항목을 말씀해주세요.
          </Text>
          
          <Text style={styles.questionText}>
            상세한 작업내용과 필요인력, 하루 일당, 경험자 필요여부는 제가 추천해서 채워드릴게요.{'\n'}
            나중에 화면에서 확인하시고 수정가능합니다.
          </Text>
        </View>

        {/* 마이크 버튼 */}
        <View style={styles.micContainer}>
          <TouchableOpacity
            style={[
              styles.micButton,
              isRecording && styles.micButtonActive
            ]}
            onPress={toggleRecording}
          >
            <MicIcon width={40} height={40} color="#fff" />
            {isRecording && (
              <>
                <View style={styles.ripple1} />
                <View style={styles.ripple2} />
                <View style={styles.ripple3} />
              </>
            )}
          </TouchableOpacity>
          
          <Text style={styles.micText}>
            {isRecording 
              ? '녹음 중... 탭하여 중지' 
              : '마이크를 한번 누른 후 말씀해주세요'
            }
          </Text>
        </View>

        {/* 녹음 완료 상태 */}
        {hasRecorded && !isRecording && (
          <View style={styles.completedContainer}>
            <Text style={styles.completedText}>✅ 음성 녹음이 완료되었습니다!</Text>
            <Text style={styles.completedSubtext}>
              공고 올리기 버튼을 눌러서 다음 단계로 진행하세요.
            </Text>
          </View>
        )}

        {/* 완료 버튼 */}
        <TouchableOpacity 
          style={[
            styles.completeButton, 
            (!hasRecorded || isRecording) && styles.completeButtonDisabled
          ]}
          onPress={handleComplete}
          disabled={!hasRecorded || isRecording}
        >
          <Text style={styles.completeButtonText}>공고 올리기</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff', // 헤더 고정을 위한 배경색
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40, // 하단 여백 추가
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    lineHeight: 20,
  },
  instruction: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A5B67',
    marginBottom: 20,
  },
  questionContainer: {
    backgroundColor: '#F4FFF5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  questionText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4A5B67',
    marginBottom: 16,
    lineHeight: 24, // 줄 간격 추가
  },
  micContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF9A5C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    position: 'relative',
  },
  micButtonActive: {
    backgroundColor: '#e74c3c',
  },
  ripple1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(231, 76, 60, 0.3)',
    opacity: 0.6,
  },
  ripple2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(231, 76, 60, 0.2)',
    opacity: 0.4,
  },
  ripple3: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(231, 76, 60, 0.1)',
    opacity: 0.2,
  },
  micText: {
    fontSize: 15,
    color: '#4A5B67',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 250,
  },
  completedContainer: {
    backgroundColor: '#e8f5e8',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#27ae60',
  },
  completedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 8,
  },
  completedSubtext: {
    fontSize: 14,
    color: '#27ae60',
    textAlign: 'center',
    lineHeight: 18,
  },
  completeButton: {
    backgroundColor: '#FF914D',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#FF914D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20, // 상단 여백 추가
  },
  completeButtonDisabled: {
    backgroundColor: '#d1d5db',
    shadowOpacity: 0,
    elevation: 0,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});