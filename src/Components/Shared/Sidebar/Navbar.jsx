import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();

    navigate("/login")
      .then(() => {})
      .then((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-between mx-12 my-12">
        <h2 className="text-4xl mx-6 font-bold text-violet-900">DAILY NOTES</h2>
        <div>
          {user ? (
            <div>
              <button onClick={handleLogout} to="signup">
                <p className="text-2xl m-2">
                  <FaSignOutAlt />
                </p>
              </button>
            </div>
          ) : (
            <div className="flex justify-around">
              <p className="text-2xl m-2 hover:underline transition ease-in-out">
                <Link to="login">Login</Link>
              </p>
              <Link to="signup">
                <p className="text-2xl m-2  hover:underline transition ease-in-out">
                  Sign Up
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
