import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import icons1 from "../assets/icons/github.ico";
import icons2 from "../assets/icons/instagram.svg";
import icons3 from "../assets/icons/telegram.ico";
import icons4 from "../assets/icons/facebook.svg";

const Navbar = () => {
  return (
    <div className='h-[100px]'>
      <div className='max-w-[1200px] h-[100%] m-auto flex items-center justify-between'>
        <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='font-bold'>Lama Dev</motion.span>
        <div className='flex gap-[20px]'>
            <Link>
                <img className='w-[20px] h-[20px]' src={icons1} alt="github" />
            </Link>
            <Link>
                <img className='w-[20px] h-[20px]' src={icons2} alt="instagram" />
            </Link>
            <Link>
                <img className='w-[20px] h-[20px]' src={icons3} alt="telegram" />
            </Link>
            <Link>
                <img className='w-[20px] h-[20px]' src={icons4} alt="facebook" />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
