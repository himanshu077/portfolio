import React from 'react'
import { Box, Typography, Button } from "@mui/material"
import Navbar from '../Navbar'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import About from '../About';
import Skills from '../Skills';

const Dashboard = () => {
    return (
        <Box className='lg:mx-0 mx-6'>
            <Navbar />
            <Box className='!container !mx-auto !max-w-7xl !relative' sx={{ marginTop: 30, padding: 0 }}>
                <Box className='lg:!flex'>
                    <Box>
                        <Typography className='!text-[--text-color] lg:!w-[45%] !w-full !leading-relaxed !font-bold !text-3xl'>I'M <span className='!text-[--gold-400] !text-5xl !font-extrabold !font-serif'>Lorem Ipsum</span> dolor sit amet, consectetur adipiscing elit. </Typography>
                        <Button variant='outlined' className='!mt-8 !border-2 !border-[--gold-400] !rounded-md !capitalize !text-[--gold-400] !text-xl !font-bold'>
                            Contact me
                        </Button>
                    </Box>
                    <Box className=" !absolute !right-0 !-top-0 !flex !flex-col lg:!mt-36">
                        <Box className="!border-2 !border-[--gold-400] !w-24 !rotate-90"></Box>
                        {/* <Box className="!flex !flex-col !pt-20 !pl-9 !gap-2">
                            <FacebookIcon className='!text-[--title-color]' />
                            <TwitterIcon className='!text-[--title-color]' />
                            <LinkedInIcon className='!text-[--title-color]' />
                            <WhatsAppIcon className='!text-[--title-color]' />
                        </Box> */}
                    </Box>
                </Box>
            </Box>
            <About />
            <Skills />
        </Box>
    )
}

export default Dashboard
