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
  },
  metaData: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      color: '#565B5E',
      fontSize: '0.8vw',
    }
  }
})

export default useGlobalStyles;