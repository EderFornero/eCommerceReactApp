import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: 'inline' }}>
      <Button style={{ color: 'black', color: '#464646', fontFamily: 'Arial, Helvetica, sans-serif' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/'>
          <MenuItem onClick={handleClose}>All Products</MenuItem>
        </Link>
        <Link to='/category/Watch'>
          <MenuItem onClick={handleClose}>Watches</MenuItem>
        </Link>
        <Link to='/category/Fragance'>
          <MenuItem onClick={handleClose}>Fragances</MenuItem>
        </Link>
        <Link to='/category/Handbag'>
          <MenuItem onClick={handleClose}>Handbags</MenuItem>
        </Link>


      </Menu>
    </div>
  );
}