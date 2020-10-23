import React from 'react';
import style from './index.css';
import { WrapLayout } from '@/components/wrapLayout';
import { errorBoundary } from '@/components/errorBoundary';

@errorBoundary
@WrapLayout
export default class ReportDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={`${style.test}`}>res-report-details</div>;
    }
}
