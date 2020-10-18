import React from 'react';
import Nav from '@/components/nav/index';
import TestFixer from '../components/testFixer/index';
import TestSyncDva from '../components/testSyncDva/index';
import TestAsycDva from '../components/testAsycDva/index';

function Layout() {
    return (
        <>
            <Nav />
            <TestFixer />
            <TestSyncDva />
            <TestAsycDva />
        </>
    );
}

export default Layout;
