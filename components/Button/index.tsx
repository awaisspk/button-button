import { styled, css } from '@stitchesConfig'
import { ReactNode } from 'react'
import { TrolleySVG } from './Trolley'

const StyledButton = styled('button', {
  border: 'none',
  padding: '0.9em 1.5em',
  textAlign: 'center',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  borderRadius: '0.5em',
  outline: 'none',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  boxShadow:
    'rgba(17, 17, 26, 0.05) 0px 4px 8px, rgba(17, 17, 26, 0.05) 0px 8px 16px',

  $$HFcolor: '$colors$grayDark',

  '&:hover': {
    backgroundColor: '$$HFcolor',
  },

  '&:focus': {
    backgroundColor: '$$HFcolor',
  },

  '&:disabled': {
    color: '$grayDark',
    backgroundColor: '$grayLight',
    boxShadow: 'none',
  },

  variants: {
    color: {
      default: {
        backgroundColor: '$grayLight',
        color: '$grayDark',
      },
      primary: {
        backgroundColor: '$blueLight',
        $$HFcolor: '$colors$blueDark',
        color: 'white',
      },
      secondary: {
        backgroundColor: '$greenlight',
        $$HFcolor: '$colors$darkGreen',
        color: 'white',
      },
      danger: {
        backgroundColor: '$redlight',
        $$HFcolor: '$colors$darkRed',
        color: 'white',
      },
    },
    outline: {
      true: {
        border: '1px solid $blueLight',

        color: '$blueLight',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$transparentBlue',
        },
        '&:focus': {
          backgroundColor: '$transparentBlue',
        },
      },
    },
    textOnly: {
      true: {
        backgroundColor: 'transparent',
        color: '$blueLight',
        '&:hover': {
          backgroundColor: '$transparentBlue',
        },
        '&:focus': {
          backgroundColor: '$transparentBlue',
        },
      },
    },

    size: {
      sm: {
        padding: '0.6em 1em',
      },

      md: {
        padding: '0.7em 1.5em',
      },

      lg: {
        padding: '0.8em 1.8em',
      },
    },

    shadowDisable: {
      true: {
        boxShadow: 'none',
      },
    },
  },

  compoundVariants: [
    {
      textOnly: true,
      css: {
        '&:disabled': {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  ],
})

interface IButton {
  children: ReactNode
  disabled?: boolean
  color?: 'default' | 'primary' | 'secondary' | 'danger' | undefined
  outline?: boolean | 'true' | undefined
  textOnly?: boolean | 'true' | undefined
  size?: 'sm' | 'md' | 'lg' | undefined
  shadowDisable?: boolean
  startIcon?: boolean
  endIcon?: boolean
}

const Button = ({ children, ...props }: IButton) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

export { Button }
