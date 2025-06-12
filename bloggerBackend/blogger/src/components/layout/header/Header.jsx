import React from 'react'
import style from './Header.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Header = () => {
       const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="https://preview.colorlib.com/theme/blogger/img/logo.png" alt="" />
      </div>
      <div className={style.navbar}>
        <ul>
            <l><a href="/">Home</a></l>
            <l><a href="/basket">Basket</a></l>
            <l><a href="/admin">Admin</a></l>
            <l><a href="">Team</a></l>
            <l><a href="">Pages</a></l>
        </ul>
      </div>
      <div className={style.menu} onClick={toggleDrawer}>
<RxHamburgerMenu />

      </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
     <div className={style.list}>
         <ul>
            <l><a href="/">Home</a></l>
            <l><a href="/basket">Basket</a></l>
            <l><a href="/admin">Admin</a></l>
            <l><a href="">Team</a></l>
            <l><a href="">Pages</a></l>
        </ul>
      </div>
            </Drawer>
    
    </div>
  )
}

export default Header
