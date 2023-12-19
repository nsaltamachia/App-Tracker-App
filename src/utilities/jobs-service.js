import * as jobsAPI from "./jobs-api";

export async function create(jobData) {
  return jobsAPI.create(jobData);
}

export async function getAllJobs() {
  return jobsAPI.getAll();
}

export async function deleteJob(id) {
  return jobsAPI.deleteJob(id);
}

export async function editJob({ jobData, id }) {
  return jobsAPI.edit(jobData, id);
}

export async function updateJob({jobData, id}) {
  return jobsAPI.update(jobData, id);
}