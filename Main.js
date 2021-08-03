import React from 'react';

import {Input,Text,Box, VStack} from '@chakra-ui/react';

const Main = ({onChange,detail}) => (
    <Box w='100%' p='20px'>
        <Box pb='30px'>
            <Text as='label'>Search:</Text>
            <Input 
                size='sm'
                placeholder=''
                borderColor='black'
                color='black'
                _placeholder={{color:'gray.700'}}
                letterSpacing='1.2px'
                onChange={onChange}
            />
        </Box>
        <VStack  overflowY='auto'>
            {detail}
        </VStack>
    </Box>
)

export default Main;