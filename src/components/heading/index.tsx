import React from 'react'
import { Icon, IconButton, Heading, HStack } from 'native-base'

import { AntDesign } from '@expo/vector-icons'

function Example({ children, goBack = false }: any) {
  return (
    <HStack p={5} pt={'82px'} bgColor={'white'} position={'relative'}>
      {goBack !== false && (
        <IconButton
          variant="solid"
          onPress={goBack}
          bg="primary.50"
          width={'32px'}
          height="32px"
          borderRadius="5px"
          justifyContent="center"
          alignContent="center"
          position="absolute"
          left={5}
          top={'82px'}
          icon={
            <Icon
              size="xs"
              as={<AntDesign name="left" />}
              color="primary.100"
            />
          }
          zIndex={1}
        />
      )}

      <Heading
        size="lg"
        color="primary.100"
        fontSize={28}
        fontWeight={500}
        width="100%"
        textAlign="center"
      >
        {children}
      </Heading>
    </HStack>
  )
}

export default Example
