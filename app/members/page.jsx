import Link from 'next/link'
import { ArrowRightAltOutlined, ArrowRightRounded, Person2Outlined, PersonAdd } from '@mui/icons-material'
import Navbar from '../navigation/Navbar'
import './memb.css'
import Footer from '../navigation/Footer'
export default function Members(){
    return(
        <div>
            <Navbar />
            <div className="mem-body">
                <div className="mem-top">
                    <div className="topBoxMemb">
                        <div>
                           <center>
                            <div><strong>Active</strong></div>
                            <div><small>23</small></div>
                           </center>
                        </div>
                    </div>
                    <div className="topBoxMemb">
                        <div>
                            <center>
                                <div><strong>Members</strong></div>
                                <div><small>70</small></div>
                            </center>
                        </div>
                    </div>
                </div>
                <Link href="/members/aiijsahc">
                <div className="mem-card">
                    <div><Person2Outlined /></div>
                    <div className='name-cardSec'>Yunus Emoru</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                </div>
                </Link>
                <div className="mem-card">
                    <div><Person2Outlined /></div>
                    <div className='name-cardSec'>Idd Opaka</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                </div>
                <div className="mem-card">
                    <div><Person2Outlined /></div>
                    <div className='name-cardSec'>Imodoi Mumin</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                </div>
                <div className="mem-card">
                    <div><Person2Outlined /></div>
                    <div className='name-cardSec'>Abdulaziz Said</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                </div>
                <div className="mem-card">
                    <div><Person2Outlined /></div>
                    <div className='name-cardSec'>Said Olinga</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}