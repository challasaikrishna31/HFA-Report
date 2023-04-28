import axios from "axios";
export async function getReportData() {
    try {
        // const response = await fetch('http://localhost:8000/hfareport');
        const response = await axios(
            'http://localhost:8000/hfareport'
        );
        return response.data;
    } catch (error) {
        return [];
    }

}

export async function uploadFile(formData) {
    try {
        const response = await axios.post("https://your-api-endpoint.com/upload", formData);
        return response.data;
    } catch (err) {
        console.error(err);
    }

}