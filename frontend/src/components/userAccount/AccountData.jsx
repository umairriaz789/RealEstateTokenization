import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { useState, useEffect } from 'react';
import { loadBlockchain } from '../../slices/web3ContractSlice';

const LifeTimeData = () => {


    const [userbalance, setuserbalance] = useState();

    //LOAD BLOKCHAIN
    const dispatch = useAppDispatch()
    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);


    const handleblockchain = () => {
        dispatch(loadBlockchain());
    };




    // balance of contract
    const balanceOf = async () => {
        try {
            let balance = await contract?.methods.balanceOf(accounts[0]).call()
            setuserbalance(balance);

        } catch (error) {
            console.log("error", error)

        }
    }
  // get accounts
  const account = accounts[0];
  


    useEffect(() => {
        if (contract) {
          balanceOf();   
        }
      }, [contract])



    return (
        <div>
            {web3 ?
                (
                    <Main>
                        <h3>Account Details
                            <span>
                                <Button className="ml-14  btn-warning text-white " onClick={() => handleblockchain()}>Connect to wallet</Button>
                            </span>
                        </h3>
                        <Info>
                            <Title>Account Number</Title>
                            <Data className="mt-1 font-medium text-[8px]" style={{ color: "#fcdf03" }}> {account}</Data>
                        </Info>
                        {/* <Info>
                            <Title>Token Type</Title>
                            <Data >vlaue</Data>
                        </Info> */}
                        <Info>
                            <Title>Account Balance</Title>
                            <Data>{userbalance}</Data>
                        </Info>
                        <Info>
                            <Title>Deatail</Title>
                            <Data>vlaue</Data>
                        </Info>
                    </Main>
                ) : (
                    <Main>
                        <h3>Account Details
                            <span>
                                <Button className="ml-14  btn-warning text-white " onClick={() => handleblockchain()}>Connect to wallet</Button>
                            </span>
                        </h3>
                    </Main>
                )

            }
        </div>
    );
};

export default LifeTimeData;

const Main = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  margin-top: 0 rem;
  border-radius: 5px;
  padding: 1rem;
  font-size: 14px;
`;

const Info = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0.3rem;
  border-radius: 3px;
  background: rgba(38, 198, 249, 0.12);

  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`;
const Title = styled.div`
  flex: 1;
`;
const Data = styled.div`
  flex: 1;
  font-weight: 600;
`;
// margin-top: 0.6rem;
// font-size: 0.6rem;