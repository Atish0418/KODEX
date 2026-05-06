import {NavLink} from 'react-router'

const NavBar = () => {
  
  return (
    <div className=' h-[10%] flex justify-between items-center'>
        <h1>Logo</h1>
        <div className='flex gap-10'>
            <NavLink to="/" className={({isActive}) => isActive ? "text-red-600" : ""} >Home</NavLink>
            <NavLink to="/about/9" className={({isActive}) => isActive ? "text-red-600" : ""}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-600" : ""}>Contact</NavLink>
        </div>
        <button className='cursor-pointer'>LogIn</button>
    </div>
  )
}

export default NavBar