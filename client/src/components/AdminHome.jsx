import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch } from 'react-redux';
import { logout } from '../state/index';
import { styled } from '@mui/system';
//import { Link as RouterLink } from 'react-router-dom';
import AddNewAdminForm from './AddNewAdminForm';
import ModifyAdminForm from './ModifyAdminForm';
import DeleteAdminForm from './DeleteAdminForm';
import AddNewOrganizationForm from './AddNewOrgForm';
//import OrganizationList from './GetListOfOrgs';
import ForgotPass from './ForgotPass';
import MyProfile from './MyProfile';

import OrganizationList from './GetListOfOrgs';
//import organizationsData from './organizations.json';
import ModifyOrganizationForm from './ModifyOrgForm';
import AddNewCustomerForm from './AddNewCustomerForm';
import AdminList from './TableDisplayAdmins';


// Import your logo image
import logo from './hbl2.png';

const AdminHome = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const dispatch = useDispatch();
  const [openSubMenu1, setOpenSubMenu1] = React.useState(false);
  const [openSubMenu2, setOpenSubMenu2] = React.useState(false);
  const [openSubMenu3, setOpenSubMenu3] = React.useState(false);
  const [openSubMenu4, setOpenSubMenu4] = React.useState(false);
  const [openSubMenu5, setOpenSubMenu5] = React.useState(false);
  const [openSubMenu6, setOpenSubMenu6] = React.useState(false);
  // const [showAddNewAdminForm, setShowAddNewAdminForm] = useState(false);
  // const [showModifyAdminForm, setShowModifyAdminForm] = useState(false);

  // const handleAddNewAdminClick = () => {
  //   setShowAddNewAdminForm(true);
  // };

  // const handleModifyAdminClick = () => {
  //   setShowModifyAdminForm(true);
  // };
  


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

  const handleSubMenu5Click = () => {
    setOpenSubMenu5(!openSubMenu5);
  };

  const handleSubMenu6Click = () => {
    setOpenSubMenu6(!openSubMenu6);
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
          {/* Include your logo image here */}
          <img src={logo} alt="Logo" style={{ marginRight: '100px', height: '35px', width: 'auto' }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
            Logout
          </Button>
        </Toolbar>
      </CustomAppBar>
      <div style={{ padding: '20px' }}>
        {/* Add admin-specific content here */}
        {/* {showAddNewAdminForm && <AddNewAdminForm />} 
        {showModifyAdminForm && <ModifyAdminForm />} */}
        {selectedOption === 'addNewAdmin' && <AddNewAdminForm />}
        {selectedOption === 'modifyExistingAdmin' && <ModifyAdminForm />}
        {selectedOption === 'deleteAdmin' && <DeleteAdminForm />}
        {selectedOption === 'addOrg' && <AddNewOrganizationForm />}
        {selectedOption === 'getAllOrgs' && <OrganizationList/>}
        {selectedOption === 'forgotPass' && <ForgotPass />}
        {selectedOption === 'myProfile' && <MyProfile />}
        {selectedOption === 'modifyOrg' && <ModifyOrganizationForm />}
        {selectedOption === 'addNewCustomer' && <AddNewCustomerForm />}
        {selectedOption === 'modifyExistingCustomer' && <ModifyAdminForm />}
        {selectedOption === 'adminsTable' && <AdminList />}

        

        

        
        
        

        
        
      </div>
      <div style={{ width: '240px', backgroundColor: '#f0f0f0', borderRight: '1px solid #ccc', position: 'fixed', top: '64px', bottom: '0', overflowY: 'auto' }}>
        <List>
          {/* List items for the sidebar */}
          <ListItem button onClick={handleSubMenu1Click}>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText primary="Admin Management" />
          </ListItem>
          <Collapse in={openSubMenu1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItem button onClick={handleAddNewAdminClick} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Admin" />
              </ListItem> */}
              <ListItem button onClick={() => handleOptionClick('addNewAdmin')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Admin" />
              </ListItem>
              {/* <ListItem button onClick={handleModifyAdminClick} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Modify Existent Admin" />
              </ListItem> */}
              <ListItem button onClick={() => handleOptionClick('modifyExistingAdmin')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Modify Existent Admin" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('deleteAdmin')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Delete Admin" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('adminsTable')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="List of Admins" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleSubMenu2Click}>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItem>
          <Collapse in={openSubMenu2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleOptionClick('addNewCustomer')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Customer" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('modifyExistingCustomer')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Modify Existent Customer" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('deleteAdmin')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Delete Customer" />
              </ListItem>
            </List>
          </Collapse>
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
          <ListItem button onClick={handleSubMenu5Click}>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText primary="Organization Management" />
          </ListItem>
          <Collapse in={openSubMenu5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleOptionClick('getAllOrgs')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="List of Organizations" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('addOrg')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Add Organization" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('modifyOrg')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Modify Organization" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleSubMenu6Click}>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText primary="Report Management" />
          </ListItem>
          <Collapse in={openSubMenu6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleOptionClick('')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="List of Reports" />
              </ListItem>
              <ListItem button onClick={() => handleOptionClick('')} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Assignment of Reports" />
              </ListItem>
              
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
};

export default AdminHome;
