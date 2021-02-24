import React, { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import Login from "./Login";
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
const SignUp = ({ showSignUp, setShowSignUp }) => {
  const classes = useStyles();
  const [login, setLogin] = useState(false);
  return (
    <>
      {showSignUp ? (
        <Wrapper>
          <WrapperHeaderIcon>
            <PinterestIcon className={classes.large} />
          </WrapperHeaderIcon>
          <WrapperCloser>
            <IconButton>
              <ClearIcon
                onClick={() => setShowSignUp((prev) => !prev)}
                className={classes.medium}
              />
            </IconButton>
          </WrapperCloser>
          <h1>Welcome to Pinterset</h1>
          <h4>Find new ideas to try</h4>
          <LoginForm>
            <form>
              <input type="type" placeholder="Email address" />
              <input type="type" placeholder="Create a password" />
              <input type="type" placeholder="Age" />

              <button variant="outlined">Continue</button>
            </form>
          </LoginForm>
          <WrapperBottom>
            <p>
              By continuing, you agree to Pinterest's{" "}
              <span>Terms of Service, Privacy Policy.</span>
            </p>

            <p>
              <span onClick={() => setLogin(true)}>
                Already a member? Log in
              </span>
            </p>
          </WrapperBottom>
        </Wrapper>
      ) : null}
    </>
  );
};

export default SignUp;
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
  z-index: 1000;
  max-width: 450px;
  box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.5);
  padding: 30px;
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
    margin: 10px;
    span {
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
