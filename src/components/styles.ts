import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  '@global': {
    body: {
      direction: 'rtl'
    }
  },
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  itemList: {

  }
})
export default useStyles;