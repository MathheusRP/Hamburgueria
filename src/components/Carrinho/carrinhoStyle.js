import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
    
    @media (min-width: 768px){
        max-width: 400px;
        margin-top: 30px;
        padding: 0px 20px;
    }


    .carrinhoHeader {
        height: 65px;
        width: 100%;
        color: white;
        font-weight: 700;
        font-size: 0.9rem;
        background-color: var(--color-primary);
        display: flex;
        align-items: center;
        padding: 0px 20px;
        border-radius: 8px 8px 0px 0px;
    }

    ul {
        background-color: var(--grey-0);
        height: min-content;
        max-height: 300px;
        display: flex;
        flex-direction: column;
        padding: 30px 20px 0 20px;
        gap: 20px;
        overflow-y: auto;
    }

    li {
        /* border: 2px solid red; */
        display: flex;
    }

    li figure {
        background-color: var(--grey-20);
        width: 80px;
        height: 80px;
        border-radius: 6px;
    }

    li figure img {
        width: 80px;
        height: 80px;
        object-fit: cover;

    }

    li div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        align-items: flex-start;
    }

    li div h3 {
        font-size: 0.9rem;
        text-align: start;
    }

    li span {
        color: var(--grey-50);
    }

    li button {
        margin: 10px 10px auto auto;
        color: var(--grey-50);
        
    }

    .mensagem {
        background-color: var(--grey-0);
        padding: 30px 0px;
        color: var(--grey-50);
    }

    .remove {
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 0 auto;
        gap: 10px;
        justify-content: space-between;
        padding: 0;
    }
`

export const SectionCarrinho = styled.section`

    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    padding: 0px 20px 20px 20px;
    border-radius: 0px 0px 8px 8px;


    div {
        /* background-color: aqua; */
        display: flex;
        justify-content: space-between;
        padding: 20px 0px;
        margin-top: 20px;
        border-top: 2px solid var(--grey-20);
    }

    div p {
        color: var(--gray-100);
        font-weight: 700;
    }

    div span {
        color: var(--grey-50);
        font-weight: 700;
    }

    button {
        background-color: var(--grey-20);
        color: var(--grey-50);
        height: 60px;
        font-size: 1rem;
        border-radius: 8px;
        font-weight: 700;
        transition: 0.6s;
    }

    button:hover {
        background-color: var(--grey-50);
        color: white;
        transition: 0.6s;
    }
`