import React from 'react';
import TestFixer from '../components/testFixer/index';
import TestSyncDva from '../components/testSyncDva/index';
import WrapLayout from '@/components/wrapLayout/index';
import ErrorBoundary from '@/components/errorBoundary/index';

@ErrorBoundary
@WrapLayout
class Layout extends React.Component {
    render() {
        return (
            <>
                <TestFixer />
                <TestSyncDva />
            </>
        );
    }
}

export default Layout;
