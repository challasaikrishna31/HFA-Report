import React, { useContext, useState } from 'react'
import { CommonContext } from '../Context/CommonContext';

const NavBar = () => {
    const { commonData, setCommonData } = useContext(CommonContext);
    const activeButtonClass = "mx-2 h-9 text-sm bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
    const deActiveButtonClass = "mx-2 h-9 text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

    return (
        <div class="flex flex-row justify-end mx-2 p-2">
            {/* <button class={commonData.selectedButton == "Search" ? activeButtonClass : deActiveButtonClass} onClick={() => { setCommonData({ selectedButton: "Search" }) }}>
                Search
            </button> */}
            <button class={commonData.selectedButton == "Report" ? activeButtonClass : deActiveButtonClass} onClick={() => { setCommonData({ selectedButton: "Report" }) }}>
                Report
            </button>
            <button class={commonData.selectedButton == "Upload" ? activeButtonClass : deActiveButtonClass} onClick={() => { setCommonData({ selectedButton: "Upload" }) }}>
                Upload
            </button>
        </div>
    )
}

export default NavBar