import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Modal from "./Modal";

const RecipeCard = (props) => {

  // const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleClick = () => {
  //   setModalOpen(true);
  // }

  return (
      <Card sx={{ maxWidth: 300 }}>
      
      <CardMedia
        component="img"
        height="140"
        image={`${props.recipe.picURL}`}
        alt={`${props.recipe.recipeName}`}
      />
      <CardHeader
        avatar={
          <Avatar/>
        }
        title={`${props.recipe.displayName}`}
        subheader={`${props.recipe.email}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.recipe.recipeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.recipe.notes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="openModalBtn" onClick={handleOpen} size="small">View More</Button>
      </CardActions>
      {open && <Modal recipe={props.recipe} open={handleOpen} handleClose={handleClose} />}
      </Card>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default RecipeCard;
