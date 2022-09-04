
import React from 'react'
import { useState } from 'react';
import { MdNavigation } from "react-icons/md";
import styled from 'styled-components';
export const HomePageStock = () => {
    const [rot, setRot] = useState(0);
  return (
    <Styles>
    <div className='main'>
        <div className="stock_name" style={{
             color: `${rot ?"red" :"green"}`,
        }}>
            uncunua
        </div>
        <div className="right">
        <div className="stock_price" style={{
            color: `${rot ?"red" :"green"}`,
        }}>
            794749
            <span className='arrows'><MdNavigation style={{
                color: `${rot ?"red" :"green"}`,
                transform: `${rot ? "rotate(180deg)" : ""}`
            }}/>
            </span>
        </div>
        <div className="button">
            <button>Sell</button>
        </div>
        </div>
    </div>
    </Styles>
  )
}

const Styles = styled.div`
.main{
    width: 100%;
    border: 2px solid var(--border-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    font-size: 1.2vw;
}
.stock_name{
    font-size: 1.2rem;
}
.right{
    display: inline-flex;
    width: 30%;
    justify-content: space-around;
    align-items: center;
}
.button button{
    padding: 0.5rem 1.2rem;
    background: blue;
    border:none;
    border-radius: 0.6rem;
    cursor: pointer;
    color: whitesmoke;

}
@media (max-width:600px) {
    .right{
        width: 50%;
    }
}
`
