import React, { useEffect, useState } from 'react'
import { getReportData } from '../Services/ReportService'
import { ReportTable } from './ReportTable'
import MOCK_DATA from '../Data/MOCK_DATA.json';
import NoDataFound from './NoDataFound';
import LoadingIcon from './LoadingIcon';
const ReportTableWrapper = () => {
    const [tableData, setTableData] = useState([])
    const [finalTableData, setFinalTableData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getReportData().then(responce => {
            setTableData(responce?.Students)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
        //setTableData(MOCK_DATA.feesmanagement.Students)
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

            //demand Fee
            let demandFee = 0, demandUnivFee = 0;
            demandFee = collectedFee - dueFee
            demandUnivFee = collectedUnivFee - dueUnivFee
            return { ...student, openingBalance, collectedFee, collectedUnivFee, dueFee, dueUnivFee, demandFee, demandUnivFee }
        })
        setFinalTableData(finalStudentList);
    }, [tableData])


    if (loading)
        return <LoadingIcon />
    return (
        finalTableData.length > 0 ? <ReportTable data={finalTableData} /> : <NoDataFound />
    )
}

export default ReportTableWrapper