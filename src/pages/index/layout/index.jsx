import React from 'react';
import TestFixer from '../components/testFixer/index';
import { NavBar } from 'antd-mobile';

function Layout() {
    return (
        <>
            <NavBar>测试</NavBar>
            <TestFixer />
        </>
    );
}

export default Layout;
