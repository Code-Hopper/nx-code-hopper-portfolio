"use client";

import React from 'react'

import GetServiceLandingData from '@/components/sections/ServicePage/GetServiceLandingData'

import { useParams } from 'next/navigation'

const Page = () => {

    const params = useParams()

    return (
        <>
            <GetServiceLandingData serviceName={params.servicename} />
        </>
    )
}

export default Page
