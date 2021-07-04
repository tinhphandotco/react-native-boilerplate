import React from 'react'
import { FormControl, Input, Stack } from 'native-base'
export const Example = ({
  label = 'Phone',
  placeholder = 'Enter your phone',
  errorText = 'Something went wrong',
  helperText = null,
  isRequired = false,
  isInvalid = false,
  ...props
}: any) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <Stack>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          placeholder={placeholder}
          height="48px"
          _focus={{
            borderColor: 'primary.100',
          }}
          {...props}
        />
        {helperText && (
          <FormControl.HelperText>{helperText}</FormControl.HelperText>
        )}
        <FormControl.ErrorMessage>{errorText}</FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default Example
