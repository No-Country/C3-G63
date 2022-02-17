import React from 'react';
import { AcreditarView } from './acreditar';

export const Acreditar = () => {

  const [acreditar, setAcreditar] = useState(false);
  const [configuracion, setConfiguracion] = useState(false);
  const [logo, setLogo] = useState(0);
  const [name, setName] = useState('');

  return (
    <AcreditarView
      acreditar={acreditar}
      configuracion={configuracion}
      logo={logo}
      name={name}
      setAcreditar={setAcreditar}
      setConfiguracion={setConfiguracion}
      setLogo={setLogo}
      setNome={setName}
      list={list}
    />
  );
};