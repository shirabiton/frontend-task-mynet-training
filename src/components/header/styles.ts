import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    header: {
      backgroundColor: 'black',
      color: 'white',
      height: '5vw',
      margin: '0 0 1vw 0',
      '& p': {
        margin: 0,
        padding: '1.4vw',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '1.2vw',
        display: 'inline-block',
      }
    }
  }
})

export default useStyles;