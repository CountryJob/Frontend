import { View, Text, StyleSheet } from "react-native";
import JobPostCard from "./JobPostCard";

export default function OngoingJobsSection({jobs}) {
  const dummyJobs = [
    {
      id: 1,
      workPeriod: "7/7(일) - 7/8(화)",
      workTime: "06:00 - 13:00",
      location: "전북특별자치도 임실군 오수면 신기리 350",
      workType: "복숭아 수확",
      wage: "여 110,000원",
      applicantCount: 2,
      hasApplicants: true,
    },
    {
      id: 2,
      workPeriod: "7/3(목) - 7/6(일)",
      workTime: "06:00 - 13:00",
      location: "전북특별자치도 임실군 오수면 신기리 350",
      workType: "복숭아 수확",
      wage: "여 110,000원",
      applicantCount: 1,
      hasApplicants: true,
    },
    {
      id: 3,
      workPeriod: "7/10(목) - 7/12(토)",
      workTime: "08:00 - 17:00",
      location: "전북특별자치도 임실군 오수면 군평길 28",
      workType: "상추 수확 및 상차",
      wage: "남 120,000 / 여 110,000",
      applicantCount: 0,
      hasApplicants: false,
    }
  ];

  return (
    <View style={styles.section}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>진행중인 공고</Text>
        <Text style={styles.subtitle}>수락을 기다리는 지원자를 확인해주세요.</Text>
      </View>

      {/* 공고 리스트 */}
      {dummyJobs.map((job) => (
        <JobPostCard 
          key={job.id}
          job={job}
          hasApplicants={job.hasApplicants} />
      ))}
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
})