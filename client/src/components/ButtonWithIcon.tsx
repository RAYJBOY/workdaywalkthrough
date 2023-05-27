import React from 'react'

// Custom button with icon
<<<<<<< HEAD
export const ButtonWithIcon: React.FC = () => {
=======
interface ButtonWithIconProps {
  onClick?: () => void;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ onClick }) => {
>>>>>>> 0a2416c8c5559dda81942c39a3ec0836c31a2d06
    return(
        <button onClick={onClick}>
            <div>
                Testing new component
            </div>
        </button>
    )
}