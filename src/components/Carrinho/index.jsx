import { Section } from "./carrinhoStyle"
import img from '../../assets/img/product.png'
import { SectionCarrinho } from "./carrinhoStyle"
import { useState } from "react"

export const Carrinho = ({carrinho, setCarrinho, valor, setvalor}) => {

    

    const remove = (event) => {

        event.preventDefault()

        const filtro = carrinho.filter(element => {
            if(element.id != event.target.id){
                
                return element

            }

            setvalor(valor - element.price)

        })

        setCarrinho(filtro)
        
    }

    const deleteAll =() => {

        setCarrinho([])
        setvalor(0)
       
    }
        


    // console.log(carrinho)
    return (

        <Section>
            <div className="carrinhoHeader">
                <h2>Carrinho de comras</h2>
            </div>
            
            {
                carrinho.length === 0 ? ( 
            
                    <h2 className="mensagem">Carrinho vazio</h2>

                ) : (
                    
                <ul>
                    {
                        carrinho.map(produto => {
                            return (
                                <li key={produto.id}>
                                <figure>
                                    <img src={produto.img} alt="" />
                                </figure>
                                <div>
                                    <h3>{produto.name}</h3>
                                    <span>{produto.category}</span>
                                </div>
                                <div className="remove">
                                    <button onClick={remove} id={produto.id}>Remover</button>
                                    <p>{produto.quantidade}</p>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>

                )
            }

            <SectionCarrinho>
                <div>
                    <p>Total</p>
                    <span>R$ {valor.toFixed(2)}</span>
                </div>
                <button onClick={deleteAll}>Remover todos</button>
            </SectionCarrinho>

        </Section>
    )
}



// return (
//     <li key={produto.id}>
//     <figure>
//         <img src={produto.img} alt="" />
//     </figure>
//     <div>
//         <h3>{produto.name}</h3>
//         <span>{produto.category}</span>
//     </div>
//     <div>
//         <button onClick={remove} id={produto.id}>Remover</button>
//         <p>Quantidade: {produto.quantidade}</p>
//     </div>
// </li>
// )