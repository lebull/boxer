import React, { useContext } from 'react';

import { AuthContext } from '../contexts/Auth';
import app from '../base';

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function BoxerAppBar() {

    const classes = useStyles();
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        app.auth().signOut();
    }

    const { currentUser } = useContext(AuthContext);

    const accountChunk = (currentUser) => {
        if (currentUser) {
            return (
                <div>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
                </div>
            );
        } else {
            return (
                <div>
                    <MenuItem onClick={handleClose}>
                        <Link to="/signup">Sign Up</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/login">Login</Link>
                    </MenuItem>
                </div>
            )
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Boxer
                </Typography>
                {auth && (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            {accountChunk(currentUser)}
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}