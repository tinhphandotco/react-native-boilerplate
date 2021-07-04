import React from 'react'

// import Loading from './components/Loading'
import Boarding from './components/Onboarding'

const Onboarding = ({ navigation }: any) => {
  const onStart = () => {
    navigation.navigate('Login')
  }

  return <Boarding onStart={onStart} />
}

export default Onboarding
