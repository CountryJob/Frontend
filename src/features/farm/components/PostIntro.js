import { SafeAreaView, Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

export default function PostIntro({onStart}){
  return(
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* 이미지, 텍스트 */}
        <View style={styles.content}>
          <Image
            source={require('../../../assets/images/farmerImage.png')}
            style={styles.image} />
          <Text style={styles.title}>AI 공고 올리기</Text>
          <Text style={styles.subtitle}>
            대화를 통해 구인 글이 완성됩니다{'\n'}
            공고 작성을 위해 아래 버튼을 눌러주세요.
          </Text>
        </View>
        {/* 버튼 */}
        <TouchableOpacity style={styles.button}
                          onPress={onStart}>
          <Text style={styles.buttonText}>대화 시작하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4A5B67'
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: '#FF914D',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});