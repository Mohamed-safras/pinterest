import styled from "styled-components";
import React, { useState } from "react";
import { Button, colors } from "@material-ui/core";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";

import SignUp from "./SignUp";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: "#e60023",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  xsmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
const Header = () => {
  const classes = useStyles();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showModel, setShowModle] = useState(false);
  const openModel = () => {
    setShowModle((prev) => !prev);
  };
  const signUpOpen = () => {
    setShowSignUp((prev) => !prev);
  };
  return (
    <>
      {showModel ? <Overlay /> : null}
      {showSignUp ? <Overlay /> : null}
      <Wrapper>
        <WrapperLeft>
          <PinterestIcon className={classes.small} />
          <h3>Pinterest</h3>
        </WrapperLeft>
        <WrapperRight>
          <Links>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <LoginBotton>
              <button onClick={openModel}>Log in</button>
            </LoginBotton>
            <SignUpButton>
              <button onClick={signUpOpen} variant="outlined">
                Sign up
              </button>
            </SignUpButton>
          </Links>
        </WrapperRight>
      </Wrapper>

      <Login showModel={showModel} setShowModle={setShowModle} />
      <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  overflow: hidden;
`;
const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: #e60023;
    font-size: 20px;
  }
`;
const WrapperRight = styled.div`
  display: flex;
  align-items: center;
`;
const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: rgb(17, 17, 17);
    font-weight: 700;
    font-size: 16px;

    :hover {
      text-decoration: underline;
    }
  }
  li {
    list-style-type: none;
    margin: 0 24px 0 0;
  }
`;
const LoginBotton = styled.div`
  button {
    min-width: 70.1px;
    border-radius: 24px;
    height: 40px;
    justify-content: center;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 16px;
    background-color: #e60023;
    color: #fff;
    border: none;
    outline: none;
    font-weight: 700;
  }
`;
const SignUpButton = styled.div`
  Button {
    min-width: 70.1px;
    border-radius: 24px;
    height: 40px;
    justify-content: center;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 16px;
    border: none;
    outline: none;
    font-weight: 700;
    margin-left: 20px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;
