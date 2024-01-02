import { Box, Flex, Image, Text, Avatar, Link } from '@chakra-ui/react';
import { Property as PropertyType } from '../models/Property';

interface Props {
    property: PropertyType;
}

const Property = (props: Props) => {
    return (
    <p>price: ${props.property.price.toString()}</p>
    
    );

}

export default Property;