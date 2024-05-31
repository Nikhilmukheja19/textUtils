import './App.css';
import About from './Components/About';
// import Home from './Components/Home';
import TextArea from './Components/TextArea';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  let [mode , setMode] = useState('dark');
  let [btn , setBtn] = useState('Enable Dark Mode');

  const toggleMode =()=>{
    if(mode ==='light' && btn === 'Enable Dark Mode'){
      setMode ('dark');
      setBtn ('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      document.title="TextUtils - Dark Mode";
      
      
    }
    else{
      setMode('light');
      setBtn('Enable Dark Mode');
      
      document.body.style.backgroundColor = 'white';
      document.title="TextUtils - Light Mode";


    }

  }
  // const togglebtn =()=>{
  //   if(btn ==='Enable Dark Mode'){
  //     setBtn ('Enable Light Mode');
  //   }
  //   else{
  //     setBtn('Enable Dark Mode');
  //   }

  // }
  return ( 
   <>
<Navbar title="Text Utils" mode={mode} btn={btn}toggleMode={toggleMode}/>
{/* <TextArea heading="Enter your text here" mode={mode} /> */}
   <Router>
   <Routes>
    <Route path="/" exact element={<TextArea heading="Enter your text here" mode={mode} />}/>
    <Route path="/about"  element={<About/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;







// import React, { useState } from 'react'


// function App() {

//   const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
//     height : '100vh' , width : '100%'
// })
// const [btn , setBtn] = useState("light");


//   const toggleStyle = ()=>{
//     if(myStyle.color === 'black'){
//         setMyStyle({ 
//             color: 'white',
//             backgroundColor: 'black',
//             height : '100vh'
//         })
//         setBtn("Dark Mode is Enabled");
//     }
//     else{
//         setMyStyle({ 
//             color: 'black',
//             backgroundColor: 'white',
//             height : '100vh'
//         })
//         setBtn("Light Mode is Enabled");

//     }
// }
//   return (
// <>
// <div className="div" style={myStyle}>
//     mode is changed
// <button className="btn btn-primary" onClick={toggleStyle}>{btn}</button>
// </div>
// </>
//     )
// }

// export default App;