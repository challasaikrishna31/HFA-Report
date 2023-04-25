import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const DisplayCard = () => {
    const { User } = useContext(UserContext);
    return (
        <div class="rounded shadow-lg box-border w-44 h-44 m-2 overflow-x-hidden">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    {User.UserName}
                </p>
            </div>
            <div class="flex px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default DisplayCard