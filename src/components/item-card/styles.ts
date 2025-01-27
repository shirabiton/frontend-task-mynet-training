import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardContent: {
        width: '25vw',
        minHeight: '20vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'space-around',
        boxSizing: 'border-box',
        textAlign: 'center',
        padding: '0 3.5vw 0 0',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            margin: 0,
            padding: 0,
            aspectRatio: '1 / 1',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        },
        '@media (max-width: 1023px)': {
            width: '70vw',
            flexDirection: 'row',
            textAlign: 'right',
            padding: 0
        }
    },
    itemText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3vw'
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10vw',
        height: '10vw',
        overflow: 'hidden',
    },
    metaData: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        '& p': {
            color: '#565B5E',
            fontSize: '0.8rem'
        },
        '@media (min-width: 1024px)': {
            width: '50%',
            padding: '0 3.5vw 0 0'
        }
    }
});

export default useStyles;
