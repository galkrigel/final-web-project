import { Box, Flex, Image, Text, Avatar, Link } from '@chakra-ui/react';
import { PropertyType } from '../models/Property';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
    property: PropertyType;
}

const Property = (props: Props) => {
    // return (
    //     <div>
    //         <p>id: {props.property.objectID}</p>
    //         <p>price: {props.property.price.toString()}</p>
    //         <p>contact name: {props.property.contactName}</p>
    //         <p>rooms: {props.property.rooms.toString()}</p>
    //         <p>rooms: {props.property.coverPhoto.url}</p>

    //         <p>------------------------</p>
    //     </div>
    // );

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.property.coverPhoto.url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {props.property.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {props.property.price.toString()}$
                <p> </p>
               Contact Name: {props.property.contactName}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      );

}

export default Property;