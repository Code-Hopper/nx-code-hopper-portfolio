import React from 'react'

const MainPreks = () => {
    return (
        <>
            <div className="container-fluid bg-[var(--secondaryColor)] relative -z-0">
                <div className="md:px-[var(--sideContenntPadding)] p-2 text-[var(--thirdColor)] text-start">
                    <span>Professional <span className='text-warning'> Developer </span> </span>
                </div>
            </div>
            <div className="container-fluid">
                <div className="md:px-[var(--sideContenntPadding)] p-5 ">
                    {/* create a 3 icons that will fade and then word will apear */}
                    <div className='perks-title'>
                        <h2 className='font-bold perks-section-main-heading mt-5'> <span className='text-warning'>My</span> Expertise</h2>
                        <ul className='mt-6 perks-points'>
                            <li>Full-Stack Development & Responsive Design</li>
                            <li>API Development & Integration</li>
                            <li>Unique Value Propositions & Scalable Architecture</li>
                            <li>Collaborative Process & Long-Term Support</li>
                            <li>Strong Communication & Problem-Solving Mindset</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPreks
