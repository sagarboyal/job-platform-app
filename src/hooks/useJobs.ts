import { useEffect, useState } from 'react';
import { fetchJobsApi } from '../services/jobService';
import { JobDto } from '../types/job';
import { Page } from '../types/page';

export const useJobs = () => {
    const [jobs, setJobs] = useState<JobDto[]>([]);
    const [pageInfo, setPageInfo] = useState<Omit<Page<JobDto>, 'content'> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loadJobs = async (page = 0, size = 20) => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchJobsApi(page, size);
            setJobs(data.content);
            const { content, ...restMetadata } = data;
            setPageInfo(restMetadata);
        } catch (err: any) {
            console.error("Error fetching jobs:", err);
            setError(err.message || "Failed to fetch jobs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadJobs();
    }, []);

    return { jobs, pageInfo, loading, error, refetch: loadJobs };
};
