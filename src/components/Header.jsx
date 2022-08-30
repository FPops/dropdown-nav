import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import arrowdown from '../assets/icon-arrow-down.svg'
import arrowup from '../assets/icon-arrow-up.svg'
import menuOpen from '../assets/icon-menu.svg'
import closeMenu from '../assets/icon-close-menu.svg'
import todo from '../assets/icon-todo.svg'
import calendar from '../assets/icon-calendar.svg'
import reminders from '../assets/icon-reminders.svg'
import planning from '../assets/icon-planning.svg'

function Header() {
    const [openFeat, setOpenFeat] = useState(false);
    const [openComp, setOpenComp] = useState(false);


    const handleOpen = () => {
        const nav = document.querySelector(".navbar");
        const menuButton = document.querySelector(".menu-button")
        nav.classList.toggle('open')
        


        if(nav.classList.contains("open")){
            menuButton.src = closeMenu;
        }else{
            menuButton.src = menuOpen;
        }
    }

    return (
        <header className="p-5 flex items-center justify-between">
            <div className='lg:flex lg:items-start lg:justify-center'>
                <img src={logo} alt="" className='mr-5' />
                <nav className='navbar'>
                    <div className='mb-2 lg:mb-0'>
                        <button onClick={()=>{

                                setOpenFeat(!openFeat);
                                setOpenComp(false);
                            }
                            } className='flex items-center justify-start'>Features {openFeat ? <img src={arrowup} alt="" className='ml-2'/>:<img src={arrowdown} alt="" className='ml-2'/>}</button>
                        {openFeat && <ul className='mt-2 ml-3 lg:ml-0  lg:p-3 lg:shadow'>
                            <li className='flex items-center justify-start text-small mb-2'><img src={todo} alt="" className='mr-2'/>Todo List</li>
                            <li className='flex items-center justify-start text-small mb-2'><img src={calendar} alt="" className='mr-2'/>Calendar</li>
                            <li className='flex items-center justify-start text-small mb-2'><img src={reminders} alt="" className='mr-2'/>Reminders</li>
                            <li className='flex items-center justify-start text-small mb-2'><img src={planning} alt="" className='mr-2'/>Planning</li>
                        </ul>}
                    </div>

                    <div className='mb-2 lg:mb-0'>
                        <button onClick={() =>{

                            setOpenComp(!openComp);
                            setOpenFeat(false);
                            
                            }
                            } className='flex focus items-center justify-start'>Company {openComp ? <img src={arrowup} alt="" className='ml-2'/>:<img src={arrowdown} alt="" className='ml-2'/>}</button>
                        {openComp && <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow'>
                            <li className='flex items-center justify-start text-small mb-2'>History</li>
                            <li className='flex items-center justify-start text-small mb-2'>Our Team</li>
                            <li className='flex items-center justify-start text-small mb-2'>Blog</li>
                        </ul>}
                    </div>
                    <div>
                        <button className='mb-2 lg:mb-0'>Careers</button>
                    </div>
                    <div>
                        <button>About</button>
                    </div>
                </nav>
            </div>

            <div className='lg:hidden'>
                <button onClick={handleOpen}>
                    <img src={menuOpen} alt="" className='menu-button'/>
                </button>
            </div>

            <div className='hidden lg:block'>
                <button className='mr-10 opacity-75'>Login</button>
                <button className='border-2 border-black opacity-75 px-6 py-2 rounded-2xl'>Register</button>
            </div>
        </header>
    );
}

export default Header