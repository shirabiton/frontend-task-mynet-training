import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@global': {
        ul: {
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '90%',
        },
        li: {
            width: '25vw',
            minHeight: '20vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            margin: '30px',
            textAlign: 'center',
            borderRight: '1px solid #ccc',
            padding: '0 30px 0 0',
            // Remove right border for the extreme items in each row
            '&:first-child, &:last-child, &:nth-child(4n)': {
                borderRight: 'none',
            },
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
        }
    },
    ulContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3vw'
    }
});

export default useStyles;
