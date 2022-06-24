import React from 'react'
import { Grid} from '@chakra-ui/react'
import ColorModeSwitcher from './colorModeSwitcher';


const layout = ({children}) => {
 
  return (
  <Grid 
    minH='100vh' 
    templateColumns='repeat3, 1fr' 
    templateRows='max-content'
    gap={6}
    p={3}
    >
    <ColorModeSwitcher position='absolute' top={3} right={3}>
      {children}
    </ColorModeSwitcher>
  </Grid>
  )
}

export default layout;