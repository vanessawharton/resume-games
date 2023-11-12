import React, { useState } from 'react';
import './WordlePage.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


function WordlePage() {
    return (
        <div className="word-board">
            <div>
                <center>
                    WORDLE
                </center>
            </div>
            <Box sx={{ margin: "auto", width: 300, height: 500, display:"flex", alignItems:"center" }}>
            <Grid container spacing={0.5} columns={11}>
                <Grid xs={2}>
                    <Item>1</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>2</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>3</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>4</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>5</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>6</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>7</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>8</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>9</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>10</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>11</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>12</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>13</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>14</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>15</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>16</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>17</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>18</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>19</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>20</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>21</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>22</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>23</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>24</Item>
                </Grid>
                <Grid xs={2}>
                    <Item>25</Item>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}

export default WordlePage;