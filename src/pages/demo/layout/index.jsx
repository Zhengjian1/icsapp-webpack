import React from 'react';
import Nav from '@/components/nav/index';
import UiErrorTest from '../components/uiErrorTest/index';

function Layout() {
    const navProps = {
        fromPage: 'demo',
        fetchPayload: {
            appType: 6,
            ts: 1603174599247,
            subjectId: 0,
            gradeId: 100,
            categoryId: 5,
        },
    };

    return (
        <>
            <Nav {...navProps} />
            <UiErrorTest />
        </>
    );
}

export default Layout;
