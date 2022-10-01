import { useState } from 'react'
import img from '../../assets/img/logo.png'
import { HeaderStyled } from './headerStyle'

export const Header = ({setFilter, produtos}) => {

    const [valor, setValor] = useState ('')

    const pesquisar = (event) => {
        event.preventDefault()
        if(valor == ''){
            setFilter([...produtos])
        } else {
            setFilter('')
            produtos.map(element => {
                if(element.name.toUpperCase().includes(valor.toUpperCase())){
                    setFilter((list) => [...list, {...element}])
                } 
            })
        }
        
    }
    
   

    return (
        <HeaderStyled>
            <div>
            <figure>
                <img src={img} alt="" />
            </figure>
            <form onSubmit={pesquisar}>
                <input id="pesquisaInput" onChange={(event) => setValor(event.target.value)} type="text" placeholder='Digitar Pesquisa' />
                <button type='submit'>Pesquisar</button>
            </form>
            </div>
        </HeaderStyled>
    )
}