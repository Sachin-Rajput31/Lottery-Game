import './App.css'


import Lottery from "./Lottery";
import {sum} from "./Helper";


function App() {

let winCondition =(ticket)=> {

  return ticket[0]===0;

};

  return( <>
 
<Lottery n={3} winningSum={15} winCondition={winCondition}/>
 
 



</>
);
}

export default App;
