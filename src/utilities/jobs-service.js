
import * as jobsAPI from "./jobs-api";

export async function create(jobData) {
  return jobsAPI.create(jobData);
}

export async function getAllJobs() {
  return jobsAPI.getAll();
}

export async function getJobById(id) {
  return jobsAPI.getJobById(id);
}

export async function deleteJob(id) {
  return jobsAPI.deleteJob(id);
}

export async function editJob({ jobData, id }) {
  return jobsAPI.edit(jobData, id);
}

export async function updateJob({updatedJobData, id}) {
  return jobsAPI.update(id);
}


export async function show(id) {
  return jobsAPI.show(id);
}