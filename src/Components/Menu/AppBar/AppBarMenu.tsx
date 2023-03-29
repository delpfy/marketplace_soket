import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../LogotypeArea/Logo';
import Basket from '../BasketArea/Basket';

export default function AppBarMenu() {
  return (
    <Box 
    sx={{ flexGrow: 1 }}
    
    >
      <AppBar 
      position="static"
      
      >
        <Toolbar
        sx = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}

        >
            <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems = {'center'}
            >
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Logo/>
          </Box>
            </Box>
          
          <Box>
            <Basket/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}