import React from 'react'
import { Box, Typography } from "@mui/material"

const About = () => {
    return (
        <Box className='!container !mx-auto !max-w-7xl !mt-52'>
            <Box>
                <Typography className='!font-extrabold !text-5xl !text-[--title-color] !font-serif'>About</Typography>
                <Box className="!flex !flex-row !mt-10">
                    {/* <Box className='!border-2 !border-[--gold-400] !rotate-90 !h-12'></Box> */}
                    <hr className='!w-40 !border !border-[--gold-400] !mt-3'></hr>
                    <Typography className='!text-left lg:!text-base !text-xl  !text-[--text-color] !mx-4'>Nam tempus ipsum nec ligula consectetur mollis. Curabitur 
                    consectetur magna eu sapien maximus, ut aliquet nibh facilisis. Duis felis nisl, luctus interdum dignissim in,
                     convallis in dui. Suspendisse potenti. Etiam bibendum sed libero in accumsan. <span className='!text-[--gold-400] !font-serif'>Nunc in libero magna. Donec rhoncus ligula in lacinia</span> pellentesque. 
                    Morbi nec risus non urna vestibulum ultricies a ac ex. Sed ut odio mi. Curabitur vulputate, tellus at facilisis congue, metus dolor condimentum tortor
                    , ut finibus neque tortor quis lectus. Nulla nisl erat, tempus id arcu vitae, luctus consequat massa.
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default About
