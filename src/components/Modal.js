import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MModal({handleClose, open, recipe}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
{/* 
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            {recipe.displayName}
          </Typography> */}

          <Typography id="modal-modal-title" variant="h8" component="h2" sx={{ mb: 4 }}>
            {recipe.recipeName}
          </Typography>

          <label>Ingredients
          <Typography id="modal-modal-description" sx={{ mb: 4 }}>
            {recipe.ingredients}
          </Typography>
          </label>

          <label>Instructions
          <Typography id="modal-modal-description" >
            {recipe.description}
          </Typography>
          </label>
          <Button id="closeBtn" onClick={handleClose}>X</Button>
        </Box>
      </Modal>
    </div>
  );
}
