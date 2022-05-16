import { TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ResponsiveDrawer from './Sidebar';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar'

function Magazines() {
  return (
    <div>
        <Navbar/>
        <ResponsiveDrawer>
            <Typography variant="h3" component="div" gutterBottom>
                Add Magazines
            </Typography>
            <Toolbar/>
            <TextField id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
        </ResponsiveDrawer>
        <Footer/>
    </div>
  )
}

export default Magazines