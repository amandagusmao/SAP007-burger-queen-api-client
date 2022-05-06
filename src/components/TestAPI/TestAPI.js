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
      const resultadoApi = await fetch('https://swapi.dev/api/people/1');
      const conteudo = await resultadoApi.json();

      setItem(conteudo);
      setLoading(false);
    } catch (e) {
      setError('Porra, deu erro mano');
      setLoading(false);
    }
  };
  
  useEffect(() => {
    console.log('amontei');

    buscarProdutos();
  }, []);
   
  return (
    <div>
      <p>meu fi que isso</p>

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
              <p>{`Nome: ${item.name}`}</p>
              <p>{`Peso: ${item.mass}`}</p>
              <p>{`Secso: ${item.gender}`}</p>
              <p>{`Altura: ${item.height}`}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TestAPI;