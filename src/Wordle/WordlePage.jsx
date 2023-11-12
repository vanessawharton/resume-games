import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './WordlePage.css';


function WordlePage() {
    return (
        <div>
            This is the wordle page
            <Box
                sx={{
                    margin: 'auto',
                    padding: 1,
                    width: 1000,
                    elevation: 8,
                    backgroundColor: '#faf3e8',
                    boxShadow: 12,
                }}>
                <center>
                </center>
            </Box>
        </div>
    );
}

export default WordlePage;