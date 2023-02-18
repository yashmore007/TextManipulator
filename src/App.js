import "./App.css";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import About from "./components/About";
import Alert from "./components/Alert";


import { useState } from "react";

function App() {
  const [Bcolor,changeBg]=useState("light")
  const [Tcolor,changeT]=useState("dark")
  const [mode,changeMode]=useState("dark mode")
  const [modecolor,Cgmodecolor]=useState({
   color:"black"
  
   })
   const [TextBg,ChangeTextBg]=useState("");
   const [TextColor,ChangeTextColor]=useState("");
   const [PowerCg,ChangePowerCg]=useState("");
   const [alert,ChangeAlert]=useState(undefined);
   const [NavGreen,ChangeNavGreen]=useState({
     color:"black",
     backgroundColor:"white"
  });
   const [ButtonColor,ChangeButtonColor]=useState({
     color:"green",
     backgroundColor:"#9bdb9b",
     border:"2px solid"
  });

   const setGreen=()=>{
     changeBg("success");  
     document.body.style.backgroundColor="#305630";
     ChangeTextBg("bg-info");
     ChangeTextColor("text-dark");
      ChangePowerCg("text-white");
      ChangeButtonColor({
        color:"green",
        backgroundColor:"rgb(155 235 155)",
        border:"2px solid green"
     })
    
  }
   const setRed=()=>{
     changeBg("danger");  
     document.body.style.backgroundColor="rgb(144 60 57)";
     ChangeTextBg("bg-info");
     ChangeTextColor("text-dark");
      ChangePowerCg("text-white");
      ChangeButtonColor({
         color:"red",
         backgroundColor:"rgb(230 168 166)",
         border:"2px solid red"
      })
  }
   const setYellow=()=>{
     changeBg("warning");  
     document.body.style.backgroundColor="rgb(159 151 51)";
     ChangeTextBg("bg-info");
     ChangeTextColor("text-dark");
      ChangePowerCg("text-white");
      ChangeButtonColor({
         color:"black",
         backgroundColor:"rgb(255 248 164)",
         border:"2px solid yellow"
      })
  }

   const SetAlert=(msg,type)=>{
     ChangeAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      ChangeAlert(undefined);
    }, 3000);
   }
   
  const ToggleBg=()=>{
    if(Bcolor=="light"){
      changeBg("dark");
      changeT("white");
      changeMode("light mode");
      Cgmodecolor({
        color:"white"
      })
      document.body.style.backgroundColor="#494857";
      ChangeTextBg("bg-secondary");
      ChangeTextColor("text-white");
      ChangePowerCg("text-white")
      SetAlert("Dark mode is appied","success");
      ChangeButtonColor({
       color:"blue",
       backgroundColor:"#bee0eb",
       border:"3px solid blue",
      })
    }
    else{
     changeBg("light");
     changeT("dark");
     changeMode("dark mode");
     Cgmodecolor({
      color:"black"
    })
    document.body.style.backgroundColor="white";
    ChangeTextBg("");
      ChangeTextColor("");
      ChangePowerCg("text-dark")
      SetAlert("light mode is appied","success");
      ChangeButtonColor({
        color:"blue",
        backgroundColor:"#bee0eb",
        border:"3px solid blue",
       })
    }
  }
  return (
  
    <>

    
      <Navbar setYellow={setYellow} setRed={setRed}  NavGreen={NavGreen} setGreen={setGreen} title="text" about="about" Bcolor={Bcolor} ToggleBg={ToggleBg} Tcolor={Tcolor} mode={mode} modecolor={modecolor} />
      <Alert alert={alert}/>
      

        <div className="container my-3">
        <Form ButtonColor={ButtonColor} heading="Enter the text below" TextBg={TextBg} TextColor={TextColor} PowerCg={PowerCg}/>
        </div>
       
     
    </>
     
  );
}

export default App;
