import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="breadcrumbs">
            <Link to="/" className="breadcrumb-item home">
                <Home size={16} />
            </Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                let displayName = name.charAt(0).toUpperCase() + name.slice(1);

                // If it's the last segment and we have a custom name in state, use it
                if (isLast && location.state?.breadcrumbName) {
                    displayName = location.state.breadcrumbName;
                }

                return (
                    <React.Fragment key={index}>
                        <ChevronRight size={14} className="separator" />
                        {isLast ? (
                            <span className="breadcrumb-item active">{displayName}</span>
                        ) : (
                            <Link to={routeTo} className="breadcrumb-item">
                                {displayName}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
