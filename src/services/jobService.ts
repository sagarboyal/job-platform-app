import axios from "axios";
import { JobDto } from "../types/job";
import { Page } from "../types/page";
import { GRAPHQL_URL } from "./api";
import { GET_ALL_JOB } from "./graphql/jobQueries";

export const fetchJobsApi = async (page: number = 0, size: number = 20): Promise<Page<JobDto>> => {
    const response = await axios.post(GRAPHQL_URL, {
        query: GET_ALL_JOB,
        variables: {
            page,
            size,
        },
    });

    if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
    }

    return response.data.data.getAllJob;
};
