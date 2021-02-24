import React, { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import SignUp from "./SignUp";
import Modal from "react-modal";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    color: "#e60023",
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: "#e60023",
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const Login = ({ showModel, setShowModle }) => {
  const classes = useStyles();

  return (
    <>
      {showModel ? (
        <>
          <Wrapper style={{ opacity: showModel ? "1" : "0" }}>
            <WrapperHeaderIcon>
              <PinterestIcon className={classes.large} />
            </WrapperHeaderIcon>
            <WrapperCloser>
              <IconButton>
                <ClearIcon
                  onClick={() => setShowModle((prev) => !prev)}
                  className={classes.medium}
                />
              </IconButton>
            </WrapperCloser>
            <h1>Welcome to Pinterset</h1>
            <LoginForm>
              <form>
                <input type="type" placeholder="Email" />
                <input type="type" placeholder="Password" />
                <h5>Forgotten your passord?</h5>
                <button variant="outlined">Log in</button>
              </form>
            </LoginForm>
            <WrapperBottom>
              <p>
                By continuing, you agree to Pinterest's{" "}
                <span>Terms of Service, Privacy Policy.</span>
              </p>
              <div />
              <p>
                <span>Not on Pinterest yet? Sign-up</span>
              </p>
            </WrapperBottom>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

export default Login;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 14px;
  flex-direction: column;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  max-width: 450px;
  height: 78vh;
  overflow: hidden;
  padding: 30px;
  z-index: 1000;
  box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.5);
`;

const WrapperHeaderIcon = styled.div`
  margin-bottom: 20px;
`;
const LoginForm = styled.div`
  margin: 20px;
  form {
    flex-direction: column;
    display: flex;
    align-items: center;
    h5 {
      font-size: 16px;
      margin: 10px;
    }
    input {
      width: 280px;
      height: 45px;
      border-radius: 14px;
      margin: 5px;
      outline: none;
      padding: 8px;
    }

    button {
      width: 280px;
      height: 45px;
      margin: 20px;
      border-radius: 24px;
      background-color: #e60023;
      color: #fff;
      outline: none;
      border: none;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const WrapperCloser = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;

const WrapperBottom = styled.div`
  p {
    text-align: center;
    max-width: 280px;
    font-size: 12px;
    span {
      font-weight: 700;
      cursor: pointer;
    }
  }
  div {
    border-bottom: 1px solid #e1e1e1;
    margin: 20px 75px;
  }
`;
