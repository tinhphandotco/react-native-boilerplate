import React from 'react'

import { SvgCss } from 'react-native-svg'

const xml = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#FFEBEB"/>
<path d="M33.8902 22.1813H24.2032V26.2725H29.6937C28.8158 29 26.6478 29.9088 24.1588 29.9088C21.5079 29.9121 19.1694 28.2 18.4075 25.6982C17.6457 23.1963 18.6414 20.4985 20.8562 19.0633C23.071 17.6281 25.9794 17.796 28.009 19.4763L31.0257 16.6451C27.6843 13.6122 22.7044 13.1369 18.8343 15.4813C14.9642 17.8258 13.1468 22.4189 14.3852 26.7258C15.6235 31.0327 19.6158 34.004 24.1588 34C29.7545 34 34.815 30.3638 33.8902 22.1813Z" fill="#DD5246"/>
</svg>

`

export default () => {
  return <SvgCss xml={xml} width="46" height="46" />
}