
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import MobileCart from '../../components/Cart/MobileCart';

function Header(props) {

    const {
        headerLinks = [],
        currentHeaderLink,
        setCurrentHeaderLink
    } = props

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    function setMode(mode) {
        Auth.lightMode(mode);
    }

    const publicArr = headerLinks.filter((link) => link.guest === true);
    const userArr = headerLinks.filter((link) => link.user === true);
    const adminArr = headerLinks.filter((link) => link.admin === true);

    const headerArr = [];
   
    if (!Auth.loggedIn()) {
        console.log('guest account')
        headerArr.push(publicArr);
    } else {
        if(Auth.getProfileType() === 'admin') {
            console.log('admin account');
            headerArr.push(adminArr)
        } else {
            console.log('user account');
            headerArr.push(userArr);
        }
    }



    return (
            <div className="header-items">

                <div className="header-mobile">
                    <div className="bold logo-name">KING SEAFOOD</div>
                    <div className="night-mode">
                        <div key='night' onClick={() => {setMode('night'); Auth.getMode()}}><i className="far fa-moon header-icon night-right-display"></i></div>
                        <div key='day' onClick={() => {setMode('day'); Auth.getMode()}}><i className="far fa-sun header-icon night-left-display"></i></div>
                    </div>
                </div>
                <div className="header-links-container">
                <input type="checkbox" id="check"/ >
                    <div className="links">
                        <label className="mobile-header-toggle" htmlFor="check"><i className="fas fa-times mobile-icon"></i></label>
                        {Auth.loggedIn() === false && (
                            <>
                        {headerLinks.filter((link) => link.guest === true).map((link) => (
                            <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
                        ))}
                            </>
                        )}
                        {Auth.getAdmin() === true && (
                            <>
                            {headerLinks.filter((link) => link.admin === true).map((link) => (
                                <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
                            ))}
                            </>
                        )}

                        {Auth.getAdmin() === false && (
                            <>
                            {headerLinks.filter((link) => link.user === true).map((link) => (
                                <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
                            ))}
                            </>
                        )}
                        {Auth.loggedIn() && (
                            <Link key='log-out' to="/" className="header-link" onClick={logout} >Log Out</Link>   
                        )}
                        <div className="night-mobile">
                            <div key='night' onClick={() => {setMode('night'); Auth.getMode()}}><i className="far fa-moon header-icon night-header-display"></i></div>
                            <div key='day' onClick={() => {setMode('day'); Auth.getMode()}}><i className="far fa-sun header-icon night-header-display"></i></div>
                        </div>
                    </div>
                  <div className="icons">
                      <Link to="/"><i className="fas fa-home mobile-icon"></i></Link>
                      <Link to="/products"><i className="fas fa-tags mobile-icon"></i></Link>
                      <label htmlFor="mobile-cart">
                        <i className="fas fa-shopping-cart mobile-icon"></i>
                      </label>
                      <label key='list' htmlFor="check" >
                        <i className="fas fa-bars drop-down mobile-icon"></i>
                      </label>
                  </div>
                </div>
                <input type="checkbox" id="mobile-cart" />
                <div className="mobile-component mobile-cart">
                  <label htmlFor="mobile-cart"><i className="fas fa-times mobile-icon"></i></label>
                  <MobileCart />
                </div>
            </div>
    )
}

export default Header;