import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import {request} from "../ustils/api/request";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    openPosts: {
        backgroundColor: "black",
        padding: 10,
        color: "white",
        textDecoration: "none"
    }
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#616161'
        }
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink className={classes.openPosts} to="/posts">OPEN POSTS</NavLink>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}
export default Header;