import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Moon, Sun, ArrowUpCircle, LogOut, User, Settings, Crown, Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { toggleSidebar } from '../../store/uiSlice';
import { logout } from '../../pages/LoginPage/Actions/AuthSlice';
import { useNavigate } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector((state) => state.theme.mode);
    const { user } = useSelector((state) => state.auth);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [activeSubscription, setActiveSubscription] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const subData = localStorage.getItem('activeSubscription');
        if (subData) {
            setActiveSubscription(JSON.parse(subData));
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <header className="app-bar">
            <button
                className="menu-toggle-btn"
                onClick={() => dispatch(toggleSidebar())}
                title="Toggle Sidebar"
            >
                <Menu size={20} />
            </button>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search tasks, tenants..."
                    className="search-input-full"
                />
            </div>

            <div className="app-bar-actions">
                {activeSubscription && (
                    <div className={`plan-badge ${activeSubscription.planName?.toLowerCase()}`}>
                        <Crown size={14} className="medal-icon" />
                        <span>{activeSubscription.planName} Plan</span>
                    </div>
                )}

                {activeSubscription?.planName?.toLowerCase() === 'free' && (
                    <button className="upgrade-btn" onClick={() => navigate('/settings')}>
                        <ArrowUpCircle size={18} />
                        <span>Upgrade</span>
                    </button>
                )}

                <div className="divider" />

                <button
                    className="icon-btn"
                    onClick={() => dispatch(toggleTheme())}
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                <button className="icon-btn notification-btn">
                    <Bell size={20} />
                    <span className="notification-dot"></span>
                </button>

                <div className="user-profile" ref={menuRef}>
                    <div
                        className="user-profile-trigger"
                        onClick={() => setShowUserMenu(!showUserMenu)}
                    >
                        <div className="user-avatar">
                            <img src="https://i.pravatar.cc/150?u=current-user" alt="User" />
                        </div>
                        <div className="user-details">
                            <span className="user-name">{user?.fullName || 'User'}</span>
                            <ChevronDown size={14} className={`dropdown-icon ${showUserMenu ? 'rotated' : ''}`} />
                        </div>
                    </div>

                    {showUserMenu && (
                        <div className="user-dropdown-menu">
                            <div className="dropdown-header">
                                <div className="dropdown-user-info">
                                    <span className="dropdown-name">{user?.fullName || 'User'}</span>
                                    <span className="dropdown-email">{user?.number || user?.role || 'user@pgman.com'}</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={() => navigate('/settings')}>
                                <User size={16} />
                                <span>My Profile</span>
                            </button>
                            <button className="dropdown-item" onClick={() => navigate('/settings')}>
                                <Settings size={16} />
                                <span>Settings</span>
                            </button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item logout" onClick={handleLogout}>
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AppBar;
