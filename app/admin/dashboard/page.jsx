"use client"
import './admin.css'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRightRounded, Person2Outlined } from '@mui/icons-material'
import '../../members/memb.css'
import AddMEMber from '../add-member/page'

export default function AdminDashboard(){
    const [isMessage,setIsmessage]=useState(true)
    const [isTransaction,setIstransaction]=useState(false)
    const [isSettings,setIssettings]=useState(false)
   

    const MembersTab=()=>{
        return(
            <div>
                <div className="tab-main-container">
                    <div className="tabtop">
                        <strong>Members</strong>
                        <Link href="/admin/add-member">
                            <div><button>Add Member</button></div>
                        </Link>
                    </div>
                    <div>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Yunus Emoru</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>John omengo</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Linet opuru</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Jackson mutua</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Joram olinga</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Sadam ibrahim</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Yusuf shabn</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    <Link href="/members/aiijsahc">
                    <div className="mem-card">
                        <div><Person2Outlined /></div>
                        <div className='name-cardSec'>Jibril emoru</div>
                    <div><ArrowRightRounded className='arowright'/></div>
                    </div>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
    const TransactionTab=()=>{
        return(
            <div>
                transaction
            </div>
        )
    }
    const SettingsTab=()=>{
        return(
            <div>
                settings
            </div>
        )
    }
    return(
        <div>
            <div className="adin-navbar">
                <small><h1>Admin Dashboard</h1></small>
                <div className="tab-container">
                    <ul>
                        <li><button onClick={()=>{
                            setIsmessage(true)
                            setIstransaction(false)
                            setIssettings(false)
                        }}>Member</button></li>
                        <li><button onClick={()=>{
                            setIsmessage(false)
                            setIstransaction(true)
                            setIssettings(false)
                        }}>Transaction</button></li>
                        <li><button onClick={()=>{
                            setIsmessage(false)
                            setIstransaction(false)
                            setIssettings(true)
                        }}>Settings</button></li>
                    </ul>
                </div>
            </div>
            <div className="admin-main">
                {isMessage ? <MembersTab />:<></>}
                {isTransaction ? <TransactionTab />:<></>}
                {isSettings ? <SettingsTab />:<></>}
            </div>
        </div>
    )
}