import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Navbar tools
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// css import
import "../../css/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartRef } from "../Pages/prods/Cart";
import { styled, Switch, useTheme } from "@mui/material";
import { changeTheme } from "../../rtk/slices/Themes";
import { HiBars3 } from "react-icons/hi2";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  transform: "scale(0.8)",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    backgroundColor: "#f0f0f0",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
const NavbarComponent = () => {
  let cartCount = useSelector((state) => state.cart.products.length);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <svg
                width="138"
                height="28"
                viewBox="0 0 138 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4121 0.118268L10.7761 14.9757L5.14006 0.118268H0V21.0074H3.66717V5.41077L8.92747 19.189H12.6247L17.885 5.41077V21.0074H21.5522V0.118268H16.4121Z"
                  fill="#008ECC"
                />
                <path
                  d="M32.6589 21.3031C35.1838 21.3031 37.1827 20.4308 38.821 18.642L36.296 16.4688C35.244 17.622 34.0416 18.0359 32.689 18.0359C30.3293 18.0359 29.2472 16.735 28.9316 14.7983H39.2418C39.3169 14.5913 39.377 13.9852 39.377 13.3791C39.377 10.0824 37.6787 5.92819 32.4184 5.92819C27.3385 5.92819 25.054 9.83105 25.054 13.6748C25.054 17.6515 27.4888 21.3031 32.6589 21.3031ZM28.9316 12.1964C29.2773 10.3485 30.2241 8.95882 32.3884 8.95882C33.9815 8.95882 35.274 9.74234 35.6497 11.265C35.7399 11.5607 35.77 11.8712 35.77 12.1964H28.9316Z"
                  fill="#008ECC"
                />
                <path
                  d="M49.3566 18.7012C46.6813 18.3759 44.8327 18.3464 44.8327 17.1341C44.8327 16.7941 44.968 16.5428 45.2686 16.3506C46.1252 16.7202 47.0871 16.9271 48.1242 16.9271C51.4156 16.9271 54.2261 14.8279 54.2261 11.5312C54.2261 10.5702 54.0007 9.69799 53.5798 8.95882L55.7591 7.22914L53.8504 4.9377L51.5509 6.87434C50.5439 6.26822 49.3115 5.92819 48.0039 5.92819C44.6824 5.92819 41.8419 8.14572 41.8419 11.3537C41.8419 12.6547 42.3078 13.8226 43.0893 14.754C42.2026 15.5227 41.6916 16.4688 41.6916 17.7698C41.6916 19.189 42.2927 20.076 43.1645 20.6526L41.421 22.1014C41.391 22.2492 41.3609 22.397 41.3609 22.7371C41.3609 25.7677 43.8257 28 48.56 28C52.2873 28 55.203 26.4034 55.203 23.0623C55.203 19.6769 52.1971 19.0707 49.3566 18.7012ZM48.1242 8.72228C49.7323 8.72228 50.589 9.83105 50.589 11.3833C50.589 12.8912 49.7624 13.9852 48.1242 13.9852C46.501 13.9852 45.6293 12.8912 45.6293 11.3833C45.6293 9.83105 46.531 8.72228 48.1242 8.72228ZM48.5299 25.2207C46.7114 25.2207 45.1483 24.7033 44.7125 23.2249L44.6223 22.8258L45.4339 21.4952C46.3507 21.6727 47.2825 21.7466 48.064 21.8205C50.5589 22.0718 51.7312 22.3379 51.7312 23.4615C51.7312 24.6441 50.4687 25.2207 48.5299 25.2207Z"
                  fill="#008ECC"
                />
                <path
                  d="M63.6646 5.92819C60.7038 5.92819 58.795 7.22914 57.3522 9.16579L60.1627 11.1616C60.809 10.0824 61.9662 9.07709 63.6946 9.07709C66.0843 9.07709 66.7456 10.0084 66.8207 12.1964H62.7478C59.3812 12.1964 56.7661 13.2608 56.7661 16.4688C56.7661 19.5586 59.1407 21.3031 62.2217 21.3031C63.9351 21.3031 65.934 20.5639 66.9109 19.0412L67.1364 21.0074H70.1573V12.0486C70.1573 8.44139 67.7526 5.92819 63.6646 5.92819ZM62.9582 18.2577C61.32 18.2577 60.5234 17.5628 60.5234 16.5871C60.5234 15.6558 61.2899 14.7983 62.9582 14.7983H66.8358V14.9166C66.6103 16.661 65.2126 18.2577 62.9582 18.2577Z"
                  fill="#008ECC"
                />
                <path
                  d="M91.0481 0.118268L85.4121 14.9757L79.7761 0.118268H74.636V21.0074H78.3032V5.41077L83.5635 19.189H87.2607L92.521 5.41077V21.0074H96.1882V0.118268H91.0481Z"
                  fill="#008ECC"
                />
                <path
                  d="M106.589 5.92819C103.628 5.92819 101.719 7.22914 100.276 9.16579L103.087 11.1616C103.733 10.0824 104.89 9.07709 106.619 9.07709C109.008 9.07709 109.67 10.0084 109.745 12.1964H105.672C102.305 12.1964 99.69 13.2608 99.69 16.4688C99.69 19.5586 102.065 21.3031 105.146 21.3031C106.859 21.3031 108.858 20.5639 109.835 19.0412L110.06 21.0074H113.081V12.0486C113.081 8.44139 110.677 5.92819 106.589 5.92819ZM105.882 18.2577C104.244 18.2577 103.447 17.5628 103.447 16.5871C103.447 15.6558 104.214 14.7983 105.882 14.7983H109.76V14.9166C109.534 16.661 108.137 18.2577 105.882 18.2577Z"
                  fill="#008ECC"
                />
                <path
                  d="M117.004 21.0074H120.551V14.7687C120.551 11.0137 122.339 9.44667 124.053 9.44667C124.639 9.44667 125.195 9.62408 125.691 9.94931L127.359 6.99261C126.638 6.26822 125.601 5.92819 124.609 5.92819C122.926 5.92819 121.227 6.93347 120.581 8.72228V6.23865H117.004V21.0074Z"
                  fill="#008ECC"
                />
                <path
                  d="M135.265 21.3031C136.362 21.3031 137.444 21.0665 138 20.8596V17.5924C137.504 17.8289 136.677 18.1246 135.911 18.1246C134.949 18.1246 134.243 17.7107 134.243 16.2914V9.25449H138V6.23865H134.243V0L130.636 2.57233V6.23865H128.156V9.25449H130.575V16.9271C130.575 19.6177 132.334 21.3031 135.265 21.3031Z"
                  fill="#008ECC"
                />
              </svg>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" children={<HiBars3 />} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form
              className="d-flex me-auto main-search-input"
              style={{ width: "40%" }}
            >
              <div className="input-container">
                <Form.Control
                  type="search"
                  placeholder="Search essentials, groceries and more..."
                  className="me-2"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
            </Form>
            <div className="right d-flex justify-content-between">
              <Nav.Link
                href=""
                className="cart-icon-container"
                onClick={() => {
                  cartRef.current.classList.toggle("hidden");
                  cartRef.current.classList.toggle("show");
                }}
              >
                <AiOutlineShoppingCart className="cart-icon"></AiOutlineShoppingCart>
                <span>
                  Cart [<span>{cartCount}</span>]
                </span>
              </Nav.Link>
              <Link className="btn btn-primary py-1 px-4">Sign In</Link>{" "}
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked
                onClick={(e) => dispatch(changeTheme())}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
