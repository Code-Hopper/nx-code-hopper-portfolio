import GetServiceLandingData from '@/components/sections/ServicePage/GetServiceLandingData'
import React from 'react'

const page = ({params}) => {
    return (
        <>
            <GetServiceLandingData serviceName={params.servicename} />
        </>
    )
}

export default page
