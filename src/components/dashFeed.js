import React, { useState } from 'react'
import styled from 'styled-components';


const betdata = [
    {
        id: 1,
        title: "package gets here before 5",
        betAmount: 2000,

    },
    {
        id: 2,
        title: " just because you think you are right",
        betAmount: 2000,
  
    },
    {
        id: 3,
        title: "If I am right",
        betAmount: 500,
 //User info will be here on the back end 
    },
];

const BetBox = styled.div`
    border: 2px solid gray;
`;



const DashFeed = () => {
    const [newBet, setnewBet] = useState({betdata});
    const [modal, setModal] = useState(false)


    const betModal = () => {
            //Axios post here 

     
        return(
            <>
                <form >
                    <h4>Whats the bet?</h4>
                    <input
                        type="text"
                        name='title'
                        value={newBet.title}
                        onChange={(e) => setnewBet(e.target.value)}
                        placeholder="New Bet Here.."
                    />
                <input
                        type="number"
                        name='betAmount'
                        value={newBet.betAmount}
                        onChange={(e) => setnewBet(e.target.value)}
                        placeholder="New Bet Here.."
                    />
                
                </form>
                <button onClick={()=> setModal(false)}>Close</button>
                <button>Save</button>
            </>
        )
    }



return (
        <>
            {modal && betModal()}
            <div>
                <h1>Bets</h1>
                {betdata.map((bets,i) => {
                    return <BetBox>
                        <h3>{bets.title}</h3>
                        <p>{bets.betAmount}</p>
                    </BetBox>
                })}
                <button onClick={() => setModal(true)}>New Bet</button>
            </div>
        </>
    )
}


export default DashFeed