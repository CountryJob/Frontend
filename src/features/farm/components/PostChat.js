import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PostChat({onComplete, onIntro}){
  const chatData = [
    { type: 'ai', text: '안녕하세요. 어떤 농작물을 도와줄 사람을 찾으시나요? 예를 들면, 사과따기, 고구마 캐기처럼요.' },
    { type: 'user', text: '상추 수확이요.' },
    { type: 'ai', text: '입할 날짜는 언제부터 언제까지인가요? 7월 23일부터 25일까지처럼 얘기해주세요.' },
    { type: 'user', text: '8월 1일부터 8월 3일까지요.' },
    { type: 'ai', text: '몇시에 시작해서 몇시에 끝나나요?' },
    { type: 'user', text: '오전 8시부터 오후 5시까지 입니다.' },
    { type: 'ai', text: '이번에 작업해야하는 논밭이나 과수원 면적이 어느 정도 되나요?' },
    { type: 'user', text: '한 50 제곱미터 정도 됩니다.' },
    { type: 'ai', text: '점심은 제공해주시나요? 맞으면 ‘네’, 아니면 ‘아니요’ 라고 대답해주세요.' },
    { type: 'user', text: '예, 점심 제공합니다.' },
    { type: 'ai', text: '간식은 제공해주시나요?' },
    { type: 'user', text: '예, 간식도 줘요.' },
    { type: 'ai', text: '교통비는 챙겨 주실건가요?' },
    { type: 'user', text: '아니요 교통비는 따로 없어요.' },
    { type: 'ai', text: '작업 장소는 등록하신 주소에서 하시는게 맞으신가요?' },
    { type: 'user', text: '예, 주소 맞습니다.' },
    { type: 'ai', text: '상세한 작업내용과 필요인력, 하루 일당, 경력자 필요여부는 제가 추천해서 채워드릴게요. 나중에 화면에서 확인하시고 수정하셔도 됩니다.' },
  ];

  return(
    <SafeAreaView style={styles.safe}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onIntro}>
          <Text>{'<'}뒤로가기</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI 공고 올리기</Text>
        <Text style={styles.headerSubtitle}>대화를 통해 구인 글이 완성됩니다.</Text>
      </View>
      {/* 대화 컨테이너 */}
      <ScrollView style={styles.chatContainer}>
        {chatData.map((item, index) => {
          if(item.type === 'ai'){
            return(
              <View key={index}
                    style={styles.aiRow}>
                <View style={[styles.bubbleRow, styles.aiBubble]}>
                  <Image source={require('../../../assets/images/farmerImage.png')}
                        style={styles.aiAvatar} />
                  <Text style={styles.bubbleText}>{item.text}</Text>
                </View>
              </View>
            );
          } else{
            return(
              <View key={index}
                    style={[styles.bubble, styles.userBubble]}>
                <Text style={styles.bubbleText}>{item.text}</Text>
              </View>
            );
          }
        })}
      </ScrollView>
      <TouchableOpacity style={styles.completeButton}
                        onPress={onComplete}>
        <Text style={styles.buttonText}>완료</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'col',
    alignItems: 'start',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000'
   },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  aiAvatar: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 8,
  },
  bubble: {
    padding: 12,
    marginVertical: 6,
    maxWidth: '100%',
    borderRadius: 20,
  },
  aiBubble: {
    backgroundColor: '#F4FFF5',
    alignSelf: 'flex-start',
  },
  bubbleRow: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 20,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4FFF5',
  },
  userBubble: {
    backgroundColor: '#FFE1CD',
    alignSelf: 'flex-end',
  },
  bubbleText: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#4A5B67',
    flexShrink: 1,       
    flexWrap: 'wrap',
  },
  completeButton: {
    backgroundColor: '#FF914D',
    paddingVertical: 10,
    margin: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})