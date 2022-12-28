import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import ScrollSpyMenu from "../../common/components/ScrollSpyMenu";
import { useRouter } from "next/router";

import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { search } from "react-icons-kit/feather/search";
import Logo from "../../common/components/UIElements/Logo";
import Button from "../../common/components/Button";
import Container from "../../common/components/UI/Container";
import useOnClickOutside from "../../common/hooks/useOnClickOutside";
import NavbarWrapper, { MenuArea, MobileMenu, Search } from "./navbar.style";
import LogoImage from "../../common/assets/image/favicon.png";
import LogoImageAlt from "../../common/assets/image/favicon.png";

import { navbar } from "../../common/data";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { navMenu } = navbar;
  const [state, setState] = useState({
    search: "",
    searchToggle: false,
    mobileMenu: false,
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Perform localStorage action
    setUser(localStorage.getItem("user"));
  }, []);

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === "search") {
      setState({
        ...state,
        search: "",
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === "menu") {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = (event) => {
    event.preventDefault();

    if (state.search !== "") {
      console.log("search data: ", state.search);

      setState({
        ...state,
        search: "",
      });
    } else {
      console.log("Please fill this field.");
    }
  };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };
  const router = useRouter();

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/"
          logoSrc={LogoImage}
          title="Bitvest"
          className="main-logo"
        />
        <Logo
          href="/"
          logoSrc={LogoImageAlt}
          title="Bitvest"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? "active" : ""}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler("search")}
            />
          </Search>
          {/* end of search */}
          {!user ? (
            <AnchorLink href="#home" offset={84}>
              <Button
                className="trail"
                title="Login"
                onClick={() => router.push("/login")}
              />
            </AnchorLink>
          ) : null}

          {user ? (
            <AnchorLink href="#home" offset={84}>
              <Button
                className="trail"
                title="Withdraw"
                onClick={() => {
                  alert("Make an investment before withdrawing");
                }}
              />
            </AnchorLink>
          ) : null}

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler("menu")}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? "active" : ""}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          {!user ? <Button title="Login" /> : null}
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
