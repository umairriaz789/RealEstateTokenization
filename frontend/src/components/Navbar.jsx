import { useState } from "react";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { close, logos, menu } from "../assets";
import { navLinks } from "../constants";
import styled from "styled-components";
import { regLinks } from "../constants";
import { checkLink } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isNavShow, setisNavShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  // const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logos} alt="hoobank" className="w-[224px] h-[62px]" onClick={() => setToggle(false)} />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.path}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-20"}`}
            onClick={() => setActive(nav.name)}
          >
            <NavLink to={nav.path}>{nav.name}</NavLink>
          </li>
        ))}
        {auth._id ? (
          <Links>
            {auth.isAdmin ? (
              <div>
                {checkLink.map((nav, index) => nav.name == "Admin" ? (
                  <li
                    key={nav.path}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                      } ${index === 0 ? "ml-20" : "mr-20"} ${index === checkLink.length - 1 ? "mr-0" : "mr-20"}`}
                    onClick={() => setActive(nav.name)}
                  >
                    <NavLink to={nav.path}>{nav.name}</NavLink>
                  </li>
                ) : null
                )}
              </div>
            ) : (
              <div>
                {checkLink.map((nav, index) => nav.name == "Account" ? (
                  <li
                    key={nav.path}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                      } ${index === 0 ? "ml-20" : "mr-20"} ${index === checkLink.length - 1 ? "ml-20" : "mr-20"}`}
                    onClick={() => setActive(nav.name)}
                  >
                    <NavLink to={nav.path}>{nav.name}</NavLink>
                  </li>
                ) : null
                )}
              </div>
            )}
            <div className={`font-poppins font-normal cursor-pointer text-[16px] ${"text-gray-400"}`}
              onClick={() => {
                dispatch(logoutUser(null));
                toast.warning("Logged out!", { position: "bottom-left" });
              }}
            >
              Logout
            </div>
          </Links>
        ) : (
          <div>
            {regLinks.map((nav, index) => (
              <dev
                key={nav.path}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                  } ${index === 0 ? "ml-20" : "mr-20"} ${index === regLinks.length - 1 ? "mr-0" : "mr-20"}`}
                onClick={() => setActive(nav.name)}
              >
                <NavLink to={nav.path} onClick={() => setToggle(prev => !prev)}>{nav.name}</NavLink>
              </dev>
            ))}
          </div>
        )}
      </ul>



      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">

            {navLinks.map((nav, index) => (
              <li
                key={nav.path}

                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <NavLink to={nav.path} onClick={() => setToggle(prev => !prev)}>{nav.name}</NavLink>

              </li>
            ))}
            {auth._id ? (
              <Links>
                {auth.isAdmin ? (
                  <div>
                    {checkLink.map((nav, index) => nav.name == "Admin" ? (
                      <dev
                        key={nav.path}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                          } ${index === 0 ? "ml-0" : "mr-0"} ${index === checkLink.length - 1 ? "mr-0" : "ml-0"}`}
                        onClick={() => setActive(nav.name)}
                      >
                        <NavLink to={nav.path} onClick={() => setToggle(prev => !prev)}>{nav.name}</NavLink>
                      </dev>
                    ) : null
                    )}
                  </div>
                ) : (
                  <div>
                    {checkLink.map((nav, index) => nav.name == "Account" ? (
                      <dev
                        key={nav.path}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                          } ${index === 0 ? "ml-0" : "mr-0"} ${index === checkLink.length - 1 ? "mr-0" : "ml-0"}`}
                        onClick={() => setActive(nav.name)}
                      >
                        <NavLink to={nav.path} onClick={() => setToggle(prev => !prev)}>{nav.name}</NavLink>
                      </dev>
                    ) : null
                    )}
                  </div>
                )}
                <div className={`font-poppins font-normal cursor-pointer text-[16px] ${"text-gray-400"}`}
                  onClick={() => {
                    dispatch(logoutUser(null));
                    toast.warning("Logged out!", { position: "bottom-left" });
                  }}
                >
                  Logout
                </div>
              </Links>
            ) : (
              <div className="list-none flex justify-end items-start flex-1 flex-col">
                {regLinks.map((nav, index) => (
                  <dev
                    key={nav.path}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.name ? "text-white" : "text-dimWhite"
                      } ${index === 0 ? "ml-0" : "mr-20"} ${index === regLinks.length - 1 ? "mr-0" : "mr-20"}`}
                    onClick={() => setActive(nav.name)}
                  >
                    <NavLink to={nav.path} onClick={() => setToggle(prev => !prev)}>{nav.name}</NavLink>
                  </dev>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Links = styled.div`
  color: white;
  display: flex;
  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;