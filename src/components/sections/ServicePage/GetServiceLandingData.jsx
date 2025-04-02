import React from 'react'
import ServiceLangingPage from './ServiceLangingPage'

const GetServiceLandingData = ({ serviceName }) => {

    return (
        <>
            <h1>{serviceName}</h1>

            <ServiceLangingPage />
            
        </>
    )
}

export default GetServiceLandingData
