import React from 'react'
import { Box,styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';



const Change = styled(Box)`
background: #1d1e22;
display : flex;
padding: 9px;
`;

const Header = styled(Box)`
display : flex;
background : #060606;
color: #AAAEBC;
justify-content : space-between;
font-weight : 700;
`
const Editor = ({heading,icon,color}) => {
  return (
    <Box>
   <Header>
<Change>

    <Box component = "span"
      style={{
        background : color,
        height:20,
        width:20,
        display:'flex',
        placeContent: 'center',
        borderRadius:5,
        marginRight:5,
        paddingBottom:2,
        color : '#000'


      }}>
      {icon}
    </Box>
    {heading}
</Change>
<CloseFullscreenIcon/>
   </Header>

   <CodeMirror
   className='controlled-editor'
   options={{
     theme: 'material',
     lineNumbers: true
   }}
   />
    </Box>
  )
}

export default Editor