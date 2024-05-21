"use client"
import { useState } from 'react'
import { Instagram, Menu,Twitter,Facebook,YouTube, ConnectWithoutContactOutlined, MonetizationOn, Dashboard, PeopleAltRounded, AdminPanelSettings } from "@mui/icons-material";
import { AccountBalance, Cancel, CancelOutlined , LogoutOutlined, Person2Rounded,TableBar, Settings} from '@mui/icons-material'

import Link from "next/link";
import SideNav from './SideNav'
export default function Navbar(){

  const [showSide,setShowSide]=useState(false)
    return(
        <div className="topBar">
        <div>
              <small><strong className='logoMap'>Safesave<ConnectWithoutContactOutlined /></strong></small>
        </div>
        <div>
          <button className="btnMenu" onClick={()=>{
            if(!showSide){
              setShowSide(true)
            }else{
              setShowSide(false)
            }
          }}>
            <strong>
              <Menu className="menu"/>
            </strong>
          </button>
        </div>
        <div className={showSide ? 'sideContainer':'hideSide'}>
            <div className="top-sideBAr">
                <div>
                  <small><strong className='logoMap'>Safesave<ConnectWithoutContactOutlined /></strong></small>
                </div>
                <div>
                    <button className='canbtnDiv' onClick={()=>{
                        setShowSide(false)
                    }}><Cancel className='btnCancel'/></button>
                </div>
            </div>
            <div className="sideContent">
                <Link href="/">
                  <div className='sideItem'>
                      <button className='btnsideitem'><Dashboard /> <strong>Dashboard</strong></button>
                  </div>
                </Link>
                <Link href='/members'>
                <div className='sideItem'>
                    <button className='btnsideitem'><PeopleAltRounded /> <strong>Members</strong></button>
                </div>
                </Link>
                <Link href="/transactions">
                <div className='sideItem'>
                    <button className='btnsideitem'><MonetizationOn /> <strong>Transactions</strong></button>
                </div>
                </Link>
                <div className='sideItem'>
                    <button className='btnsideitem'><AdminPanelSettings /> <strong>Admin</strong></button>
                </div>
                <div className='sideItem'>
                      <button className='btnsideitem'><LogoutOutlined /> <strong>Logout</strong></button>
                </div>
            </div>
        </div>
      </div>
    )
}