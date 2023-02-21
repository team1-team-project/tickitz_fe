import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
    const navigate = useNavigate()
    const [orderDetail, setOrderDetail] = useState({
        seat: [],
        id_profile: "ajimas"

    })

    const handleCheckout = (e) => {
        e.preventDefault();

        setOrderDetail({
            ...orderDetail,
            id_profile: localStorage.getItem("@test")
        })

        navigate(`/order/${orderDetail.id_profile}`)
        

    }
  return (
    <div className='bg-base pt-20 pb-20'>
        <div className='container font-mulish flex '>
        <section id="left" className='w-[60vw]'>
            <div>
                <h2 className='font-bold'>Movie selected</h2>
                <div className='bg-white rounded-2xl px-5 py-4 flex items-center justify-between mt-5 shadow-lg'>
                    <p className='font-semibold'>Spider-Man: Homecoming</p>
                    <Link to="/movies" className='text-primary font-bold py-2 px-4 rounded-xl text-sm  bg-slate-200'>Change Movie</Link>
                </div>
                <h2 className='pt-5 font-bold'>Choose your seat</h2>
                <div className='bg-white rounded-2xl px-2 py-2 pt-20 mt-5 shadow-lg'>
                    <p className='text-center text-sm font-bold'>Screen</p>
                    <div className='w-[70%] h-3 bg-primary rounded-full mx-auto'></div>
                <div id='seat' className='px-5'>
                    <ul className='grid grid-cols-2 gap-x-10 pt-10'>
                        <li className='grid grid-cols-8'>
                            <p>A</p>
                            <input onClick={(e) => {
                                if(orderDetail.seat.find(e.target.id)) {
                                    setOrderDetail({seat: [...orderDetail.seat,]})
                                }
                            }} id='A1' className='rounded-2xl' type='checkbox'/>
                            <input id="A2" type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2'>
                        <li className='grid grid-cols-8'>
                            <p>B</p>
                            <input className='rounded-2xl' type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2'>
                        <li className='grid grid-cols-8'>
                            <p>C</p>
                            <input className='rounded-2xl' type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2'>
                        <li className='grid grid-cols-8'>
                            <p>D</p>
                            <input className='rounded-2xl' type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2'>
                        <li className='grid grid-cols-8'>
                            <p>E</p>
                            <input className='rounded-2xl' type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2'>
                        <li className='grid grid-cols-8'>
                            <p>F</p>
                            <input className='rounded-2xl' type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2'>
                        <li className='grid grid-cols-8'>
                            <p>G</p>
                            <input className='rounded-2xl' type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                        <li className='grid grid-cols-8'>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 gap-x-10 pt-2 pl-4'>
                        <li className='grid grid-cols-8'>
                            <p className='none'></p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            
                        </li>
                        <li className='grid grid-cols-8'>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                            <p>11</p>
                            <p>12</p>
                            <p>13</p>
                            <p>14</p>
                        </li>
                    </ul>
                </div>

                <p className='mt-10 font-bold px-5'>Seating key</p>
                <div className='flex justify-evenly pt-5 pb-10 text-slate-700 font-semibold'>
                    <p><span className="px-2 text-[#D6D8E7] mr-3 rounded-md py-1 bg-[#D6D8E7]">A</span>Available</p>
                    <p><span className="px-2 text-primary mr-3 rounded-md py-1 bg-primary">A</span>Selected</p>
                    <p><span className="px-2 text-[#F589D7] mr-3 rounded-md py-1 bg-[#F589D7]">A</span>Love nest</p>
                    <p><span className="px-2 text-[#6E7191] mr-3 rounded-md py-1 bg-[#6E7191]">A</span>Sold</p>

                </div>
                </div>
                <div className='flex justify-around mt-10'>
                    <button className='btn-outline-primary'>Change your movie</button>
                    <button onClick={handleCheckout} className='btn-primary'>Checkout now</button>
                </div>


            </div>
        </section>
        <section id="right" className='w-[40vw] text-center pl-10'>
            <h2 className='font-bold'>Order info</h2>
            <div className='px-10 mt-5 pt-5 pb-10 rounded-2xl shadow-lg bg-white'>
                <h2 className='font-bold'>
                    CineOne21 Cinema
                </h2>
                <div className='flex justify-between pt-10 items-center'>
                    <p className='text-xs text-slate-400'>Movie selected</p>
                    <p>Spider-Man: Homecoming</p>
                </div>
                <div className='flex justify-between pt-3 items-center'>
                    <p className='text-xs text-slate-400'>7, march 2023</p>
                    <p>12:00pm</p>
                </div>
                <div className='flex justify-between pt-3 items-center'>
                    <p className='text-xs text-slate-400'>One ticket price</p>
                    <p>$10</p>
                </div>
                <div className='flex justify-between pt-3 items-center'>
                    <p className='text-xs text-slate-400'>Seat choosed</p>
                    <p>C4, C5, C6</p>
                </div>
                <div className='flex justify-between pt-10 items-center'>
                    <p className=' text-slate-800 font-bold'>Total Payment</p>
                    <p className='text-xl font-bold text-primary'>$30</p>
                </div>
                
            </div>
        </section>
    </div>
    </div>
  )
}

export default OrderPage