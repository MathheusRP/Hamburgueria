import styled from "styled-components";

export const ProductList = styled.ul`

    display: flex;
    height: 360px;
    /* border: 2px solid red; */
    width: 95%;
    align-items: center;
    overflow-y: scroll;
    gap: 20px;
    max-width: 1000px;
    margin: 10px auto;

    @media (min-width: 768px){
        height: 720px;
        overflow-y: auto;
        align-items: flex-start;
        margin-top: 30px;
        width: 75%;
        flex-wrap: wrap;
        padding: 0px 20px;
    }


   

    li {
        border: 2px solid var(--grey-20);
        height: 340px;
        width: 300px;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
       
    }

    figure {
        height: 150px;
        width: 300px;
        background-color: var(--grey-0);
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    figure img {
        
        object-fit: cover;
        width: 150px;

    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        /* background-color: aqua; */
        padding: 0px 20px;
        height: 100%;
        justify-content: center;
        gap: 14px;
    }

    div h3 {
        font-size: 1.2rem;
        color: var(--grey-100);
        font-weight: 700;
    }

    div span {
        color: var(--grey-50);
        font-size: 0.9rem;
    }

    div p {
        color: var(--color-primary);
        font-size: 1rem;
        font-weight: 600;
    }

    div button {
        background-color: var(--color-primary);
        color: white;
        font-size: 1rem;
        font-weight: 600;
        height: 40px;
        padding: 0px 20px;
        border-radius: 8px;
        transition: 0.6s;
    }

    div button:hover {
        transition: 0.6s;
        background-color: var(--color-primary-50);
    }

    .mensagem {
        margin:  auto;
        color: var(--grey-50);
    }
    
`

