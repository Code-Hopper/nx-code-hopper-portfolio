import React from 'react'
import ServiceLangingPage from './ServiceLangingPage'

const GetServiceLandingData = ({ serviceName }) => {

    return (
        <>

            {/* sort service data and send them to */}

            <ServiceLangingPage data={{serviceName}} />

        </>
    )
}

export default GetServiceLandingData
