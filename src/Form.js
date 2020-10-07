import React, { useContext } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

const words = {
    English:{
        signIn: "Sign In",
        email : "Email",
        password : "Password",
        remember: "Remember Me"
    },
    Marathi:{
        signIn:"साइन इन करा",
        email: "ईमेल",
        password: "संकेतशब्द",
        remember: "माझी आठवण ठेवा"
    },
    Hindi:{
        signIn: "साइन इन करें",
        email : "ईमेल",
        password: "पासवर्ड",
        remember: "मुझे याद रखना"
    }
};

function Form(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const { initialLanguage, changeLanguage } = useContext(LanguageContext);
    const { classes} = props;
    const { signIn , email, password, remember } = words[initialLanguage];
    return (
       <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signIn}</Typography>
                <Select className={classes.select} onChange={changeLanguage} value={initialLanguage}>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Marathi">Marathi</MenuItem>
                    <MenuItem value="Hindi">Hindi</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input name="email" id="email" autoFocus spellCheck="false"></Input>
                    </FormControl>
                    <FormControl margin="password" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input  type="password" name="password" id="password" autoFocus></Input>
                    </FormControl>
                    <FormControlLabel className={classes.remember}variant="h5" label={remember} control={<Checkbox color="primary" />}/>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={ isDarkMode ? classes.submit : classes.submit1}>{signIn}</Button>
                </form>
            </Paper>
       </main>
    )
}


export default withStyles(styles)(Form);
