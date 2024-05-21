import Link from 'next/link'
import { ArrowRightAltOutlined, ArrowRightRounded, Person2Outlined, PersonAdd } from '@mui/icons-material'
import Navbar from '../navigation/Navbar'
import './memb.css'
export default function Members(){
    return(
        <div>
            <Navbar />
            <div className="mem-body">
                <div className="mem-top">
                    <div className='mem-top-tbox'>
                    <strong>34 MEMBERS</strong>
                    <Link href="/members/add">
                        <button className='btnAddOpen'>
                            <PersonAdd /> Add medmber
                        </button>
                    </Link>
                    </div>
                </div>
                

                <div className="mem-card">
                    <div><Person2Outlined /></div>
                    <div className='name-cardSec'>Yunus Emoru</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                </div>
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
        </div>
    )
}