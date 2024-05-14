import React ,{ useState } from "react";
import { AppBar, Toolbar, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../state/index';
import { styled } from '@mui/system';
//import { Link as RouterLink } from 'react-router-dom';
import ForgotPass from './ForgotPass';
import MyProfile from './MyProfile';
import logo from './hbl2.png';

const CustomerHome = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Get user from Redux store
  const [openSubMenu1, setOpenSubMenu1] = React.useState(false);
  const [openSubMenu2, setOpenSubMenu2] = React.useState(false);
  const [openSubMenu3, setOpenSubMenu3] = React.useState(false);
  const [openSubMenu4, setOpenSubMenu4] = React.useState(false);

  const CustomAppBar = styled(AppBar)({
    backgroundColor: '#009688', // Change background color to green
  });

  const handleSubMenu1Click = () => {
    setOpenSubMenu1(!openSubMenu1);
  };

  const handleSubMenu2Click = () => {
    setOpenSubMenu2(!openSubMenu2);
  };

  const handleSubMenu3Click = () => {
    setOpenSubMenu3(!openSubMenu3);
  };

  const handleSubMenu4Click = () => {
    setOpenSubMenu4(!openSubMenu4);
  };

  const handleLogout = () => {
    // Handle logout logic here
    dispatch(logout());
    //navigate('/'); // Redirect to login page after logout
  };

  return (
    <div>
      <CustomAppBar position="static">
        <Toolbar>
        <img src={logo} alt="Logo" style={{ marginRight: '100px', height: '35px', width: 'auto' }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Customer Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
            Logout
          </Button>
        </Toolbar>
      </CustomAppBar>
      <div style={{ padding: '20px' }}>
        {/* Add admin-specific content here */}
        {selectedOption === 'forgotPass' && <ForgotPass />}
        {selectedOption === 'myProfile' && <MyProfile />}
      </div>
      <div style={{ width: '240px', backgroundColor: '#f0f0f0', borderRight: '1px solid #ccc', position: 'fixed', top: '64px', bottom: '0', overflowY: 'auto' }}>
        <List>
          {/* List items for the sidebar */}
          
          <ListItem button onClick={handleSubMenu3Click}>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText primary="MIS Reports" />
          </ListItem>
          <Collapse in={openSubMenu3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Report 1" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Report 2" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Report 3" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleSubMenu4Click}>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText primary="Profile Management" />
          </ListItem>
          <Collapse in={openSubMenu4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleOptionClick('forgotPass')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Change Password" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('myProfile')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
};

export default CustomerHome;
