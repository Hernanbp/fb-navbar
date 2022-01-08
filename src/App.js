import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'




export const App = () => {
    return (
        <Navbar>
            <NavItem icon={<PlusIcon />} />
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<MessengerIcon />} />

            <NavItem icon={<CaretIcon />}>
                <DropDownMenu />
            </NavItem>
        </Navbar>
    )
}

const DropDownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);


    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropDownItem = ({ children, leftIcon, rightIcon, goToMenu }) => {
        return (
            <a href="#" className='menu-item' onClick={() => goToMenu && setActiveMenu(goToMenu)}>
                <span className='icon-button'>{leftIcon}</span>
                {children}
                <span className='icon-right'>{rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>

                <div className="menu">
                    <DropDownItem>My Profile</DropDownItem>
                    <DropDownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropDownItem>

                    <DropDownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropDownItem>

                </div>
            </CSSTransition >

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropDownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>My Tutorial</h2>
                    </DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon />}>HTML</DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon />}>CSS</DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon />}>JavaScript</DropDownItem>
                    <DropDownItem leftIcon={<BoltIcon />}>Awesome!</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropDownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropDownItem>
                    <DropDownItem leftIcon="🦘">Kangaroo</DropDownItem>
                    <DropDownItem leftIcon="🐸">Frog</DropDownItem>
                    <DropDownItem leftIcon="🦋">Horse?</DropDownItem>
                    <DropDownItem leftIcon="🦔">Hedgehog</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

const Navbar = ({ children }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {children}
            </ul>
        </nav>
    )
}

const NavItem = ({ children, icon }) => {

    const [open, setOpen] = useState(false);


    return (
        <li className="nav-item">
            <a href="#"
                className="icon-button"
                onClick={() => setOpen(!open)}>
                {icon}
            </a>
            {open && children}
        </li>
    )
}

