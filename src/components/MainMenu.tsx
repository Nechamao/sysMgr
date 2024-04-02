import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconMenu from '@mui/icons-material/Menu'
import BasicPopover from './BasicPopover';
import SimplePopper from './SimplePopper';

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [openPopEl, setOpenPopEl] = React.useState(null);
  const openPop = Boolean(openPopEl);
  const handlePopoeverClick = () => {
    setOpenPopEl(!openPop);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconMenu />
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
        <MenuItem onClick={handlePopoeverClick}>Popper</MenuItem>
        <MenuItem onClick={handleClose}>Popover</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

       {openPop ? <SimplePopper  /> : '' } 
    </div>
  );
}