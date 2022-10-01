import styled from "styled-components";

// import '../../css/color.css'

export const HeaderStyled = styled.header`
    
    background-color: var(--grey-0);
    height: 140px;
    align-items: center;
    display: flex
    ;

    form {
        background-color: white;
        display: flex;
        height: 60px;
        width: 90% ;
        max-width: 380px;
        padding: 10px;
        align-items: center;
        border-radius: 8px;
        border: solid 2px var(--grey-20);
        
    }

    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: column;
        
        
        justify-content: center;
        gap: 16px;
        align-items: center;
    }

    form input {
        width: 70%;
        height: 40px;
        padding: 0 10px;
        border: none;
        outline: none;
        font-size: 1rem;
    }

    form button {
        width: 30%;
        height: 40px;
        background-color: var(--color-primary);
        border-radius: 8px;
        color: white;
        transition: 0.6s;
    }

    button:hover {
        background-color: var(--color-primary-50);
        transition: 0.6s;
    }

    @media (min-width: 768px){
        height: 80px;
        align-items: center;
        justify-content: center;
        

        div {
            flex-direction: row;
            justify-content: space-between;
            max-width: 1400px;
            padding: 0px 20px;
        }

        form  {
            width: 360px;
            /* background-color: aqua; */
        }
    }
`