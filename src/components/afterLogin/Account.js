import React from "react";
import styled from "styled-components";
import Acc from "./Acc";

const Account = () => {
  return (
    <Wrapper>
      <WrapperHeader>
        <p>Accounts</p>
        <Acc title="Add another account" />
        <Acc title="Unlock business tools" />
        <p>More options</p>
        <Acc title="Settings" />
        <Acc title="Tune your home feed" />
        <Acc title="install the windows app" />
        <Acc title="Get help" />
        <Acc title="See terms and privacy" />
        <Acc title="Log out" />
      </WrapperHeader>
    </Wrapper>
  );
};

export default Account;
const Wrapper = styled.div`
  position: fixed;
  top: 9%;
  right: 5px;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 450px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;
const WrapperHeader = styled.div`
  p {
    font-size: 12px;
    margin: 10px 10px;
    padding: 5px;
  }
  h1 {
    font-size: 16px;
    margin: 5px 10px;
    padding: 5px;
    :hover {
      background-color: #e1e1e1;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
