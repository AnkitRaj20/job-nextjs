"use client"
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useEffect } from "react";
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  ListItemButton,
  List,
  ListItemText,
} from "@mui/material";

import DarkMode from "@/components/DarkMode"

import { Stack } from "@mui/system";
import {
  IconChevronDown,
  IconCreditCard,
  IconCurrencyDollar,
  IconLogout,
  IconMail,
  IconShield,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import { NextRequest } from 'next/server';
import avatar from "../../../../../../public/images/avatar/avatar5.png"

const Profile = (request: NextRequest) => {
  const router = useRouter();
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const logout = () => {
    router.push(`/user/logout`);
  };

  let userName="";
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    userName = localStorage.getItem("name") ?? "";
  }

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const success = theme.palette.success.main;
  const successlight = theme.palette.success.light;

  /*profile data*/
  const profiledata = [
    {
      href: "/",
      title: "My Profile",
      subtitle: "Account Settings",
      icon: <IconCurrencyDollar width="20" height="20" />,
      color: primary,
      lightcolor: primarylight,
    },
    {
      href: "/",
      title: "My Inbox",
      subtitle: "Messages & Emails",
      icon: <IconShield width="20" height="20" />,
      color: success,
      lightcolor: successlight,
    },
    {
      href: "/",
      title: "My Tasks",
      subtitle: "To-do and Daily Tasks",
      icon: <IconCreditCard width="20" height="20" />,
      color: error,
      lightcolor: errorlight,
    },
  ];

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="menu"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            borderRadius: "9px",
          }),
        }}
        onClick={handleClick2}
      >
       
        <Avatar
          src={avatar.src}
          alt={"ProfileImg"}
          sx={{
            width: 30,
            height: 30,
          }}
        />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
          }}
        >
          <Typography
            color="textSecondary"
            variant="h5"
            fontWeight="400"
            sx={{ ml: 1 }}
          >
            Hi,
          </Typography>
          <Typography
            variant="h5"
            fontWeight="700"
            sx={{
              ml: 1,
            }}
          >
            
            {userName}
          </Typography>
          <IconChevronDown width="20" height="20" />
        </Box>
      </IconButton>
      
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "360px",
            p: 2,
            pb: 2,
            pt: 0,
          },
        }}
      >
        <Box pt={0}>
          <List>
            <ListItemButton component="a" href="/user/profile">
              <ListItemText primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton component="a" href="/user/jobs">
              <ListItemText primary="jobs" />
            </ListItemButton>
          </List>
        </Box>
              
          
        <Divider />
        <Box mt={2}>
          
          <Button fullWidth variant="outlined" color="error" onClick={logout}>
            Logout
          </Button>
          <DarkMode />
        </Box>
      </Menu>
    </Box>
    
  );
};

export default Profile;
