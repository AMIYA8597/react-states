import { useState } from "react";
import "./Lottery.css"
import { generateTicket , sum } from "./helper"



export default function Lottery() {
  const [ticket, setTicket] = useState(generateTicket(3));
  // let numbers = []
  // while (numbers.length < 6) {
  //     numbers.push(Math.floor(Math.random() * 49 + 1
  //     ))

  let isWinning=sum(ticket)===15;

  let buyTicket = () => {
    setTicket(generateTicket(3))
  }

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congractulation , You Won the correct number! "}</h3>
    </div>
  );
}
