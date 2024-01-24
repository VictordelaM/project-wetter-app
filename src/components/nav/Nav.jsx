import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to = "/detail"><button>Hamburg</button></Link>
            <Link to = "/berlin"><button>Berlin</button></Link>
            <Link to = "/koeln"><button>Köln</button></Link>
            <Link to = "/australien"><button>Australien</button></Link>
        </nav>
        </>
    );
}

export default Nav;