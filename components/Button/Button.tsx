import React from 'react';
import styles from '../Button/Button.module.scss';

interface ButtonProps {
    variant : string;
}

 const Button : React.FC<ButtonProps> = ({variant = "plain-button", children}) => {
    return (
        <button className={`${styles[variant]}`}>
            {children}
        </button>
    )
}


export default Button;