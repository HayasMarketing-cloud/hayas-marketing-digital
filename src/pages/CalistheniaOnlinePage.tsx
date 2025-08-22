import React from 'react';

const CalistheniaOnlinePage = () => {
  console.log('CalistheniaOnlinePage está cargando correctamente');
  return (
    <div style={{padding: '40px', textAlign: 'center', backgroundColor: '#f5f5f5', minHeight: '100vh'}}>
      <h1 style={{color: '#333', fontSize: '2rem', marginBottom: '20px'}}>
        🎯 Caso de Éxito: Calistenia Online
      </h1>
      <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '20px'}}>
        ¡Esta página funciona perfectamente!
      </p>
      <p style={{fontSize: '1rem', color: '#888'}}>
        URL actual: {window.location.pathname}
      </p>
      <div style={{marginTop: '30px', padding: '20px', backgroundColor: '#e8f5e8', borderRadius: '8px', display: 'inline-block'}}>
        <p style={{color: '#2d5f2f', margin: 0}}>
          ✅ Componente cargado exitosamente
        </p>
      </div>
    </div>
  );
};

export default CalistheniaOnlinePage;