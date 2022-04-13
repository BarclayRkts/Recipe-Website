import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import "../styles/Modal.css"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({handleClose, open, recipe}) {
 
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} variant="h8" component="h2">
          {recipe.recipeName}
          <h5>{recipe.displayName}</h5>
          <DialogContent dividers></DialogContent>
          <img
          className="recipeImg"
          src={`${recipe.picURL}`}
          width="300" 
          height="300"
          />
        </BootstrapDialogTitle>

        <DialogContent dividers>

        <label>Ingredients
          <Typography gutterBottom sx={{ mb: 4 }}>
            {recipe.ingredients}
          </Typography>
        </label>

        <label>Instructions
          <Typography gutterBottom sx={{ mb: 4 }}>
            {recipe.description}
          </Typography>
        </label>

        </DialogContent>

      </BootstrapDialog>
    </div>
  );
}
