import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { FaStore, FaClipboard, FaTachometerAlt } from "react-icons/fa";

const DashBoards = () => {
//   const auth = useSelector((state) => state.auth);

//   if (!auth.isAdmin) return <p>Access denied. Not an Register!</p>;

  return (
    <StyledDashboard className="text-white">
      <SideNav>
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/account/assertsOverview"
        >
          <FaTachometerAlt /> Asserts Overview
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/account/listproperty"
        >
          <FaTachometerAlt /> List Property
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/account/transections"
        >
          <FaStore /> Transection History
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/account/setting"
        >
          <FaClipboard /> Setting
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/account/proposals"
        >
          <FaClipboard /> Proposals
        </NavLink>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
};

export default DashBoards;

const StyledDashboard = styled.div`
  display: flex;
  height: auto;
  width: auto;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1.5rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 700;

    svg {
      margin-right: 0.5rem;
      font-size: 18px;
    }
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;
