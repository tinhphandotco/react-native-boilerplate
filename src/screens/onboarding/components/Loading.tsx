//@ts-nocheck
import React from 'react'
import Logo from '~/components/icons/Logo'
import { Stack, Center, Image, Container } from 'native-base'

import Button from '~/components/core-ui/button'

export function Example() {
  const [direction, setDirection] = React.useState('column')
  return (
    <Logo/>
  )
}

export default () => {
  return (
    <Center 
      flex={1}
      bg="#0A5BC8"
    >
      <Example />
    </Center>
  )
}
