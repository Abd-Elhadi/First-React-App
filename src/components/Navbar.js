import logo from '../images/logo192.png'
export default function Navbar(props) {
    return (
        <nav
            className={props.darkMode ? 'dark' : ''}
        >
            <img
                className='nav-logo_icon'
                src={logo} width={40} alt='logo' 
            />
            <h3 className='nav-logo_text'>ReactFacts</h3>

            <div className='toggler'
            >
                <p className='toggler-light'>Light</p>
                <div>
                    <label>
                        <input class="toggle-checkbox" type="checkbox"  checked={props.darkMode} />
                        <div
                            class="toggle-switch"
                            onClick={props.toggleDarkMode}
                        />
                    </label>
                </div>
                <p className='toggler-dark'>Dark</p>
            </div>
        </nav>
        // <nav className='header'>
        //     <div className='logo'>
        //     </div>
        //     <h3>React Course - Project 1</h3>
        // </nav>

    )
}

