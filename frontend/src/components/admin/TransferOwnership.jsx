import React from 'react';
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { StyledForm } from "../auth/StyledForm";
import { useAppSelector } from '../../reducer/store';
import { useState } from 'react';


export const TransferOwnership = () => {

    const [transferOwners, settransferOwner] = useState();
    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
    


    const OwnerShiptransfer = async() => {
        try {
            let ownerShip = await contract?.methods.TransferOwner(transferOwners).send({from: accounts[0]})
            console.log('transferOwnerShip', ownerShip);
        } catch (error) {
            console.log("Transfer Owner Error", error)
        }
    
    }



    return (
        <Styled>
            <div>
                <StyledForm>
                    <h2 className="flex-1 font-poppins text-center font-semibold ss:text-[22px] text-[16px] text-white">Transfer OwnerShip</h2>
                    <input  value={transferOwners} onChange={(e) => settransferOwner(e.target.value)} placeholder="address" />
                    <Button className='btn  bg-blue-700  py-2 px-6 text-white  uppercase
                        rounded-xl font-semibold curse-pointer border-2 border-slate-300
                        hover:bg-slate-700 hover:text-white translation-duration-200 ease-in-out'
                        onClick={() => OwnerShiptransfer()}
                        >
                        Submit
                    </Button>
                </StyledForm>
            </div>
        </Styled>
    )
}

const Styled = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 1em;
`;
