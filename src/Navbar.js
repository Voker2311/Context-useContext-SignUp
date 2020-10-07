import React, { useContext } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/navbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from './contexts/LanguageContext';

const language = {
    English:{
        search:"Search.."
    },
    Marathi:{
        search:"शोधा.."
    },
    Hindi:{
        search:"खोज.."
    }
}

function Navbar(props) {
    const { isDarkMode, changeMode } = useContext(ThemeContext);
    const { initialLanguage } = useContext(LanguageContext);
    const { search } = language[initialLanguage];
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color={ isDarkMode ? "primary" : "default"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span>🇮🇳</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={changeMode}/>
                    <div className={classes.grow} />
                    <div className={isDarkMode ? classes.search : classes.search1}>
                        <div className={classes.searchIcon}>
                                <SearchIcon />
                        </div>
                        <InputBase placeholder={search} classes={{
                            root: classes.inputRoot,
                            input:classes.inputInput
                        }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar);
