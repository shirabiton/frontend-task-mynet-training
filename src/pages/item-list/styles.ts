import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@global': {
        ul: {
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            padding: 0,
            margin: '0 auto'
        },
        li: {
            borderRight: '1px solid #ccc',
            margin: '30px',
            // Remove right border for the extreme items in each row
            '&:first-child, &:last-child, &:nth-child(4n)': {
                borderRight: 'none'
            }
        }
    },
    ulContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default useStyles;
