import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, Button, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

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
  return (
    <Wrapper>
      <WrapperLeft>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoWrapper>

        <HomePageButton>
          <a href="#">Home</a>
        </HomePageButton>
        <FollowingButton>
          <a href="#">Following</a>
        </FollowingButton>
      </WrapperLeft>
      <WrapperMiddel>
        <form>
          <SearchIcon />
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </form>
      </WrapperMiddel>
      <WrapperRight>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SmsIcon />
        </IconButton>
        <IconButton>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar
              alt="name"
              src="https://i.pinimg.com/75x75_RS/da/60/0a/da600a18c7357f39c2ac2060979eb851.jpg"
              className={classes.small}
            />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon className={classes.xsmall} />
        </IconButton>
      </WrapperRight>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 12px 4px 4px 16px;
  color: black;
  margin-top: 10px;
  position: sticky;
  top: 0;
  z-index: 100;
  overflow: hidden;
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HomePageButton = styled.div`
  background-color: rgb(17, 17, 17);
  min-width: 123px;
  border-radius: 24px;
  height: 48px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 16px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }
`;

const FollowingButton = styled.div`
  min-width: 123px;
  border-radius: 24px;
  height: 48px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  a {
    text-decoration: none;
    color: rgb(17, 17, 17);
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
`;
const WrapperMiddel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: #e1e1e1;
  border-radius: 24px;
  padding: 8px;
  height: 48px;
  margin-left: 10px;

  form {
    display: flex;
    align-items: center;
    flex: 1;
  }

  input {
    border: none;
    outline: none;
    margin-left: 10px;
    font-size: 16px;
    background-color: transparent;
    flex: 1;
    padding: 10px;
    :hover {
      background-color: transparent;
    }
  }
  button {
    display: none;
  }
  :hover {
    background-color: #d1d1d1;
    transition: all 100ms ease-in;
  }
`;
const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 48px;
  margin-left: 10px;
`;
