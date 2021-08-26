import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/User/UserSlice";

const MenuPageRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);

  return (
      <Route
        {...rest}
        render={(props) =>
          user.loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  };

export default MenuPageRoute;
