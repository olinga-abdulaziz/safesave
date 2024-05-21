

import { Person2Rounded, PhoneAndroidRounded } from '@mui/icons-material'
import Navbar from '../../navigation/Navbar'
import '../memb.css'
export default function AddTransaction(){
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
                <div className="addt-form">
                    <div><small><strong>Add new transaction</strong></small></div>
                    <div>
                       <form>
                            <input type="text" className='forminput' placeholder='Amount'/>
                            <button>Add</button>
                       </form>
                    </div>
                </div>
            </div>
            <div className="memtransacts">
            
            <div className="top-view">
                <strong>Transactions</strong>
            </div>
            <div className="trans-body-cont">
                <div className="top-tr">
                    <div>
                        <strong>Tatal : KES 25300</strong>
                    </div>
                </div>
                <table className='trans-table'>
                 <thead>
                    <tr>
                        <th>DATE</th>
                        <th>NAME</th>
                        <th>AMOUNT</th>
                    </tr>
                 </thead>
                 <tbody>
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
        </div>
    )
}