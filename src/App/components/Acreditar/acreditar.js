import React from 'react';
import { AcreditarView } from './Acreditar';
import swal from 'sweetalert';

export const Acreditar = () => {

  const [acreditar, setAcreditar] = useState(false);
  const [configuracion, setConfiguracion] = useState(false);
  const [logo, setLogo] = useState(0);
  const [name, setName] = useState('');

  const alertClick = () => {
    swal({
      title: "¿Estas seguro?",
      text: "Una vez acreditado no podras revertir el cambio",
      icon: "warning",
      buttons: ["NO", "Aceptar"],
      dangerMode: true,
    })
  }

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
      alertClick={alertClick}
    />
  );
};