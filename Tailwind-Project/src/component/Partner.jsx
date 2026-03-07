import React from 'react'
import { FaMicrosoft } from 'react-icons/fa6'
import { FaAmazon } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

export default function Partner() {
  return (
    <div className=''>
      <p>Trusted by 2k+ Partners.</p>
        <div>
            <FaMicrosoft></FaMicrosoft>
            <FaAmazon></FaAmazon>
            <FaGoogle></FaGoogle>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaWhatsapp></FaWhatsapp>
            <FaGithub></FaGithub>
        </div>
    </div>
  )
}
