import React from 'react'
import { Dimensions } from 'react-native'
import { Center, Text } from 'native-base'
import EveryWhere from '~/components/icons/EveryWhere'
import EveryTime from '~/components/icons/EveryTime'
import Schedule from '~/components/icons/Schedule'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import Button from '~/components/core-ui/button'

export function GroupButton({ onStart }: any) {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const isCarousel = React.useRef<any>()

  const SLIDER_WIDTH = Dimensions.get('window').width * 0.8
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH)
  const entries = [
    {
      Image: <EveryWhere />,
      text: 'Everywhere',
      subText: 'You want to go anywhere, taxiloyal will help you do it',
    },
    {
      Image: <EveryTime />,
      text: 'Anytime',
      subText: 'We will help you to get where you want at any time',
    },
    {
      Image: <Schedule />,
      text: 'Schedule Pickup',
      subText: 'You can choose the time to book the most suitable trip',
    },
  ]

  const next = () => {
    if (activeSlide < 2) {
      if (isCarousel.current) {
        isCarousel.current.snapToItem(activeSlide + 1)
      }

      setActiveSlide(activeSlide + 1)
    } else {
      onStart()
    }
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'white', width: 'auto' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#0A5BC8',
        }}
        tappableDots={false}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }
  const _renderItem = ({ item, index }: any) => {
    return (
      <>
        {item.Image}
        <Text
          my={3}
          width="100%"
          fontWeight="500"
          textAlign="center"
          fontSize={22}
        >
          {item.text}
        </Text>
        <Text my={3} width="100%" textAlign="center" fontSize={16}>
          {item.subText}
        </Text>
      </>
    )
  }
  return (
    <>
      <Carousel
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        layout="default"
        layoutCardOffset={9}
        inactiveSlideShift={0}
        useScrollView={false}
        containerCustomStyle={{
          padding: 0,
        }}
        contentContainerCustomStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ref={(c) => {
          isCarousel.current = c
        }}
      />
      {pagination()}

      <Button mt={8} width="80%" onPress={next}>
        {activeSlide !== 2 ? 'Next' : "Let's start"}
      </Button>
      <Text my={3} textAlign="center" color="primary.100" marginBottom={50}>
        {activeSlide !== 2 ? 'Skip' : '   '}
      </Text>
    </>
  )
}

export default ({ onStart }: any) => {
  return (
    <Center flex={1} bgColor={'white'}>
      <GroupButton onStart={onStart} />
    </Center>
  )
}
