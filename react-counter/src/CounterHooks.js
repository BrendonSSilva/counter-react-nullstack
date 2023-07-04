import React, { useState } from 'react';

function ContadorHooks() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <section>
      <h2>React - Contador Hooks</h2>
      <p>{contador}</p>
      <div className='buttons'>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      </div>
    </section>
  );
}

export default ContadorHooks;