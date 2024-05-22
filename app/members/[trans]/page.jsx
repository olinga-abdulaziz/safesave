"use client"
import { useState } from 'react'
import Link from 'next/link'
import { AddCard, Person2Rounded, PhoneAndroidRounded, PlusOneOutlined, Save } from '@mui/icons-material'
import Navbar from '../../navigation/Navbar'
import '../memb.css'
import Footer from '../../navigation/Footer'
import AddTransactionBox from '../../components/AddTransaction'
export default function AddTransaction(){
    const [isAdmin,setisAdmin]=useState(true)
    return(
        <div>
            <Navbar />
            <div className="memt-top">
                <div>
                    <div className="namet-div">
                        <Person2Rounded />
                        <strong>Abdulaziz Said</strong>
                    </div>
                    <div className="namet-div">
                        <PhoneAndroidRounded />
                        <strong>+254769210601</strong>
                    </div>
                </div>

               <AddTransactionBox />


            </div>
            <div className="memtransacts">
            
            <div className="top-view">
                <strong>Transactions</strong>
            </div>
            <div className="trans-body-cont">
                <div className="top-tr">
                    <div className='totalBox'>
                        <strong>Tatal : KES 25300</strong>
                    </div>
                </div>
                <table className='trans-table'>
                 <thead>
                    <tr>
                        <th ><small className='ttTableh'>DATE</small></th>
                        <th ><small className='ttTableh'>NAME</small></th>
                        <th ><small className='ttTableh'>AMOUNT</small></th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Mumin imodoi</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Idd opaka</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Abdulaziz said</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Saidi olinga</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Yunus Emoru</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Mumin imodoi</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Idd opaka</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Abdulaziz said</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Saidi olinga</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Yunus Emoru</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Mumin imodoi</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Idd opaka</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Abdulaziz said</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>18/05/2024</td>
                        <td>Saidi olinga</td>
                        <td>2000</td>
                    </tr>
                 </tbody>
                </table>
            </div>
            </div>
            <Footer />
        </div>
    )
}