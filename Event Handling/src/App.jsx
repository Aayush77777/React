import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [name, setname] = useState("Aayush");
  const [form, setform] = useState({})
  function handleClick() {
    alert("Clikced here");
  }

 function mouseOver() {
  alert("YOu are tehrer?")
 }

//  function Onchange(e) {
//   setname(e.target.value)
//  }

function Onchange (e) {
setform({...form,[e.target.name]:e.target.value} )
console.log(form);

}
  return (
    <>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <button className="red" onMouseOver={mouseOver}>
     I am button
     </button>

     {/* <input type="text" value={name} onChange={Onchange}/> */}
     <input type="text" name="email" value={form.email?form.email:""} onChange={Onchange} />
     <input type="text" name="phone" value={form.phone?form.phone:""} 
     onChange={Onchange}
     />

    </>
        
  );
};

export default App;
