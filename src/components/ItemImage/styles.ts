import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    loading: {
        filter: "blur(2px)",
        transition: "filter 2s ease-in-out",
    }
});

export default useStyles;