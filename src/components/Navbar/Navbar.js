import React from 'react'
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import './Navbar.css'


function Navbar() {
    return (
        <div>
            <div className="navWrapper">
                <div className="navItemWrapper">
                    <div>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" width="80px" height="80px"/>
                    </div>
                    <Input  
                        variant="outlined"
                        placeholder="Search"
                        backgroundColor='white'
                        color='black'
                        width='600px'
                        ml='8' />
                </div>
                <Button  color='black' ml={2}>
                    Cart
                </Button>
                <Button  color='black' ml={2}>
                    More
                </Button>
                <Button  color='black' ml={2}>
                    Sign in/Sign out
                </Button>
            </div>
        </div>
    )
}

export default Navbar
