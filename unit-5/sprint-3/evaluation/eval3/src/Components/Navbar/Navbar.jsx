import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{display:"flex",justifyContent:"space-around"}}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button> <Link to="/section/History">History</Link></button>
        <button> <Link to="/section/Mystery">Mystery</Link></button>
        <button> <Link to="/section/Mythology">Mythology</Link></button>
        <button> <Link to="/section/Technology">Technology</Link></button>
      </div>
    </>
  );
};
