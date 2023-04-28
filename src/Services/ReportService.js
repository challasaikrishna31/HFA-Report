import axios from "axios";
const API_URL = "http://localhost:1337/api"
export async function getReportData() {
    try {
        // const response = await fetch('http://localhost:8000/feesmanagement');
        const response = await axios(
            `${API_URL}/student/retrieve?collegeName=SIR C. R. REDDY PHARMACEUTICAL SCIENCES, ELURU&course=Pharm D&year=2`
        );
        return response.data;
    } catch (error) {
        return [];
    }

}

export async function uploadFile(formData, uploadStudentData) {
    const studentUploadURL = "upload/students?collegeName=SIR C. R. REDDY PHARMACEUTICAL SCIENCES, ELURU"
    const trasactionUploadURL = "upload/transactions"
    const finalFileUploadURL = uploadStudentData ? studentUploadURL : trasactionUploadURL;
    try {
        const response = await axios.post(`${API_URL}/${finalFileUploadURL}`, formData);
        return response.data;
    } catch (err) {
        throw new Error(err.message || " Network request failed");
    }

}