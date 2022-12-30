import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../components/contract/RealEstate';
import Web3 from 'web3';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
import QRCodeModal from '@walletconnect/qrcode-modal/dist/umd/index.min.js';


export const initialState = {
    web3: null,
    contract: null,
    socketContract: null,
    accounts: [],
    web3loadingerror: null,
}

export const loadBlockchain = createAsyncThunk( "loadBlockchain", async (_, thunkAPI) => {
    try {
        // if(Web3.givenProvider && Web3.givenProvider.chainId ==="0x3"){
        if (Web3.givenProvider) {
            await Web3.givenProvider.enable();
            const web3 = new Web3(Web3.givenProvider);
            console.log('web3', web3)
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log('contract', contract)
            const accounts = await web3.eth.getAccounts();
            //web3 Socket
            const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
                `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
            ))

            const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            return {
                web3,
                accounts,
                contract,
                socketContract,
            }
        }
        else {
            return {
                web3loadingerror: 'errorloading'

            }

        }

    } catch (error) {
        console.log('error', error)

    }
});


export const loadWalletConnect = createAsyncThunk( "loadWalletConnect", async (_, thunkAPI) => {
    try {
        const provider = new WalletConnectProvider({
            rpc: {
              5: "https://goerli.infura.io/v3/b0b0d100567e4e59bb2bab1a2c353381",
            },
            chainId: 5,
          });


        if (provider) {
            await provider.enable();
            const web3 = new Web3(provider);
            console.log('web3', web3)
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log('contract', contract)
            const accounts = await web3.eth.getAccounts();
            //web3 Socket
            // const web3Socket = new Web3(new Web3.providers.WebsocketProvider(
            //     `wss://goerli.infura.io/ws/v3/b0b0d100567e4e59bb2bab1a2c353381`
            // ))

            // const socketContract = new web3Socket.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            return {
                web3,
                accounts,
                contract,
                // socketContract,
            }
        }
        else {
            return {
                web3loadingerror: 'errorloading'

            }

        }

    } catch (error) {
        console.log('error', error)

    }
});



export const updatAccount = createAsyncThunk( "updatAccount", async (data, thunkAPI) => {
    try {
         let accounts = data
            return {
                accounts,
            }
    } catch (error) {
        console.log('error', error)

    }
});


const web3ConnectSlice = createSlice({
    name: 'web3Connect',
    initialState,
    reducers: {},
    extraReducers: {
        [loadBlockchain.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.contract = payload?.contract;
            state.accounts = payload?.accounts;
            state.socketContract = payload?.socketContract;

        },

        [loadWalletConnect.fulfilled.toString()]: (state, { payload }) => {
            state.web3 = payload?.web3;
            state.contract = payload?.contract;
            state.accounts = payload?.accounts;
            // state.socketContract = payload?.socketContract;

        },
        [updatAccount.fulfilled.toString()]: (state, { payload }) => {
            state.accounts = payload?.accounts;
        }
    }
})

export const web3Reducer = web3ConnectSlice.reducer;
