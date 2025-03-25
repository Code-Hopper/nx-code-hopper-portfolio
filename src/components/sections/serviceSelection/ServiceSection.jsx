import React from 'react'

const ServiceSection = () => {
    return (
        <>
            <div className='content-container service-section px-5 py-15'>
                <div className='service-section-titile'>

                    <div id='title-card-element'>
                        <div className='card-box card-box-1'></div>
                        <div className='card-box card-box-2'></div>
                        <div className='card-box card-box-3'></div>
                        <div className='card-box card-box-4'></div>
                        <span className='title-text'>Service Offered</span>
                    </div>

                </div>
                <div className='service-blocks'>
                    {/* web development */}
                    <div></div>
                    {/* digital marketing */}
                    <div></div>
                    {/* mobile app development */}
                    <div></div>
                    {/* learn to code with me */}
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection
