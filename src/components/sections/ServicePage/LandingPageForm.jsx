import React from 'react'

const LandingPageForm = () => {

    // get name and dropdown option from parent

    return (
        <>
            <form action="">
                <div className='form-container bg-white p-3 rounded-2xl'>
                    <h1 className='text-center font-medium'>Start Discusion</h1>

                    <div className='input-fields py-3'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Phone' />
                        <input type="text" placeholder='Email' />

                        <select name="" id="">
                            <option value="">Solution For</option>
                            <option value="">Solution 1</option>
                            <option value="">Solution 2</option>
                            <option value="">Solution 3</option>
                        </select>

                        <button type='submit' className='form-submit-button'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LandingPageForm
