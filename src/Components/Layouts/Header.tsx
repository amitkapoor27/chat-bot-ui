import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { FC } from 'react';

interface HeaderProps {
    username: string;
  }
  
  const Header: FC<HeaderProps> = ({ username }) => {
    return (
      <AppBar position="fixed" sx={{ backgroundColor: '#fff' ,color:'black' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', align-items: 'centre' }}>
            <img src="/path/to/your/logo.png" alt="Company Logo" width="50" height="50" />
            <Typography variant="h6" component="h1" sx={{ ml: 1 }}>
              EXL Service
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="subtitle1" color="inherit">
            Welcome, {username}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;
  
