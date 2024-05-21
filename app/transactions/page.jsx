
import './trans.css'
import Navbar from '../navigation/Navbar'

export default function Transaction(){
    return (
        <div>
           <Navbar />
           <div className="transBody">
            <div className="top-view-trans">
                <strong>Transactions</strong>
            </div>
            <div className="trans-body-cont">
                <div className="top-tr">
                    <div className='tptr-card'>
                        <strong>Tatal : KES 25300</strong>
                    </div>
                    <div className='tptr-card target'>
                        <strong className='target'>Target : KES 50000</strong>
                    </div>
                </div>
                <table className='trans-table'>
                 <thead>
                    <tr>
                        <th><small>DATE</small></th>
                        <th><small>NAME</small></th>
                        <th><small>AMOUNT</small></th>
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