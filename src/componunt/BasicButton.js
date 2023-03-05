import React from 'react'
import Button from '@mui/material/Button';

const BasicButton = ({
    label,
    onClick,
     variant,   }) => {
  return (
    <div>
      <Button
      style={{alignItems: 'center', justifyContent: 'center',width:'100%',height:'100%'}}
      variant={variant}
      onClick={onClick}

      >
       {label}
      </Button>

    </div>
  )
}

export default BasicButton;
