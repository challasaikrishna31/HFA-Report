import React, { useContext } from 'react'
import { CommonContext } from '../Context/CommonContext';
import FileUpload from './FileUpload';
import ReportTableWrapper from './ReportTableWrapper'

const Body = () => {
    const { commonData, setCommonData } = useContext(CommonContext);
    return (
        <main className="m-2 p-2 border-2 rounded-xl h-screen overflow-auto">
            {commonData.selectedButton == "Report" ? <ReportTableWrapper /> : <FileUpload />}
        </main>
    )
}

export default Body