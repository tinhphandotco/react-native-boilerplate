import React from 'react'

import { SvgCss } from 'react-native-svg'

const xml = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="black" fill-opacity="0.05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.981 13.3981C26.5088 11.3848 28.6324 11.375 28.6324 11.375C28.6324 11.375 28.9482 13.268 27.4305 15.0916C25.8102 17.0386 23.9682 16.7202 23.9682 16.7202C23.9682 16.7202 23.6224 15.1887 24.981 13.3981Z" fill="#111111"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1627 18.0462C24.9487 18.0462 26.4071 16.9658 28.3057 16.9658C31.5738 16.9658 32.8593 19.2912 32.8593 19.2912C32.8593 19.2912 30.3449 20.5767 30.3449 23.6963C30.3449 27.2153 33.4773 28.4281 33.4773 28.4281C33.4773 28.4281 31.2877 34.5912 28.3301 34.5912C26.9718 34.5912 25.9154 33.6758 24.4844 33.6758C23.0261 33.6758 21.5786 34.6253 20.6358 34.6253C17.9351 34.6253 14.5233 28.7791 14.5233 24.0799C14.5233 19.4566 17.4112 17.0311 20.1202 17.0311C21.8804 17.0307 23.2469 18.0462 24.1627 18.0462Z" fill="#111111"/>
</svg>

`

export default () => {
  return <SvgCss xml={xml} width="46" height="46" />
}
