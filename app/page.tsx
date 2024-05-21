
import { Menu, ConnectWithoutContactOutlined, ArrowRight } from "@mui/icons-material";
import Link from "next/link";
import Navbar from './navigation/Navbar'
import './transactions/trans.css'

export default function Home() {

  return (
    <section>
      <Navbar />
      <div className="bodypac">
        <div className="top-view">
          
        </div>
        <div className="dashcontainer">
         <div className="card-packs">
         <div className="dc1">
          <div className="dashcard">
              <center>
                <div>
                  <strong>KES. 25000</strong>
                </div>
                <div>
                  <small>Total Savings</small>
                </div>
              </center>
            </div>
         </div>
          <div className="dc2">
              <div className="dashcard">
                <center>
                  <div>
                    <strong>KES. 5200</strong>
                  </div>
                  <div>
                    <small>Balance</small>
                  </div>
                </center>
              </div>
              <div className="dashcard">
                <center>
                  <div>
                    <strong>KES. 30500</strong>
                  </div>
                  <div>
                    <small>Target</small>
                  </div>
                </center>
              </div>
          </div>
         </div>
          
          <div className="top-view">
                <strong>Top Transactions</strong>
            </div>
            <div className="trans-body-cont">
               
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
                 </tbody>
                </table>
            </div>
            <center>
              <button className="btnAlltrans">All transactions <ArrowRight /></button>
            </center>
          
        </div>
      </div>
    </section>
  );
}
