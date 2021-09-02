import React, { useContext } from 'react';
import { ThemeContext } from './App';

export default function FunctionContextComponent() {

    const { data } = useContext(ThemeContext);
    const { darkTheme } = useContext(ThemeContext);
     // const { darkTheme, data } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <div style={themeStyles}>Function Theme</div>
            <div>{`Id: ${data.id}`}</div>
            <div>{`Name: ${data.name}`}</div>
            <div>{`Dept: ${data.dept}`}</div>
            <div>{`University: ${data.university}`}</div>
        </>
    )

}