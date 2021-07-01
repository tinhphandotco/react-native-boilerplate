import React from 'react'
import { Button } from 'native-base'

function CustomButton({ type, ...props }: any) {
  return (
    <Button
      {...props}
      colorScheme="primary"
      // bg='primary.100'
    >
      Change Stack Direction
    </Button>
  )
}

export default CustomButton
