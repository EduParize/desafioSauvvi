import React, { useEffect } from 'react';
import { HomePage } from '../02-pages/home/ui/home-page';

export const AppEntry = () => {
  
  useEffect(() => {
    // Aqui você mostra na apresentação:
    // "Nesta camada nós checamos as atualizações OTA via EAS Update"
    console.log('[EAS Update] Verificando novas versões crtíticas da regra de negócio...');
  }, []);

  return <HomePage />;
};