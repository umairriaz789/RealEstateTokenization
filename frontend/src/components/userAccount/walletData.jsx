import styled from "styled-components";
import Widget from "../admin/summary-components/Widget";
import { FaUsers, FaCreditCard, FaChartBar, FaClipboard } from "react-icons/fa";
import Chart from "../admin/summary-components/Chart";
import { useEffect, useState } from "react";
import { setHeaders, url } from "../../slices/api";
import axios from "axios";
import AccountData from "./AccountData";
import { Button } from "react-bootstrap";
// import Transactions from "../admin/summary-components/Transactions";
// import LifeTimeData from "../admin/summary-components/LifeTimeData";
import CardSection from "./card";

const WalletData = () => {
  // const [users, setUsers] = useState([]);
  // const [orders, setOrders] = useState([]);
  // const [earning, setEarnings] = useState([]);
  // const [usersPerc, setUsersPerc] = useState(0);
  // const [ordersPerc, setOrdersPerc] = useState(0);
  // const [earningPerc, setEarningsPerc] = useState(0);

  // function compare(a, b) {
  //   if (a._id < b._id) {
  //     return 1;
  //   }
  //   if (a._id > b._id) {
  //     return -1;
  //   }
  //   return 0;
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${url}/users/stats`, setHeaders());

  //       res.data.sort(compare);
  //       setUsers(res.data);
  //       setUsersPerc(
  //         ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${url}/orders/stats`, setHeaders());

  //       res.data.sort(compare);
  //       setOrders(res.data);
  //       setOrdersPerc(
  //         ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
  //       );
  //     } catch (err) {
  //       console.log(err.response.data);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${url}/orders/income`, setHeaders());

  //       res.data.sort(compare);
  //       setEarnings(res.data);
  //       setEarningsPerc(
  //         ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const data = [
    {
      icon: <FaCreditCard />,
      // digits: users[0]?.total,
      isMoney: false,
      title: "Current Rent Balance",
      color: "rgb(102, 108, 255)",
      bgcolor: "rgba(102, 108, 255, 0.12)",
      // percentage: usersPerc,
    },
    {
      icon: <FaClipboard />,
      // digits: orders[0]?.total,
      isMoney: false,
      title: "Property Own",
      color: "rgb(38, 198, 249)",
      bgcolor: "rgba(38, 198, 249, 0.12)",
      // percentage: ordersPerc,
    },

  ];
  return (
    <div className="flex flex-col">
      <div className='text-center mb-9 rounded-2xl justify-round  shadow-blue-700 shadow-xl  font-bold text-4xl'>
        <h1 className='mb-4 text-white-700'>W E L C O M</h1>
      </div>
      <StyledSummary>
        <MainStats>
          <Overview>
            <Title>
              <h2>Overview</h2>
              <p>Get $25 when, your friend invest...</p>
            </Title>
            <WidgetWrapper>
              {data?.map((data, index) => (
                <Widget data={data} key={index} />
              ))}

              <Button className="btn-sm btn-warning text-white ">
                Withdraw Money
              </Button>

            </WidgetWrapper>
          </Overview>
          <CardSection />
        </MainStats>
        <SideStats>
          {/* <Transactions /> */}
          {/* <div>
            <Button className=" btn-warning text-white ">
              <h2>
                Withdraw Money
              </h2>
            </Button>
          </div> */}
          <AccountData />
        </SideStats>
      </StyledSummary>
    </div>
  );
};

export default WalletData;

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
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

const WidgetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SideStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;
`;
