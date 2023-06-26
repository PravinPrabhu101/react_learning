import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Fields = ({name, email, index}) => {
  return (
    
    <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack>
        <Button variant="contained" color="error">
        <DeleteForeverIcon  />
     </Button>
     </Stack>
    </div>
  )
}

export default Fields