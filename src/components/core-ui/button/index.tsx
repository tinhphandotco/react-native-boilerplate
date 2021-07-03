import React from 'react'
import { Button } from 'native-base'

function CustomButton({ children, ...props }: any) {
  return (
    <Button
      bg="primary.100"
      width={'auto'}
      height="48px"
      borderRadius={'11px'}
      _text={{
        textAlign: 'center',
        fontWeight: 500,
        color: 'white',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default CustomButton
