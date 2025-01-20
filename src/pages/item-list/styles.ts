import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@global': {
        ul: {
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            width: '90%',
            justifyContent: 'space-between',
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
            margin: '30px 0',
            textAlign: 'center',
            borderRight: '1px solid #ccc',
            '&:first-child, &:last-child, &:nth-child(4n)': {
                borderRight: 'none',
            },
            '&:hover img': {
                transform: 'scale(1.04)',
            },
        },
    },
    ulContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listImg: {
        width: '10vw',
        height: '10vw',
        objectFit: 'cover',
        margin: 0,
        padding: 0,
    },
    itemText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3vw'
    },

    // === animation
    transitionWrapper: {
        opacity: 0,
        transform: "translateY(10px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
    },
    transitionActive: {
        opacity: 1,
        transform: "translateY(0)",
    },
});

export default useStyles;
