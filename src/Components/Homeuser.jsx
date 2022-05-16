import React from 'react'
import Navbar from './Navbar'
import {Grid,Button} from '@mui/material';
import Hero from './Hero/index'
import Footer from './Footer/Footer'
import Items from './videos/index';
import Item from './videos/vidcard';
import './task.css'

function Homeuser(props) {
  return (
    <div>
              
    <Navbar user={props.user} />
    <Hero />
    <h1 style={{fontSize:'4vw',padding:'3%'}}>Videos</h1>
    <Item />
  
    <h1 style={{fontSize:'4vw'}}>Digital magazines</h1>
    <Items />
    <hr />
    <Grid container style={{justifyContent: "center", padding:"5%"}}>
      <Grid item sm={4}>
    <Button fullWidth variant='contained'>
      Discover Screenplays
    </Button>
    </Grid>
    </Grid>

    <hr />
  
 
 <Footer />
    </div>
  )
}

export default Homeuser