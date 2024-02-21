import React from 'react';
import { Box, Typography, InputBase, InputAdornment } from '@mui/material';
import Logo from "../../assets/Logo.png";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <Box className='!container !mx-auto !max-w-7xl' sx={{ marginTop: 7, padding: 0 }}>
            <Box className="!flex !justify-between">
                <img src={Logo} alt="Logo" className='!w-16 !min-h-16' />
                <Box className="!flex !gap-8 !items-center">
                    <Typography className='!text-[--text-color]'>About</Typography>
                    <Typography className='!text-[--search-bg-color]'>Portfolio</Typography>
                    <Typography className='!text-[--search-bg-color]'>Contact</Typography>
                </Box>
                <Box className="!flex !items-center">
                    <InputBase
                        placeholder='Search'
                        className='!bg-[--search-bg-color] !py-1 !shadow-[--search-shadow] !shadow-lg !rounded-xl !pl-3 !text-stone-100 !w-44'
                        endAdornment={
                            <InputAdornment position="start">
                                <SearchIcon className='!text-lg' />
                            </InputAdornment>
                        }
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
