import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={ containerClassnames }
                style={{width: (isOpened)?  '175px' :  "50px"}} >
                <div className='logo-container'>
                            <div className='imageContainer'>

                                    <img src={ logo } alt="TensorFlow logo" />
                            </div>
                            <span className='logoText' 
                            style={{opacity: (isOpened)? 1 : 0, 
                            transition: (isOpened)? " opacity 200ms 150ms" : "opacity 0s" }}>TensorFlow</span>
                   
                    <button className={isOpened ? 'toggle-btn': 'toggle-btn-close'} 
                            onClick={ this.toggleSidebar } >
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                    </button>
                </div>

                <div className='nav-container'>
                    {
                        routes.map((route) => (
                            <div className='route-block active' key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='route-icon' icon={ route.icon } />
                                <span className='route-text' style={{opacity: (isOpened)? 1 : 0,
                                transition: (isOpened)? " opacity 200ms 150ms" : "opacity 0s" }}>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div className='bottom-block'>
                    {
                        bottomRoutes.map((route) => (
                            <div className='route-bottom-block' key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='route-icon' icon={ route.icon } />
                                <span className='route-text'style={{opacity: (isOpened)? 1 : 0,
                                transition: (isOpened)? " opacity 200ms 150ms" : "opacity 0s"}}>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }
}
