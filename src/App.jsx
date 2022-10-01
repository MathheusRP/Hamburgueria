
import './App.css';
import { Header } from './components/Header';
import { Productlist } from './components/List';
import { Carrinho } from './components/Carrinho';
import { Api } from './Api/request';
import { useState, useEffect } from 'react';


function App() {

  const [produtos, setProdutos] = useState ([ ])

  const [carrinho, setCarrinho] = useState ([ ])

  const [filter, setFilter] = useState (produtos)

  

  useEffect(() => {
    Api.get('/products')
    .then(resp => {
      // console.log(resp)
      setProdutos(resp.data)
      setFilter(resp.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (

    <div className="App">
      <Header produtos={produtos} setFilter={setFilter}/>
      <div className='loja'>
        <Productlist setCarrinho={setCarrinho} list={produtos} carrinho={carrinho} filter={filter}/>
        <Carrinho setCarrinho={setCarrinho} carrinho={carrinho}/>
      </div>
    </div>
  );
}

export default App;
 