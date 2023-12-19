import * as jobsAPI from "./jobs-api";

export async function create(jobData) {
  return jobsAPI.create(jobData);
}

export async function getAllJobs() {
  return jobsAPI.getAll();
}
