import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #007bff;
        --secundary-color: #6c757d;
        --background: #f8f9fa;
        --text: #212529;
        --white: #fff;
        --border-radius: 8px;
        --transition: all 0.3s ease;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        color: var(--text);
        font-family: 'Segoe UI', Tohama, Geneva, Verdana, sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        transition: var(--transition);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
