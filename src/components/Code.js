import React from 'react'
import Editor from './Editor'
import {Box,styled} from '@mui/material';

const Container  = styled(Box)`
display : flex,
`

const Code = () => {
  return (
   <Container>
  <Editor
  heading= "HTML"
  icon ="/"
  color = "red"
  />
  <Editor
   heading= "CSS"
   icon ="*"
   color = "#0EBEFF"
  />
  <Editor
   heading= "Javascript"
   icon ="{}"
   color = "yellow"
  />
   </Container>
  )
}

export default Code