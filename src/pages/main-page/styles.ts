import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles({
  '@global': {
    body: {
      direction: 'rtl',
      margin: 0,
      padding: 0,
      fontFamily: 'system-ui',
      fontSize: '1vw',
    },
    h1: {
      fontSize: '1.3vw',
      fontWeight: 'normal',
      margin: 0,
      padding: 0,
    },
    p: {
      fontSize: '0.9vw'
    },
    '::-webkit-scrollbar': {
      width: '10px'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
      border: '1px black solid',
      borderRadius: '10px'
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'black'
    }
  },
  metaData: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      color: '#565B5E',
      fontSize: '0.8vw',
    }
  },

  // Animation style
  transitionWrapper: {
    opacity: 0,
    transform: "translateY(10px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  transitionActive: {
    opacity: 1,
    transform: "translateY(0)",
  }
})

export default useGlobalStyles;