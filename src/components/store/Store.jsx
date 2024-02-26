import { useState } from 'react';
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
        <header className="storeheader">
          <IconSwitch icon={dataView} onSwitch={onSwitch}></IconSwitch>
        </header>
      </div>
  );
}

export default Store