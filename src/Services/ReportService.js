export async function getReportData() {
    try {
        const response = await fetch('http://localhost:8000/hfareport');
        return await response.json();
    } catch (error) {
        return [];
    }

}