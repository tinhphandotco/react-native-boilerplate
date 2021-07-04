import React from 'react'
import { Stack, Center, Link, Text, HStack } from 'native-base'

import Button from '~/components/core-ui/button'
import Input from '~/components/core-ui/input'
import Heading from '~/components/heading'

import FacebookIcon from '~/components/icons/Facebook'
import GoogleIcon from '~/components/icons/Google'
import AppleIcon from '~/components/icons/Apple'

function Login({ navigation }: any) {
  const goToRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <>
      <Heading>Login</Heading>
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
            label="Password"
            icon=""
            placeholder="Password"
            errorText="Something went wrong"
            mb={4}
            type="password"
          />

          <Link
            _text={{
              color: 'blue.700',
            }}
            isExternal
            mb={4}
          >
            Forgot password?
          </Link>

          <Button mt={8}>Login</Button>

          <Text my={3} textAlign="center">
            Don’t have acount?{' '}
            <Text
              my={3}
              textAlign="center"
              color="primary.100"
              onPress={goToRegister}
            >
              Register now
            </Text>
          </Text>

          <Text my={16} textAlign="center">
            Or Login with
          </Text>

          <HStack space={3} alignItems="center" justifyContent="center" mb={44}>
            <FacebookIcon />
            <GoogleIcon />
            <AppleIcon />
          </HStack>
        </Stack>
      </Center>
    </>
  )
}

export default Login
