import { View, StyleSheet } from "react-native";
import JobApplicant from "./JobApplicant";
import JobPostContent from "./JobPostContent";

export default function JobPostCard({ job }) {

  return (
    <View style={styles.card}>
      {/* 상단: 지원자 정보 */}
        <JobApplicant
          applicantCount={job?.applicantCount}
          onPress={() => console.log(`공고 ${job.id} 지원자 목록 보기`)}
        />
      {/* 하단: 공고 정보 */}
      <JobPostContent job={job} />
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    marginVertical: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    padding: 10,
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
  }
})