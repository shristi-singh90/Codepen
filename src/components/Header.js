import React from 'react'
/*import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';*/
import {AppBar,Toolbar,styled} from '@mui/material'


const Container = styled(AppBar)`
background : #060606;
height: 9vh;

`

const Header = () => {
  return (
    <>
  
    <Container position='static'>
        <Toolbar>
            Hello
        </Toolbar>
    </Container>
    </>
  )
}

export default Header