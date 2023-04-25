import React from 'react'
import DisplayCard from './DisplayCard'
import { ReportTable } from './ReportTable'

const Body = () => {
    return (
        <main className="mx-2 p-2 border-2 rounded-xl mb-auto h-screen flex flex-wrap">
            <ReportTable />
        </main>
    )
}

export default Body