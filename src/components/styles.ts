import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  '@global': {
    body: {
      direction: 'rtl',
      margin: 0,
      padding: 0,
      fontFamily: 'system-ui',
      fontSize: '1vw'
    },
    h1: {
      fontSize: '1.5vw'
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '5vw',
      marginRight: 'auto'
    },
    li: {
      width: '25vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      borderRight: '0.5px #D3D0CB solid',
      boxSizing: 'border-box'

    },
  },
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  metaData: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#565B5E',
    fontSize: '2vh'
  }
})
export default useStyles;