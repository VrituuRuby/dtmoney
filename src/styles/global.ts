//function that creates the global css styles
import {createGlobalStyle} from 'styled-components';

// COMMENTS ARE FOR LEARNING PURPOUSES
export const GlobalStyle = createGlobalStyle`
    :root {
        //css variables, color palette
        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFF;
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    // font-size at a desktop is usually 16px
    // the app uses REM as unit of measure
    // that means each rem unit equals the page's current font-size
    html {
        @media (max-width: 1080px){
            //changes font-size in when max width is at 1080px to 15px
            font-size: 93.75%; //this will set to 15px
        }

        @media (max-width: 720px){
            // set font-size to 15px when the max-width is 720px
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }

    body, input, text-area, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

h1, h2, h3, h4, h5 {
    font-weight: 600;
}

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        border-radius: 0.25rem;
        padding: 3rem;
        position: relative;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: none;
        background: transparent;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.7);
        }
    }
`