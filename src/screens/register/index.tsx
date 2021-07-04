import React from 'react'
import { Stack, Center } from 'native-base'

import Button from '~/components/core-ui/button'
import Input from '~/components/core-ui/input'

import ConfirmCheckBox from '~/components/confirm-checkbox'
import Heading from '~/components/heading'

function Register({ navigation }: any) {
  const [direction, setDirection] = React.useState('column')

  const onGoBack = () => {
    navigation.navigate('Login')
  }

  return (
    <>
      <Heading goBack={onGoBack}>Register</Heading>
      <Center flex={1} p={5} bgColor={'white'}>
        <Stack width="100%">
          <Input
            label="Email"
            icon=""
            placeholder="Email"
            errorText="Something went wrong"
            mb={4}
          />
          <Input
            label="Phone"
            icon=""
            placeholder="Phone"
            errorText="Something went wrong"
            mb={4}
          />
          <Input
            label="Password"
            icon=""
            placeholder="Password"
            errorText="Something went wrong"
            mb={4}
            type="password"
          />
          <Input
            label="Referal code"
            icon=""
            placeholder="Referal code"
            errorText="Something went wrong"
            mb={4}
          />
          <ConfirmCheckBox
            label="I agree to Taxi app term of service and privacy policy"
            mb={4}
          />
          <Button
            mt={8}
            onPress={() => setDirection(direction === 'row' ? 'column' : 'row')}
          >
            Submit
          </Button>
        </Stack>
      </Center>
    </>
  )
}

export default Register
