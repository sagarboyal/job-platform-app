import { GRAPHQL_URL } from "@/src/services/api";
import { COLORS } from "@/src/theme/colors";
import { JobDto } from "@/src/types/job";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StatusBar,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreen.styles";

const GET_JOB = `
  query GetAllJob {
    getAllJob {
      id
      advertisementNo
      title
      organization
      providerName
      jobLocation
      qualification
      totalVacancies
      startDate
      lastDate
      postedDate
      officialNotificationUrl
      sourceUrl
      providerUrl
      description
    }
  }
`;


const HomeScreen = () => {
  const [jobs, setJobs] = useState<JobDto[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.post(GRAPHQL_URL, {
        query: GET_JOB,
      });

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }
      
      const jobList = response.data.data.getAllJob;
      setJobs(jobList);
      console.log("Fetched jobs:", jobList.length);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={COLORS.gray500} style={styles.searchIcon} />
          <TextInput
            placeholder="Search job here.."
            style={styles.searchInput}
            placeholderTextColor={COLORS.gray400}
          />
        </View>
      </View>
      {loading && <ActivityIndicator size="large" color={COLORS.primary} style={{ marginTop: 20 }} />}
      <View style={styles.content}>
        {/* Blank content for now */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
