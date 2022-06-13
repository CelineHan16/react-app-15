import { useEffect, useState } from "react";


function App() {
  const [name, setName] = useState("");

  useEffect(function() {
    // Read
    setName(localStorage.getItem('name'));
  }, []); //empty massive

  // console.log("Render");

  function onNameChange({ target }) {
    // Create / Update 
    localStorage.setItem('name', target.value)

    setName(target.value);
  }

  function onNameClear() {
    // Delete
    localStorage.removeItem('name')
    setName("");
  }
  
  //NUMBER

  const [number, setNumber] = useState(0);

  useEffect(function() {
    setNumber(+localStorage.getItem('number'));
  }, []);
  
  function increaseNumber() {
    localStorage.setItem('number', number + 1);
    setNumber(number + 1);
  };

  function decreaseNumber() {
    localStorage.setItem('number', number - 1);
    setNumber(number - 1);
  };

  // DIV ROTATE
  const [angle, setAngle] = useState(100);
  const [skew, setSkew] = useState(0);
  const [scale, setScale] = useState(1);
  const [radius, setRadius] = useState(0);

  useEffect(function() {
    setAngle(localStorage.getItem('angle'));
    setSkew(localStorage.getItem('skew'));
    setScale(localStorage.getItem('scale'));
    setRadius(localStorage.getItem('radius'));
  }, []); 
  
  function onAngleChange({ target }) {
    localStorage.setItem('angle', target.value)
    setAngle(+target.value);
  }
  function onSkewChange({ target }) {
    localStorage.setItem('skew', target.value)
    setSkew(+target.value);
  }
  function onScaleChange({ target }) {
    localStorage.setItem('scale', target.value)
    setScale(+target.value);
  }
  function onRadiusChange({ target }) {
    localStorage.setItem('radius', target.value)
    setRadius(+target.value);
  }

  const styles = {
    width: "200px",
    height: "200px",
    backgroundColor: "violet",
    transform: `rotate(${angle}deg) skew(${skew}deg) scaleX(${scale})`,
    transition: "0.3s",
    borderRadius: `${radius}%`
  }

  return (
    <div className="App">
      <input 
        type="text"
        value={name}
        placeholder="Your name"
        onChange={onNameChange}
        />
      <span>Your name is {name}</span>
      <button onClick={onNameClear}>Clear</button>
      <div>
        <button onClick={decreaseNumber}>-</button> 
        {number ?? 0} 
        <button onClick={increaseNumber}>+</button>
      </div>
      <br />
      <div>
        <div style={{ marginBottom: "30px", marginLeft: "25px" }}>
          <input type="range" min="0" max="360" value={angle} onChange={onAngleChange} />Rotate
          <br />
          <input type="range" min="0" max="25" value={skew} onChange={onSkewChange} />Skew
          <br />
          <input type="range" min="1" max="4" value={scale} onChange={onScaleChange} />Scale
          <br />
          <input type="range" min="0" max="50" value={radius} onChange={onRadiusChange} />Radius
        </div>
        <div style={styles}></div>
      </div>
    </div>
  );
}

export default App;
