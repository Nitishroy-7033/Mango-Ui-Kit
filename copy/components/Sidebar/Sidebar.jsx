import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    LayoutDashboard,
    Bed,
    Users,
    UserSearch,
    LifeBuoy,
    HandCoins,
    Receipt,
    TrendingUp,
    BarChart3,
    UserCog,
    Settings,
    Activity,
    Building2,
    ChevronDown,
    Layout,
    X
} from 'lucide-react';
import { closeSidebar } from '../../store/uiSlice';
import './Sidebar.css';
import logoDark from "../../assets/pg-logo-dark.svg";
import logoLight from "../../assets/pg-logo-light.svg";
const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mode: theme } = useSelector((state) => state.theme);
    const { isSidebarOpen } = useSelector((state) => state.ui);
    const { currentPG, availablePGs } = useSelector(state => state.settings);

    const logo = theme === 'light' ? logoLight : logoDark;

    // Find the current PG name from availablePGs
    const selectedPG = availablePGs.find(pg => pg.id === currentPG);
    const hostelName = selectedPG ? selectedPG.name : 'Select PG Property';

    const mainLinks = [
        { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard' },
        { icon: <Bed size={20} />, label: 'Rooms', path: '/rooms' },
        { icon: <Users size={20} />, label: 'Tenants', path: '/tenants' },
        // { icon: <UserSearch size={20} />, label: 'Inquiries', path: '/inquiries' },
        { icon: <LifeBuoy size={20} />, label: 'Complaints', path: '/complaints', badge: 3 },
    ];

    const financeLinks = [
        { icon: <HandCoins size={20} />, label: 'Rent Collection', path: '/rents' },
        // { icon: <Receipt size={20} />, label: 'Expenses', path: '/expenses' },
        // { icon: <TrendingUp size={20} />, label: 'Income', path: '/income' },
    ];

    const systemLinks = [
        // { icon: <BarChart3 size={20} />, label: 'Reports', path: '/reports' },
        { icon: <UserCog size={20} />, label: 'Staff Management', path: '/staff' },
        { icon: <Layout size={20} />, label: 'Storybook', path: '/storybook' },
        { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    ];

    const renderLinks = (links) => (
        <nav>
            {links.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => dispatch(closeSidebar())}
                >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                </NavLink>
            ))}
        </nav>
    );

    return (
        <>
            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
                onClick={() => dispatch(closeSidebar())}
            />
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-container">
                        <img src={logo} alt="PG-MAN Logo" width={200} height={50} />
                    </div>
                    <button
                        className="sidebar-close-btn"
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="sidebar-scroll">
                    <div className="sidebar-section">
                        <h3 className="section-title">Management</h3>
                        {renderLinks(mainLinks)}
                    </div>

                    <div className="sidebar-section">
                        <h3 className="section-title">Financials</h3>
                        {renderLinks(financeLinks)}
                    </div>

                    <div className="sidebar-section">
                        <h3 className="section-title">Systems</h3>
                        {renderLinks(systemLinks)}
                    </div>
                </div>

                <div className="sidebar-footer">
                    <div
                        className="hostel-selector"
                        onClick={() => {
                            navigate('/settings');
                            dispatch(closeSidebar());
                        }}
                        title="Manage PG Branches"
                    >
                        <div className="hostel-icon">
                            <Building2 size={18} />
                        </div>
                        <div className="hostel-info">
                            <p className="hostel-label">Current Hostel</p>
                            <p className="hostel-name">{hostelName}</p>
                        </div>
                        <ChevronDown size={16} className="selector-arrow" />
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
