import sendRequest from "./send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/jobs';

export async function create(jobData) {
    return sendRequest(BASE_URL, 'POST', jobData); 
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function deleteJob(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}