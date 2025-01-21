import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  singleItemContainer: {
    width: '100%',
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '30vw',
      height: '30vw',
      objectFit: 'cover'
    }
  },
  singleItem: {
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3vw',
  }
});

export default useStyles;
