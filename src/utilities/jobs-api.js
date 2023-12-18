import sendRequest from "./send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/jobs';

export async function create() {
    return sendRequest(BASE_URL );
}