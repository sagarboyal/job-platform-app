export const GET_ALL_JOB = `
  query GetAllJob($page: Int, $size: Int) {
    getAllJob(page: $page, size: $size) {
      content {
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
      page
      size
      totalElements
      totalPages
      hasNext
      hasPrevious
    }
  }
`;
