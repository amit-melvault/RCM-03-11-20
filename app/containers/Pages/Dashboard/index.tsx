import { Card } from '@patternfly/react-core';
import React, { Component } from 'react';
import Cards from './Cards'
import Charts from './Charts';

import { H1, P } from './DashboardStyle'


export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <H1>DashBoard</H1>
                    <P>Create, Import & Manage your Dashboard here</P>
                </div>
                
                   <Cards />
                   <Charts />
                
            </React.Fragment>
        )
    }
}
