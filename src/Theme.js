import { ThemeProvider } from 'styled-components';

const themes = {
    avengers: {
        bg: "#ccffcc",
        color: "#335",
        color2: "rgba(5, 5, 100, 0.5)"
    },
    terminator: {
        bg: "#ceceff",
        color: "#010",
        color2: "rgba(50, 100, 50, 0.5)"
    },
};

export const Theme = (props) => {
    return <ThemeProvider theme={themes['avengers']}>
        {props.children}
    </ThemeProvider>
};