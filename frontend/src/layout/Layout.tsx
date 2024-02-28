import React from 'react';
import { ILayout } from '../types/ILayout';

const Layout: React.FC<ILayout> = ({ children }) => {
    return <div style={{margin: '3rem'}}>{children}</div>;
};

export default Layout;
