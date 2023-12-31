import sendRequest from "./send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/jobs';

export async function create(jobData) {
    return sendRequest(BASE_URL, 'POST', jobData); 
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function getJobById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteJob(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function update( id, jobData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT',  jobData );
}

export async function show(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}