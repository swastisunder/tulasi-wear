import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-900 p-4 sticky top-0 z-50">
        <div className="bg-black text-green-400 font-mono text-lg p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <p className="mb-2 text-gray-400">dev@project:~$</p>
          <p>
            $ git commit -m{" "}
            <span className="text-yellow-300">
              "Project in progress... don't judge 😅"
            </span>
          </p>
        </div>
      </div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Tulasi Wear</p>
        </div>
        <ul className="nav-menu">
          <li>
            Shop <hr />
          </li>
          <li>
            Men <hr />
          </li>
          <li>
            Women <hr />
          </li>
          <li>
            Kids <hr />
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
