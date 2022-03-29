import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{display:"flex",justifyContent:"space-around"}}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button> <Link to="/history">History</Link></button>
        <button> <Link to="/mystery">Mystery</Link></button>
        <button> <Link to="/mythology">Mythology</Link></button>
        <button> <Link to="/technology">Technology</Link></button>
      </div>
    </>
  );
};
