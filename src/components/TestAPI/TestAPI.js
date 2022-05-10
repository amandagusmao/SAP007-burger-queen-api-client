import React, { useEffect, useState} from 'react';
import Button from '../Button/Button';

const TestAPI = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('item', item);
  
  const buscarProdutos = async () => {
    setLoading(true);
    setError(null);

    try {
      const resultadoApi = await fetch('https://lab-api-bq.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({
          email: 'engamandagusmao@gmail.com',
          password: 'bq123456',
        }),
      });
      const conteudo = await resultadoApi.json();

      setItem(conteudo);
      setLoading(false);
    } catch (e) {
      setError('Porra, deu erro mano');
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   console.log('amontei');

  //   buscarProdutos();
  // }, []);
   
  return (
    <div>
      <Button title="ENTRAR" onClick={buscarProdutos} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {Boolean(error) ? (
            <div>
              <Button title="Tentar novamente" onClick={buscarProdutos} />
              <p>{error}</p>
            </div>
          ) : (
            <div>
              <p>{`Email: ${item.email}`}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TestAPI;