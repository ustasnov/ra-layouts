import './IconSwitch.css'

function IconSwitch({ icon, onSwitch }) {

  return (
    <span className="material-icons md-24" onClick={onSwitch}>{icon}</span>
  );
}

export default IconSwitch