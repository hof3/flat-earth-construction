import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Flat Earth Construction</h1>
            <div className="links">
                <Link to="/flat-earth-construction">Home</Link>
                <Link to="/flat-earth-construction/newconstruction" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Construction Project</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;