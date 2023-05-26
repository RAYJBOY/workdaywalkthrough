import React from 'react'

// Custom button with icon
interface ButtonWithIconProps {
  onClick?: () => void;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ onClick }) => {
    return(
        <button onClick={onClick}>
            <div>
                Testing new component
            </div>
        </button>
    )
}