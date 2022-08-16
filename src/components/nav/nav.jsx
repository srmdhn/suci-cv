import {useState} from 'react'
import * as React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon,
  ListItemText,
  Collapse
} from "@mui/material";
import { Box } from "@mui/material";

const array = [
  <ul>
        <li><Link to='/'> <AiOutlineHome className='rams'/> Home</Link></li>
        <li><Link to='/about'> <AiOutlineUser className='rams'/> About</Link></li>
        <li><Link to='/experience'> <BiBook className='rams'/> Experience</Link></li>
        <li><Link to='/portfolio'> <RiServiceLine className='rams'/> Portfolio</Link></li>
        <li><Link to='/contact'> <BiMessageSquareDetail className='rams'/> Contact</Link></li>
  </ul>
];
const Nav = () => {
  const [open, setOpen] = useState (false)
   ; return (
    <Box>
      <List>
      <ListItem divider>
              <ListItemButton onClick={() => setOpen (true)}>
                <ListItemIcon>{ ">"}</ListItemIcon>
                <ListItemText primary={"Click Here"} />
              </ListItemButton>
            </ListItem>
      </List>
      <Collapse in={open}>

      <List sx={{ marginLeft: 0}}>
        {array.map((listElm) => (
          <ListItem divider>
            <ListItemButton onClick={() => setOpen (true)}>
              <ListItemText primary={listElm} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>

      </Box>
  )
}
  
export default Nav