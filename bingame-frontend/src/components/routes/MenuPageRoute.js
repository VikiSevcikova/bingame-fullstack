import { Redirect, Route } from "react-router-dom";

const MenuPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("authToken") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  };

export default MenuPageRoute;
