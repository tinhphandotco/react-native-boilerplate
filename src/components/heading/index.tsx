import React from 'react'
import { Heading, HStack, ChevronLeftIcon, Box } from 'native-base'

function Example({ children, goBack = false }: any) {
  return (
    <HStack p={5} mt={'82px'}>
      {goBack && (
        <Box
          bg="primary.50"
          width={'32px'}
          height="32px"
          borderRadius="5px"
          justifyContent="center"
          alignContent="center"
          pt={2}
          pl={1}
          position="absolute"
          left={5}
          top={5}
        >
          <ChevronLeftIcon color="primary.100" />
        </Box>
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
