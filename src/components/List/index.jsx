import { useEffect, useState } from "react"
import { ProductList } from "./listStyle"


export const Productlist = ({list, setCarrinho, carrinho, filter}) => {


    const addCarrinho = (event) => {
        
        event.preventDefault()

        list.filter(produto => {


            if(produto.id == event.target.id){
                const validar = carrinho.find(element => element.id == produto.id)

                validar ? 

                ( 
                    carrinho.filter(existente => {
                         if(existente.id == event.target.id){
                            existente.quantidade += 1
                            setCarrinho([...carrinho])
                        }
                        
                        
                    })
                ) : (

                setCarrinho((produtos) =>  [...produtos, {...produto, quantidade: 1}])
                )  
            }
        })    
    }


    return (
        <ProductList>
            {
                
                filter ? (
                    filter.map(produto => {
                        return (
                            <li key={produto.id}>
                                <figure>
                                    <img src={produto.img} alt="" />
                                </figure>
                                    <div>
                                        <h3>{produto.name}</h3>
                                        <span>{produto.category}</span>
                                        <p>R$ {produto.price}</p>
                                        <button onClick={addCarrinho} id={produto.id} >Adicionar</button>
                                    </div>
                            </li>
                        )
                    })
                ) : (
                    <h2 className="mensagem">Sem resultados</h2>
                )

            }
            
        </ProductList>
    )
}


// const addCarrinho = (event) => {
        
//     event.preventDefault()

    
//     list.filter(produto => {


//         if(produto.id == event.target.id){
//             setCarrinho((produtos) =>  [...produtos, {...produto, quantidade: 0}])
//             // console.log(produto)
//         }
//     })
// }
