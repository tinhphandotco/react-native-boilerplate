//@ts-nocheck
import React from 'react'
import { Dimensions } from 'react-native'
import { Stack, Center, Link, Text, HStack } from 'native-base'
import EveryWhere from '~/components/icons/EveryWhere'
import EveryTime from '~/components/icons/EveryTime'
import Schedule from '~/components/icons/Schedule'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import Button from '~/components/core-ui/button'

export function GroupButton() {
  const [activeSlide, setActiveSlide] = React.useState(0)
  let isCarousel = React.useRef(null)

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
			isCarousel.snapToItem(activeSlide + 1)
      setActiveSlide(activeSlide + 1)
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
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={false}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        ref={isCarousel}
        useScrollView={true}
      />
    )
  }
  const _renderItem = ({ item, index }) => {
    return (
      <>
        {item.Image}
        <Text
          my={3}
          width="100%"
          fontWeight="500"
          textAlign="center"
          fontSize="22px"
        >
          {item.text}
        </Text>
        <Text my={3} width="100%" textAlign="center" fontSize="16px">
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
        // ref={isCarousel}
        inactiveSlideShift={0}
        useScrollView={false}
        containerCustomStyle={{
          padding: 0,
        }}
        contentContainerCustomStyle={{
          alignItems: 'center',
          justifyContent: 'center',
				}}
				ref={(c) => { isCarousel = c;}}

        scrollTo={2}
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

export default () => {
  return (
    <Center flex={1}>
      <GroupButton />
    </Center>
  )
}
