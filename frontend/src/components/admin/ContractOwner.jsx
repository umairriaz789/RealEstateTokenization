import { Button } from "react-bootstrap";
import styled from "styled-components";
import styles, { layout } from "../../style";
import { login } from "../../assets";
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { useState, useEffect } from 'react';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';
import { AppointAdmin } from "./AppointAdmin";
import { TransferOwnership } from "./TransferOwnership";
import { meta, walet } from "../../assets";


export const ContractOwner = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [isOwner, setisOwner] = useState(false);
    const [ownerAddress, setownerAddress] = useState();
    const [accountAdmin, setaccountAdmin] = useState();
    const dispatch = useAppDispatch()
    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
    const { adminaddress} = useAppSelector((state) => state.AdminAddress);
    const handleblockchain = () => {
        dispatch(loadBlockchain());
        // setIsConnected(true);
        if (accountAdmin === ownerAddress) {
            setIsConnected(true);
            setisOwner(true);
        } else {
            alert("You are not owner")
        }
    };


    const handleWalletConnect = () => {
        dispatch(loadWalletConnect());
        // setIsConnected(true);
        if (account() === ownerAddress) {
            setIsConnected(true);
            setisOwner(true);
        } else {
            alert("You are not owner")
        }
    };


    const onDisconnect = () => {
        setIsConnected(false);
        setisOwner(false);
    }

    // Owner of the contract
    const ownerOfContract = async () => {
        try {
            let owner = await contract?.methods.Owner().call()
            console.log(owner)
            setownerAddress(owner);
        } catch (error) {
            console.log("Contract Owner Error", error)
        }

    }



    useEffect(() => {
        if (socketContract) {
            async function contractOwner() {
                await ownerOfContract();
            }
            contractOwner();
            account();

        }
    }, [socketContract, contract, accounts])



    // get accounts
    const account = async () => {
        const acount = await accounts[0];
        console.log(account);
        setaccountAdmin(acount);
    }


    // Account Switching
    window.ethereum.on('accountsChanged', async (data) => {
        dispatch(updatAccount(data));
    })
    // NetworkSwitching
    const NetworkSwitch = async () => {
        try {
            await web3.currentProvider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: "0x421613" }]
            })
        } catch (error) {
            if (error.code == 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: "0x61",
                            chainName: "BSC Testnet",
                            nativeCurrency: {
                                name: "BSC",
                                symbol: "BNB",
                                decimals: 18,
                            },
                            blockExplorerUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                        }]
                })
            }
            console.log("Network Switching Error", error)
        }
    }

    return (
        <div>
            <div>
                {!isConnected && (
                    <div className={layout.sectionReverse}>
                        <div className={layout.sectionImgReverse}>
                            <img loading="lazy" src={login} alt="billing" className="w-[95%] h-[95%] relative z-[5]" />
                        </div>
                        <div className={layout.sectionInfo}>
                            <h2 className={styles.heading2}>
                                Owner of The<br className="sm:block hidden" /> Real Estate Contract
                            </h2>
                            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                                <img loading="lazy" src={meta} alt="meta"
                                    className="w-[50%] h-[50%] object-contain cursor-pointer"
                                    onClick={() => handleblockchain()}
                                />
                                <img loading="lazy" src={walet} alt="walet"
                                    className="w-[50%] h-[50%] object-contain cursor-pointer"
                                    onClick={() => handleWalletConnect()}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {isConnected && isOwner && (
                <div >
                    <StyledSummary>
                        <MainStats>
                            <Overview>
                                <Title>
                                    <h2>Current Owner</h2>
                                    {accountAdmin}
                                    <p>Owner Address: {ownerAddress}</p>
                                    {adminaddress}
                                </Title>
                            </Overview>

                            <Overview className="mt-7">
                                <Title>
                                    <h2>Overview</h2>
                                    <p>Get $25 when, your friend invest...</p>
                                </Title>
                            </Overview>
                        </MainStats>
                        <SideStats>
                            <Button onClick={() => onDisconnect()}>
                                R E S E T
                            </Button>
                            <Button onClick={() => NetworkSwitch()}>
                                Switch Network
                            </Button>
                            <AppointAdmin />
                            <TransferOwnership />
                        </SideStats>
                    </StyledSummary>
                </div>
            )}
            <div className="mt-5">
                <p className="font-poppins mt-6 font-normal text-center text-[18px] leading-[27px] text-white">
                    Copyright Ⓒ 2022 SecondaryDAO. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}


const StyledSummary = styled.div`
  width: 100%;
  display: flex;
`;

const MainStats = styled.div`
  flex: 2;
  width: 100%;
`;

const Title = styled.div`
  p {
    font-size: 14px;
    color: rgba(234, 234, 255, 0.68);
  }
`;

const Overview = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  width: 100%;
  padding: 1.5rem;
  height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;
`;

