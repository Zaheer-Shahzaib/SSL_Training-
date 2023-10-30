import React from 'react'
import '../Bottom_Section/css/carousel.css'
import Carousel from '../Bottom_Section/Carousel';


function Swift_Hiring() {
    return (
        <>
            <div className='container-fluid bg-light' style={{marginTop:"-48px"}}>
                <h1>Hello sbisohvoishvio</h1>
                <div className='text-center container mt-5'>

                    <h1 className='hiring pt-5'>Swift Hiring Solutions<span>:</span> Discover Top Engineers</h1>
                    <div className='container w-75'>
                        <h6 className='mt-2 hiring_para'>
                            Choose the right hire quickly, save engineering time, reduce risk, and increase diversity with our technical interview and assessment platform.
                        </h6>
                    </div>

                    <div className='row tab-screen'>
                        <div className='col-lg-6 demo-btn_1'>
                            <button className='m-auto btn_1 py-2 rounded'>Request demo</button>
                        </div>
                        <div className='col-lg-6 demo-btn_2'>
                            <button className='m-auto btn_2 py-2 rounded'>Start a free Trail</button>
                        </div>
                    </div>

                </div>

                <div className='container banner-1 mt-5 text-center'>
                    <img src='/B-2.png' className='w-100'></img>
                </div>
            </div>

            <Carousel />

        </>

    )
}

export default Swift_Hiring