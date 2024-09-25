const Sidebar = ({Display, setDisplay}) => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "280px"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4"><img src="https://user-images.githubusercontent.com/68281476/156367921-605d871b-ea47-4f2b-b8ff-f8667b2e1d46.png" width={170} alt="" /></span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={()=> setDisplay("Home")}>
                    <a href="#" className={`nav-link text-white ${Display === 'Home' &&'active'}`} aria-current="page">Home</a>
                </li>
                <li onClick={() => setDisplay("Create Post")}>
                    <a href="#" className={`nav-link text-white ${Display === 'Create Post' &&'active'}`}>Create Post</a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Aditya</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
