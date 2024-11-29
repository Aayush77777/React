import React, { useEffect } from "react";

const Navbar = ({ color, first }) => {
//   Case 1 : Run on every render
  useEffect(() => {
    alert("i will render on every render");
  });

//   // Case:2 Run on first render
  useEffect(() => {
    alert("i will render on first render");
  }, []);

//   // Case:3 Run on when certain values is changed

   // Example of cleaup Function
useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

 return () => {
     alert("component was unmounted")
 }
}, [])


  //Case:4 Run on when certain values is changed
  useEffect(() => {
    alert("Hey! i am running when the first wsa changed");
  }, []);

  return <div>I am navbar of {color} color hehe..</div>;
};

export default Navbar;
