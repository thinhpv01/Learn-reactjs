import { Box, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import CodeIcon from '@material-ui/icons/Code';
import Login from 'features/Auth/Component/Login';
import Register from 'features/Auth/Component/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

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
    link: {
        textDecoration: 'none',
        color: '#fff',
        transition: '.5s',
        '&.active': {
            color: '#3ce058',
        },
    },
    dialog: {
        position: 'relative',
    },
    buttonClose: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        cursor: 'pointer',
        fontSize: '2rem',
        color: theme.palette.grey[500],
    },
}));

export default function Header() {
    const classes = useStyles();
    const loggedInUser = useSelector((state) => state.user.current);
    const loggedIn = !!loggedInUser.id;

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('login');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch();
    const handleLogoutClick = () => {
        dispatch(logout());
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon />
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} style={{ marginLeft: '1rem' }} to="/">
                            EZ Shop
                        </Link>
                    </Typography>
                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink to="/album" className={classes.link}>
                        <Button color="inherit">Album</Button>
                    </NavLink>
                    {!loggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}
                    {loggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircleIcon />
                        </IconButton>
                    )}
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        getContentAnchorEl={null}
                    >
                        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Dialog
                className={classes.dialog}
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        onclose(event, reason);
                    }
                }}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    {mode == 'login' && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode('register')}>
                                    Don't have an Account? Register here.
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode == 'register' && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode('login')}>
                                    already have an Account? Login here.
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <CloseIcon className={classes.buttonClose} onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </div>
    );
}
