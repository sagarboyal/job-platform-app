export type JobStatus = 'ACTIVE' | 'INACTIVE' | 'EXPIRED';

export type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';
export interface JobDto {
    id: number;
    advertisementNo: string;
    title: string;
    organization: string;
    providerName: string;
    jobLocation: string;
    qualification: string;
    totalVacancies: number;
    startDate: string;        // LocalDate → comes as "YYYY-MM-DD"
    lastDate: string;         // LocalDate → comes as "YYYY-MM-DD"
    postedDate: string;       // LocalDate → comes as "YYYY-MM-DD"
    officialNotificationUrl: string;
    sourceUrl: string;
    providerUrl: string;
    description: string;
    status: JobStatus;
    category: string;
    employmentType: EmploymentType;
    createdAt: string;        // LocalDateTime → comes as "YYYY-MM-DDTHH:mm:ss"
    updatedAt: string;        // LocalDateTime → comes as "YYYY-MM-DDTHH:mm:ss"
}