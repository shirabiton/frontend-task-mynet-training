import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        width: '25vw',
        minHeight: '20vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        textAlign: 'center',
        padding: '0 3.5vw 0 0',
        '& img': {
            width: '10vw',
            height: '10vw',
            objectFit: 'cover',
            margin: 0,
            padding: 0
        },
        '&:hover img': {
            transform: 'scale(1.04)',
        }
    },
    itemText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3vw'
    }
});

export default useStyles;
