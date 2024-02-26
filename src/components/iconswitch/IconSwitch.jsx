function IconSwitch({icon, onSwitch}) {

  return (
    <div className="switchbutton">
      <span className="material-icons md-24" onClick={onSwitch}>{icon}</span>
    </div>
  );
}

export default IconSwitch