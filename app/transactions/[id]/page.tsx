

import './trns.css'
import Navbar from '@/app/navigation/Navbar'
import Footer from '../../navigation/Footer'
export default function TransId(){
    return(
        <div>
            <Navbar />
            <div className="top-transtop">
                <strong>Transaction</strong>
            </div>
            <div className="trs-body">
                <div className='trsnBOX'>
                    <div><small>NAME</small></div>
                    <div><strong>YUNUS EMORU</strong></div>
                </div>
                <div className='trsnBOX'>
                    <div><small>PHONE</small></div>
                    <div><strong>+254712155923</strong></div>
                </div>
                <div className='trsnBOX'>
                    <div><small>TIME</small></div>
                    <div><input type="text" value="18/05/2024"/></div>
                </div>
                <div className='trsnBOX'>
                    <div><small>AMOUNT</small></div>
                    <div><input type="text" value="1200"/></div>
                </div>
                <div className='trsnBOX'>
                    <div><small>ref NO</small></div>
                    <div><strong>76bXDCTn23</strong></div>
                </div>
                <div className='trsnBOX'>
                    <button>Eddit Transaction</button>
                    <button>DELET</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}