import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';


function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth={false} sx={{"padding": 0 }}>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Todo App
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

  
        <Container sx={{ padding:0, height: "calc(100vh - 120px)"}}>
          <Outlet/>
        </Container>
        

        <Box sx={{ flexGrow: 1, position: "sticky", bottom:0 }}>
          <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                console.log(newValue)
                console.log(event)
                setValue(newValue);
              }}
          >
            <BottomNavigationAction component={Link} to="/" value={value} label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction component={Link} to="/todo" label="Todos" icon={<ListIcon />} />
          </BottomNavigation>
        </Box>
    </Container>
  
  );
}

export default App;
