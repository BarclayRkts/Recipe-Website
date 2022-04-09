import React, { useState , useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

export default function RecipeCard(props) {

  {console.log(props)}

  return (
      <Card sx={{ maxWidth: 300 }}>
      
      <CardMedia
        component="img"
        height="140"
        image={`${props.recipe.picURL}`}
        alt="green iguana"
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
        <Button size="small">View More</Button>
      </CardActions>
      </Card>
  )
}
