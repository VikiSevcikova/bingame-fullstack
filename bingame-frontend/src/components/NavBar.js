import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "../components/Theme";
import Link from "@material-ui/core/Link";
import { useLocation } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function NavBar() {
  const classes = useStyles();
  const url = useLocation();
  const pathname = url.pathname;

  return (
    <div className={classes.navBar}>
      <AppBar position="static">
        <Toolbar>
          <Link
            edge="start"
            href="/"
            variant="h5"
            style={{ textDecoration: "none" }}
          >
            {" "}
            BinGame{" "}
          </Link>
          <div className={classes.grow} />
          {pathname === "/login" ? (
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
      </AppBar>
    </div>
  );
}
