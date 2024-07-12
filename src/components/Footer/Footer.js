import { Typography } from '@mui/material'
import React from 'react'
import resumeData from '../../utils/ResumeData'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_left">
           <Typography className='footer_name'>{resumeData.name}</Typography>
            </div>
            <div className="footer_right">
           <Typography className='footer_copyright'>
               Design and developed by{' '}
               <a href='/' target='_blank' >
                   Asif 
               </a>
           </Typography>
            </div>
        </div>
    )
}

export default Footer
