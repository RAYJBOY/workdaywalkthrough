import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../styles/button.css'

// Custom button with icon
interface ButtonWithIconProps {
  onClick?: () => void;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ onClick }) => {
    return(
        <button onClick={onClick}>
            <div className='iconButton'>
                <FontAwesomeIcon icon={faUser} size='1x' className='buttonIcon'/>
                <p className='buttonText'> Login </p>
            </div>
        </button>
    )
}