import { useState } from 'react';
import './Store.css';

import IconSwitch from "../iconswitch/IconSwitch";

function Store({ products }) {
  const [dataView, setDataView] = useState("view_module");
  let iconName = "";

  const onSwitch = () => {
    if (dataView === "view_module") {
      iconName = "view_list";
    } else {
      iconName = "view_module";
    }
    setDataView(iconName);
    console.log("change state here");
  }

  return (
    <div className='store'>
      <div className="storeheader">
        <IconSwitch icon={dataView} onSwitch={onSwitch}></IconSwitch>
      </div>
      <div className="listcontainer">

      </div>
      <div className="cardscontainer">

      </div>

    </div>
  );
}

export default Store