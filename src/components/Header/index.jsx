import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import { Link, NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import Register from 'features/Auth/Component/Register';

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
}));

export default function Header() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <Button color="inherit" onClick={handleClickOpen}>
                        Register
                    </Button>
                </Toolbar>
            </AppBar>

            <Dialog
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
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
