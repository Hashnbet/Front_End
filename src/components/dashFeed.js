import React, { useState } from 'react'

import styled from 'styled-components';
import { thistle } from 'color-name';


let betdata = [
    {
        id: 1,
        title: "package gets here before 5",
        betAmount: 2000,
        winner: false,
        created_at: Date.now(),
        user1: "holly",
        user2: "sarah"
    },
    {
        id: 2,
        title: " just because you think you are right",
        betAmount: 2000,
        winner: false,
        created_at: Date.now(),
        user1: "dave",
        user2: "bill"
    },
    {
        id: 3,
        title: "If I am right",
        betAmount: 500,
        winner: false,
        created_at: Date.now(),
        user1: "frank",
        user2: "steve"
    },
];

const BetBox = styled.div`
    border: 2px solid gray;
`;



const DashFeed = () => {
    const [newBet, setnewBet] = useState({betdata: betdata});
    const [modal, setModal] = useState(false)


    const betModal =() => {
        const addBet = (title) =>{
            setnewBet({betdata: [...betdata, {
                id: 4,
                title: title,
                betAmount: 2000,
                winner: false,
                created_at: Date.now(),
                user1: "frank",
                user2: "steve"
            }]
            })
        setModal(false);
        }
    const handleChange =(e)=> {
        e.preventDefault()
    }

        return(
            <>
                <form>
                    <h4>Whats the bet?</h4>
                    <input
                        type="text"
                        value={betdata.title}
                        onChange={handleChange}
                        placeholder="New Bet Here.."
                    />
                </form>
                <button onClick={()=> setModal(false)}>Close</button>
                <button onClick={()=> addBet(betdata.title)}>Save</button>
            </>
        )
    }



return (
        <>
            {modal && betModal()}
            <div>
                <h1>Bets</h1>
                {betdata.map(bets => {
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