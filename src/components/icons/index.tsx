import React from 'react'

function SvgComponent(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <rect width={48} height={48} fill="#2F6BFF" rx={24} />
      <path
        fill="#244495"
        d="M36.001 24.074c0-6.669-5.373-12.075-12-12.075-6.63.002-12.003 5.406-12.003 12.077 0 6.025 4.389 11.02 10.125 11.926v-8.438h-3.045v-3.488h3.048v-2.663c0-3.026 1.793-4.697 4.533-4.697 1.314 0 2.687.236 2.687.236v2.97h-1.514c-1.49 0-1.954.931-1.954 1.887v2.265h3.326l-.53 3.489h-2.798v8.438c5.736-.907 10.125-5.901 10.125-11.927z"
      />
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" transform="translate(12 12)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
