import React from 'react'
import { FaBars ,FaHome} from "react-icons/fa";
import { IoPersonOutline,IoCodeSlashOutline } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb"

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className='flex items-center justify-between px-4 py-2 text-white h-[10vh]'>
      <h1 className='text-3xl'>SK.Khatri</h1>
      <FaBars className='text-3xl md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)} clas/>
      {isOpen && <NavBarList setIsOpen={setIsOpen}/>}  
      <NavBarDesktop/>
    </nav>
  )
}

function NavBarDesktop(){
  return(
    <div className='hidden md:block '>
    <ul className='flex items-center gap-4 justify-center' >
      <NavBarItem Icon={FaHome} name='Home' className="flex items-center justify-center"/>
      <NavBarItem Icon={IoPersonOutline } name='About' className="flex items-center justify-center "/>
      <NavBarItem Icon={IoCodeSlashOutline } name='Projects' className="flex items-center justify-center"/>
      <NavBarItem Icon={TbFileCv } name='Resume' className="flex items-center justify-center gap-2"/>
    </ul>
    </div>
  )
}

function NavBarList({setIsOpen}){
  return (
    <ul className='bg-gray-900 w-[100vw] h-screen absolute top-0 right-0 flex flex-col text-3xl gap-8 items-center justify-center text-white'>
      <NavBarItem Icon={FaHome} name='Home'/>
      <NavBarItem Icon={IoPersonOutline } name='About' />
      <NavBarItem Icon={IoCodeSlashOutline } name='Projects' />
      <NavBarItem Icon={TbFileCv } name='Resume' />
      <p className='font-bold absolute top-0 right-0 p-4 text-center cursor-pointer text-white' onClick={()=> setIsOpen(false)}>X</p>
    </ul>
  )
}

function NavBarItem({Icon,name,className}) {
  return (
    <li className="flex items-center justify-center gap-1">
      <Icon/>
      <p>{name}</p>
    </li>
  )
}

export default NavBar