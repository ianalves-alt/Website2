import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";
import { RiFacebookCircleLine, RiFacebookFill } from "react-icons/ri";
export default function Footer() {

  return (
    <div>
      <h2 className='Thanks'></h2>
      <div className='footer'>
        <div className='footericons'>
          <button type="button"><VscGithub /></button>
          <button><FaInstagram /></button>
          <button><AiOutlineYoutube /></button>
          <button><MdWhatsapp /></button>
          <button><RiFacebookCircleLine /></button>
        </div>
        <ul className='footerLinks'>

          <li>
            Home
          </li>
          <li>
            dolor
          </li>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>amet</li>
        </ul>

      </div>

    </div>
  )
}

