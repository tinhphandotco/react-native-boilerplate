import React from 'react'

import { SvgCss } from 'react-native-svg'

const xml = `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#2F6BFF" fill-opacity="0.05"/>
    <g clip-path="url(#clip0)">
    <path d="M36.001 24.074C36.001 17.405 30.628 11.999 24.001 11.999C17.371 12.0005 11.998 17.405 11.998 24.0755C11.998 30.101 16.387 35.096 22.123 36.002V27.5645H19.078V24.0755H22.126V21.413C22.126 18.3875 23.9185 16.7165 26.659 16.7165C27.973 16.7165 29.3455 16.952 29.3455 16.952V19.922H27.832C26.3425 19.922 25.8775 20.8535 25.8775 21.809V24.074H29.2045L28.6735 27.563H25.876V36.0005C31.612 35.0945 36.001 30.0995 36.001 24.074Z" fill="#244495"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="24" height="24" fill="white" transform="translate(12 12)"/>
    </clipPath>
    </defs>
    </svg>
`

export default () => {
  return <SvgCss xml={xml} width="46" height="46" />
}
