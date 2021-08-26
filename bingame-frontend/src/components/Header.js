import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Theme";
import Link from "@material-ui/core/Link";
import { useLocation, useHistory } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Container } from "@material-ui/core";
import { selectUser, logOut } from ".././features/User/UserSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const classes = useStyles();
  const url = useLocation();
  const pathname = url.pathname;
  let history = useHistory();

  const user = useSelector(selectUser);
  console.log(user)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    localStorage.removeItem("bingameUser");
    dispatch(logOut());
    history.push("/");
  }
  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Link
              edge="start"
              href="/"
              variant="h4"
              style={{ textDecoration: "none" }}
            >
              {" "}
              BinGame{" "}
            </Link>
            <div className={classes.grow} />
            {user.loggedIn && pathname !== '/' ? (
              <>
                <Typography
                  variant="body1"
                  color="primary"
                  style={{ marginRight: "10px" }}
                >
                  {" "}
                  Hi {user.data.username}{" "}
                </Typography>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  onClick={logoutHandler}
                >
                  Log Out
                </Button>
              </>
            ) : pathname === "/login" ? (
              <>
                <Typography variant="body1" color="primary">
                  {" "}
                  Don't have an account?{" "}
                </Typography>
                <ArrowRightAltIcon
                  color="primary"
                  style={{ marginRight: "10" }}
                />
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  href="/signup"
                >
                  Sign Up
                </Button>
              </>
            ) : pathname === "/signup" ? (
              <>
                <Typography variant="body1" color="primary">
                  {" "}
                  Already have an account?{" "}
                </Typography>
                <ArrowRightAltIcon
                  color="primary"
                  style={{ marginRight: "10" }}
                />
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  href="/login"
                >
                  Log In
                </Button>
              </>
            ) : (
              ""
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
