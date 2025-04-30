import logo from '../assets/ICONS.png'
import { Link } from 'react-router-dom';
import {House, ClipboardPen, BadgeCheck, ChartBar, LogOut, Archive} from 'lucide-react';
import '../css/sidebar.css'

function Sidebar(){ 
    return(
        <>
        <section className='Sidebar'>
          <div className="sidelogo">
          <img src={logo} alt="Logo" className="lOgo" />
          </div>
       
        <nav className='nav-side'>
            <Link to = "/overview" className='sidebutton'> <House  className='sideIcon' size={20}/> <p>Overview</p> </Link> 
            <Link to = "/enquires" className='sidebutton'> <ClipboardPen className='sideIcon' size={20}/> <p>Enquiries</p> </Link>
            <Link to = "" className='sidebutton'> < BadgeCheck className='sideIcon' size={20}/> <p>Approved</p></Link>
            <Link to = "" className='sidebutton'> < ChartBar className='sideIcon' size={20}/> <p>Sales & Expenses</p></Link>
            <Link to = "" className='sidebutton'> <Archive className='sideIcon' size={20}/> <p>Archive</p> </Link>
            <Link to = "/" className='sidebutton'> <LogOut className='sideIcon' size={20}/> <p>Log-out</p></Link>
        </nav>
        </section>
 

        </>
    );
}

export default Sidebar