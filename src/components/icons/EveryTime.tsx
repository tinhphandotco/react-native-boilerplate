import React from 'react'

import { SvgCss } from 'react-native-svg'

const xml = `
<svg width="327" height="199" viewBox="0 0 327 199" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M27.0711 42.9639C36.378 42.9639 43.9227 35.4224 43.9227 26.1196C43.9227 16.8167 36.378 9.27521 27.0711 9.27521C17.7642 9.27521 10.2195 16.8167 10.2195 26.1196C10.2195 35.4224 17.7642 42.9639 27.0711 42.9639Z" fill="#F66268"/>
<path d="M162.656 198.032C252.488 198.032 325.312 195.081 325.312 191.44C325.312 187.8 252.488 184.849 162.656 184.849C72.8236 184.849 0 187.8 0 191.44C0 195.081 72.8236 198.032 162.656 198.032Z" fill="#E5EFFE"/>
<path d="M41.3964 108.836C64.259 108.836 82.7928 90.3104 82.7928 67.4577C82.7928 44.605 64.259 26.0792 41.3964 26.0792C18.5338 26.0792 0 44.605 0 67.4577C0 90.3104 18.5338 108.836 41.3964 108.836Z" fill="#71AAF7"/>
<path d="M45.3866 192.092H36.9077L40.773 61.2259L45.3866 192.092Z" fill="#3F3D56"/>
<path d="M41.521 86.0281L50.6235 73.4402L41.3965 89.1439L40.3989 87.3991L41.521 86.0281Z" fill="#3F3D56"/>
<path d="M40.5235 98.7408L31.4214 86.153L40.6484 101.857L41.6459 100.112L40.5235 98.7408Z" fill="#3F3D56"/>
<path d="M303.148 192.23H294.669L298.535 61.3636L303.148 192.23Z" fill="#3F3D56"/>
<path d="M299.283 86.1658L308.385 73.5779L299.158 89.2816L298.161 87.5368L299.283 86.1658Z" fill="#3F3D56"/>
<path d="M298.285 98.8785L289.183 86.2906L298.41 101.994L299.408 100.249L298.285 98.8785Z" fill="#3F3D56"/>
<path d="M168.17 192.208C210.76 192.208 245.286 157.697 245.286 115.125C245.286 72.5535 210.76 38.0425 168.17 38.0425C125.58 38.0425 91.0544 72.5535 91.0544 115.125C91.0544 157.697 125.58 192.208 168.17 192.208Z" fill="#0A5BC8"/>
<path d="M168.17 185.827C207.235 185.827 238.902 154.172 238.902 115.125C238.902 76.0777 207.235 44.4235 168.17 44.4235C129.106 44.4235 97.4382 76.0777 97.4382 115.125C97.4382 154.172 129.106 185.827 168.17 185.827Z" fill="white"/>
<path d="M167.915 124.824C173.133 124.824 177.363 120.596 177.363 115.38C177.363 110.165 173.133 105.936 167.915 105.936C162.697 105.936 158.467 110.165 158.467 115.38C158.467 120.596 162.697 124.824 167.915 124.824Z" fill="#0A5BC8"/>
<path d="M169.958 47.9968H165.872V55.654H169.958V47.9968Z" fill="#0A5BC8"/>
<path d="M169.958 175.106H165.872V182.764H169.958V175.106Z" fill="#0A5BC8"/>
<path d="M108.163 117.422V113.338H100.503V117.422H108.163Z" fill="#0A5BC8"/>
<path d="M235.327 117.422V113.338H227.667V117.422H235.327Z" fill="#3F3D56"/>
<path d="M165.191 119.48L168.683 111.5L212.433 135.72L165.191 119.48Z" fill="#0A5BC8"/>
<path d="M178.129 19.41H158.212V42.3816H178.129V19.41Z" fill="#0A5BC8"/>
<path d="M168.17 25.7909C180.863 25.7909 191.152 22.9341 191.152 19.4099C191.152 15.8858 180.863 13.0289 168.17 13.0289C155.478 13.0289 145.189 15.8858 145.189 19.4099C145.189 22.9341 155.478 25.7909 168.17 25.7909Z" fill="#0A5BC8"/>
<path d="M211.197 128.78L209.92 130.567C209.92 130.567 204.047 137.458 203.792 134.14C203.536 130.822 208.133 128.525 208.133 128.525L210.686 126.994L211.197 128.78Z" fill="#FFB8B8"/>
<path d="M247.545 134.808L248.614 136.726C248.614 136.726 252.332 144.981 249.222 143.792C246.113 142.603 246.003 137.467 246.003 137.467L245.711 134.505L247.545 134.808Z" fill="#FFB8B8"/>
<path d="M241.797 100.798C246.091 100.798 249.572 97.3179 249.572 93.0256C249.572 88.7333 246.091 85.2537 241.797 85.2537C237.502 85.2537 234.021 88.7333 234.021 93.0256C234.021 97.3179 237.502 100.798 241.797 100.798Z" fill="#2F2E41"/>
<path d="M241.073 156.857L242.094 163.493V165.535H247.967V162.983C247.967 162.983 248.223 158.388 247.201 157.112C246.18 155.836 241.073 156.857 241.073 156.857Z" fill="#FFB8B8"/>
<path d="M230.604 156.857L231.625 163.493V165.535H237.498V162.983C237.498 162.983 237.754 158.388 236.732 157.112C235.711 155.836 230.604 156.857 230.604 156.857Z" fill="#FFB8B8"/>
<path d="M234.556 103.551C234.556 103.551 232.297 104.741 233.84 107.448C235.383 110.155 244.435 138.162 244.435 138.162L249.658 136.68L245.052 118.968L242.415 107.835L234.556 103.551Z" fill="#71AAF7"/>
<path d="M240.945 101.087C244.189 101.087 246.818 98.4585 246.818 95.2163C246.818 91.9741 244.189 89.3458 240.945 89.3458C237.702 89.3458 235.072 91.9741 235.072 95.2163C235.072 98.4585 237.702 101.087 240.945 101.087Z" fill="#FFB8B8"/>
<path d="M243.626 96.1096L242.86 108.106L237.498 104.277C237.498 104.277 239.285 97.1306 238.775 96.6201L243.626 96.1096Z" fill="#FFB8B8"/>
<path d="M243.626 107.085L237.85 102.809C237.85 102.809 235.2 101.725 234.434 103.001C233.668 104.277 229.837 123.165 231.88 126.738C231.88 126.738 242.86 129.036 245.158 127.759L246.18 121.123C246.18 121.123 247.457 117.039 245.414 114.487L243.626 107.085Z" fill="#71AAF7"/>
<path d="M235.966 103.256C235.966 103.256 233.923 101.725 232.136 104.277C230.348 106.83 208.899 126.994 208.899 126.994L212.474 131.077L226.518 119.336L235.455 112.19L235.966 103.256Z" fill="#71AAF7"/>
<path d="M245.286 127.632C245.286 127.632 232.647 125.207 231.37 126.994L231.114 129.801C231.114 129.801 228.306 135.161 229.838 143.839C231.37 152.518 230.348 157.878 230.348 157.878C230.348 157.878 237.243 157.112 242.35 157.878C247.457 158.643 248.223 157.878 248.223 157.878L245.286 127.632Z" fill="#2F2E41"/>
<path d="M248.478 164.514L241.073 164.769L243.627 183.912C243.627 183.912 241.584 192.08 243.882 192.59C245.479 192.913 247.104 193.084 248.734 193.101C248.734 193.101 251.032 195.398 253.585 195.143C255.281 194.926 256.924 194.408 258.437 193.611C258.437 193.611 258.948 192.08 257.16 191.569C255.373 191.059 250.521 189.527 249.5 184.167L248.478 164.514Z" fill="#2F2E41"/>
<path d="M238.009 164.514L230.604 164.769L233.157 183.912C233.157 183.912 231.114 192.08 233.413 192.59C235.01 192.913 236.635 193.084 238.264 193.101C238.264 193.101 240.562 195.398 243.116 195.143C244.812 194.926 246.455 194.408 247.968 193.611C247.968 193.611 248.478 192.08 246.691 191.569C244.903 191.059 240.052 189.527 239.03 184.167L238.009 164.514Z" fill="#2F2E41"/>
<path d="M244.516 88.0617C246.293 88.0617 247.734 86.6219 247.734 84.8457C247.734 83.0696 246.293 81.6298 244.516 81.6298C242.74 81.6298 241.299 83.0696 241.299 84.8457C241.299 86.6219 242.74 88.0617 244.516 88.0617Z" fill="#2F2E41"/>
<path d="M248.806 83.1038C248.806 82.3089 248.512 81.5421 247.979 80.9515C247.447 80.3608 246.715 79.9881 245.924 79.9052C246.035 79.8937 246.147 79.8878 246.259 79.8878C247.112 79.8878 247.931 80.2266 248.534 80.8297C249.138 81.4329 249.477 82.2509 249.477 83.1038C249.477 83.9567 249.138 84.7747 248.534 85.3778C247.931 85.9809 247.112 86.3197 246.259 86.3197C246.147 86.3197 246.035 86.3139 245.924 86.3024C246.715 86.2195 247.447 85.8468 247.979 85.2561C248.512 84.6655 248.806 83.8987 248.806 83.1038Z" fill="#2F2E41"/>
<path d="M240.892 94.5937C243.854 94.5937 246.254 93.1539 246.254 91.3778C246.254 89.6016 243.854 88.1618 240.892 88.1618C237.931 88.1618 235.53 89.6016 235.53 91.3778C235.53 93.1539 237.931 94.5937 240.892 94.5937Z" fill="#2F2E41"/>
<path d="M325.353 15.435C325.134 11.5641 323.547 7.89668 320.875 5.08672C318.202 2.27676 314.618 0.506884 310.761 0.0926385C306.905 -0.321607 303.026 0.646713 299.817 2.82495C296.609 5.00318 294.278 8.24975 293.241 11.9858C293.043 11.9787 292.845 11.9707 292.645 11.9707C289.109 11.9714 285.668 13.1164 282.837 15.2345C280.007 17.3526 277.938 20.33 276.941 23.7211C274.598 22.692 271.98 22.4687 269.496 23.0863C267.012 23.7038 264.804 25.1272 263.216 27.1336H314.27C315.759 27.1378 317.234 26.8416 318.607 26.2626C319.979 25.6836 321.22 24.8339 322.256 23.7641C323.292 22.6944 324.101 21.4267 324.635 20.037C325.169 18.6473 325.418 17.1641 325.365 15.6763C325.362 15.596 325.358 15.5156 325.353 15.435Z" fill="#E5EFFE"/>
<path d="M282.673 49.8659C285.101 49.8659 287.069 47.8985 287.069 45.4717C287.069 43.0449 285.101 41.0775 282.673 41.0775C280.245 41.0775 278.277 43.0449 278.277 45.4717C278.277 47.8985 280.245 49.8659 282.673 49.8659Z" fill="#E6E6E6"/>
<path d="M295.947 38.7704C297.968 38.7704 299.607 37.1323 299.607 35.1116C299.607 33.0909 297.968 31.4528 295.947 31.4528C293.925 31.4528 292.286 33.0909 292.286 35.1116C292.286 37.1323 293.925 38.7704 295.947 38.7704Z" fill="#E6E6E6"/>
<path d="M313.812 59.3866C316.239 59.3866 318.208 57.4192 318.208 54.9924C318.208 52.5655 316.239 50.5982 313.812 50.5982C311.384 50.5982 309.416 52.5655 309.416 54.9924C309.416 57.4192 311.384 59.3866 313.812 59.3866Z" fill="#E6E6E6"/>
<path d="M280.475 79.5266C282.903 79.5266 284.871 77.5592 284.871 75.1324C284.871 72.7056 282.903 70.7382 280.475 70.7382C278.047 70.7382 276.079 72.7056 276.079 75.1324C276.079 77.5592 278.047 79.5266 280.475 79.5266Z" fill="#E6E6E6"/>
<path d="M313.812 104.793C316.239 104.793 318.208 102.826 318.208 100.399C318.208 97.9721 316.239 96.0048 313.812 96.0048C311.384 96.0048 309.416 97.9721 309.416 100.399C309.416 102.826 311.384 104.793 313.812 104.793Z" fill="#E6E6E6"/>
<path d="M306.844 185.129C306.846 185.081 306.851 185.035 306.851 184.987C306.852 184.251 306.668 183.526 306.315 182.879C305.963 182.233 305.453 181.686 304.833 181.288C304.213 180.89 303.503 180.655 302.768 180.603C302.033 180.552 301.297 180.686 300.628 180.994C300 180.269 299.152 179.77 298.213 179.574C297.274 179.378 296.297 179.494 295.431 179.906C294.564 180.318 293.857 181.003 293.418 181.855C292.978 182.707 292.83 183.68 292.997 184.624C292.974 184.624 292.953 184.621 292.93 184.621C292.23 184.62 291.54 184.785 290.918 185.105C290.295 185.424 289.757 185.887 289.35 186.456C288.942 187.024 288.676 187.682 288.574 188.374C288.472 189.066 288.537 189.772 288.763 190.434C288.989 191.097 289.37 191.695 289.874 192.18C290.378 192.665 290.991 193.023 291.662 193.224C292.332 193.425 293.041 193.463 293.729 193.335C294.417 193.206 295.064 192.916 295.617 192.487C295.966 193.167 296.486 193.744 297.126 194.161C297.766 194.578 298.504 194.821 299.267 194.866C300.03 194.911 300.791 194.756 301.476 194.417C302.161 194.078 302.745 193.567 303.172 192.933C303.695 193.313 304.296 193.574 304.931 193.695C305.566 193.817 306.221 193.796 306.847 193.636C307.474 193.475 308.057 193.178 308.556 192.766C309.054 192.354 309.455 191.837 309.731 191.251C310.006 190.666 310.149 190.028 310.148 189.381C310.148 188.734 310.005 188.096 309.729 187.511C309.453 186.926 309.052 186.409 308.553 185.998C308.054 185.586 307.471 185.289 306.844 185.129Z" fill="#E5EFFE"/>
<path d="M317.841 84.6531C318.853 84.6531 319.673 83.8334 319.673 82.8222C319.673 81.811 318.853 80.9913 317.841 80.9913C316.83 80.9913 316.01 81.811 316.01 82.8222C316.01 83.8334 316.83 84.6531 317.841 84.6531Z" fill="#E6E6E6"/>
<path d="M306.119 40.7113C307.13 40.7113 307.95 39.8916 307.95 38.8804C307.95 37.8692 307.13 37.0495 306.119 37.0495C305.107 37.0495 304.287 37.8692 304.287 38.8804C304.287 39.8916 305.107 40.7113 306.119 40.7113Z" fill="#E6E6E6"/>
<path d="M299.891 86.1178C300.902 86.1178 301.722 85.2981 301.722 84.2869C301.722 83.2757 300.902 82.456 299.891 82.456C298.879 82.456 298.059 83.2757 298.059 84.2869C298.059 85.2981 298.879 86.1178 299.891 86.1178Z" fill="#E6E6E6"/>
<path d="M301.356 84.2869C302.368 84.2869 303.188 83.4672 303.188 82.456C303.188 81.4448 302.368 80.6251 301.356 80.6251C300.344 80.6251 299.524 81.4448 299.524 82.456C299.524 83.4672 300.344 84.2869 301.356 84.2869Z" fill="#E6E6E6"/>
<path d="M302.455 82.456C303.467 82.456 304.287 81.6363 304.287 80.6251C304.287 79.6139 303.467 78.7942 302.455 78.7942C301.444 78.7942 300.624 79.6139 300.624 80.6251C300.624 81.6363 301.444 82.456 302.455 82.456Z" fill="#E6E6E6"/>
<path d="M298.059 97.8356C299.071 97.8356 299.891 97.0159 299.891 96.0047C299.891 94.9936 299.071 94.1738 298.059 94.1738C297.048 94.1738 296.228 94.9936 296.228 96.0047C296.228 97.0159 297.048 97.8356 298.059 97.8356Z" fill="#E6E6E6"/>
<path d="M325.168 118.342C326.18 118.342 327 117.522 327 116.511C327 115.5 326.18 114.68 325.168 114.68C324.157 114.68 323.337 115.5 323.337 116.511C323.337 117.522 324.157 118.342 325.168 118.342Z" fill="#E6E6E6"/>
<path d="M285.97 119.44C286.982 119.44 287.802 118.621 287.802 117.609C287.802 116.598 286.982 115.779 285.97 115.779C284.958 115.779 284.138 116.598 284.138 117.609C284.138 118.621 284.958 119.44 285.97 119.44Z" fill="#E6E6E6"/>
<path d="M288.168 63.0484C289.18 63.0484 290 62.2287 290 61.2175C290 60.2063 289.18 59.3866 288.168 59.3866C287.156 59.3866 286.336 60.2063 286.336 61.2175C286.336 62.2287 287.156 63.0484 288.168 63.0484Z" fill="#E6E6E6"/>
<path d="M296.594 96.0047C297.605 96.0047 298.426 95.185 298.426 94.1738C298.426 93.1626 297.605 92.3429 296.594 92.3429C295.582 92.3429 294.762 93.1626 294.762 94.1738C294.762 95.185 295.582 96.0047 296.594 96.0047Z" fill="#E6E6E6"/>
<path d="M294.762 93.0753C295.773 93.0753 296.594 92.2555 296.594 91.2444C296.594 90.2332 295.773 89.4135 294.762 89.4135C293.75 89.4135 292.93 90.2332 292.93 91.2444C292.93 92.2555 293.75 93.0753 294.762 93.0753Z" fill="#E6E6E6"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="327" height="198.032" fill="white"/>
</clipPath>
</defs>
</svg>


`

export default () => {
  return <SvgCss xml={xml} width="327" height="248" />
}
