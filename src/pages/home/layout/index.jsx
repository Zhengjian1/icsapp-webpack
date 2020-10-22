import React from 'react';
import TestFixer from '../components/testFixer/index';
import TestSyncDva from '../components/testSyncDva/index';
import NavHeight from '../components/navHeight/index';
import WrapLayout from '@/components/WrapLayout/index';

function Layout() {
    return (
        <>
            <TestFixer />
            <TestSyncDva />
        </>
    );
}

export default WrapLayout({ NavHeight })(Layout);
