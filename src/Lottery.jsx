import {useState} from "react";

import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";



export default function Lottery({n=3 , winCondition}){
    let [ticket, setTicket]= useState(genTicket(n));
    let isWinning= winCondition(ticket);    
    let buyTicket=()=>{
        setTicket(genTicket(n));

    };
    
    let Style2={color:"greenish"};
    return(
      <div>
<h1>Lottery Game !</h1>
<h4>{!isWinning && "Try Your Luck!" }</h4>
<Ticket ticket={ticket}/>
<br/>
<Button action={buyTicket}/>
<h3 className="heding" style={Style2} >{isWinning && " Hurray!, Congrats You Won.. "}</h3>
   

        </div>
    );
}