import React from 'react';
import Nav from '@/components/nav/index';
import TestFixer from '../components/testFixer/index';
import TestSyncDva from '../components/testSyncDva/index';

function Layout() {
    const navProps = {
        fromPage: 'home',
        fetchPayload: {
            appType: 5,
            ts: 1602997115180,
        },
    };
    return (
        <>
            <Nav {...navProps} />
            <TestFixer />
            <TestSyncDva />
        </>
    );
}

export default Layout;
