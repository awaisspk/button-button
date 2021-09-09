import { createStitches } from '@stitches/react'

const { styled, globalCss, getCssText, css } = createStitches({
  theme: {
    colors: {
      grayLight: '#E0E0E0',
      grayDark: '#AEAEAE',

      disabled: '#E0E0E0',

      redlight: '#D32F2F',
      darkRed: '#9A0007',
      greenlight: '#455A64',
      darkGreen: '#1C313A',
      blueLight: '#2962FF',
      blueDark: '#0039CB',
      transparentBlue: '#2962FF1A',
    },
  },
})

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
})

export { styled, globalStyles, getCssText, css }
