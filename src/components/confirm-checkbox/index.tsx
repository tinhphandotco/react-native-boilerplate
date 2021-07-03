import React from 'react'
import { Checkbox, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const ConfirmCheckBox = ({ label, ...props }: any) => {
  return (
    <Checkbox
      value="one"
      _text={{
        color: 'black.100',
      }}
      colorScheme="blue"
      icon={<Icon as={<AntDesign name="check" color="black" />} />}
      {...props}
    >
      {label}
    </Checkbox>
  )
}

export default ConfirmCheckBox
