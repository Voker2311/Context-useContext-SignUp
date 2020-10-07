import React,{ useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode ? "white" : "#4791db",
        height:"100vh",
        width:"100vw"
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default PageContent;
