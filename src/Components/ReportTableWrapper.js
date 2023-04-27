import React, { useEffect, useState } from 'react'
import { getReportData } from '../Services/ReportService'
import { ReportTable } from './ReportTable'
import MOCK_DATA from '../Data/MOCK_DATA.json';
const ReportTableWrapper = () => {
    const [tableData, setTableData] = useState([])
    const [finalTableData, setFinalTableData] = useState([])
    useEffect(() => {
        // getReportData().then(responce => {
        //     setTableData(responce?.Students)
        // })
        setTableData(MOCK_DATA.hfareport.Students)
    }, [])
    useEffect(() => {
        const studentList = [...tableData]
        const finalStudentList = studentList.map(student => {
            //opening balance
            let openingBalance = 0
            if (student.currentYear > 1) {
                openingBalance = student.yearWiseFees[(student.currentYear - 1).toString()]?.tuitionFee
            }

            //collected Fee
            let collectedFee = 0, collectedUnivFee = 0;
            collectedFee = student.yearWiseFees[student.currentYear.toString()]?.tuitionFee
            collectedUnivFee = student.yearWiseFees[student.currentYear.toString()]?.universityDevpFee

            //due Fee
            let dueFee = 0, dueUnivFee = 0;
            dueFee = student.pendingFees[student.currentYear.toString()]?.tuitionFee
            dueUnivFee = student.pendingFees[student.currentYear.toString()]?.universityDevpFee
            return { ...student, openingBalance, collectedFee, collectedUnivFee, dueFee, dueUnivFee }
        })
        setFinalTableData(finalStudentList);
    }, [tableData])


    return (
        <ReportTable data={finalTableData} />
    )
}

export default ReportTableWrapper