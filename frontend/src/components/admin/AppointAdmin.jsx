import React, { useState , useEffect} from 'react';
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { StyledForm } from "../auth/StyledForm";
import { ADDRESSES } from "../../slices/adminEventSlice";
import { useAppSelector, useAppDispatch } from '../../reducer/store';



export const AppointAdmin = () => {

    
    const [admin, setadmin] = useState();
    const [adminEvent, setadminEvent] = useState();
    const dispatch = useAppDispatch()
    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);



    const GrantPropertyOwner = async() => {
        try {
            let PropertyOwner = await contract?.methods.GrantPropOwnerRole(admin).send({from: accounts[0]})
            console.log(' Prperty Admin', PropertyOwner);
            // dispatch(ADDRESSES(admin))
        } catch (error) {
            console.log("Prperty Admin Error", error)
        }
    
    }

    const listenAdminEvent = () => {
        socketContract.events.PropertyAdmin({}, function (error, event) {
            setadminEvent(event.returnValues[0])
            dispatch(ADDRESSES(event.returnValues[0]))
            // console.log(event.returnValues[0])
        })
    }

    useEffect(() => {
        if (socketContract) {
            async function EventAdminProp() {
                !adminEvent && await listenAdminEvent();
            }
            EventAdminProp();

        }
    }, [socketContract, adminEvent])


    return (
        <Styled>
            <div>
                <StyledForm>
                    <h2 className="flex-1 font-poppins text-center font-semibold ss:text-[22px] text-[16px] text-white">Register Admin</h2>
                    <input value={admin} onChange={(e) => setadmin(e.target.value)} placeholder="address" />
                    <Button className='btn  bg-blue-700  py-2 px-6 text-white  uppercase
                                rounded-xl font-semibold curse-pointer border-2 border-slate-300
                                hover:bg-slate-700 hover:text-white translation-duration-200 ease-in-out'
                                onClick={() => GrantPropertyOwner()}
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