import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { SearchInput, Button } from '@patternfly/react-core';
import { H2, H6, Div } from './HeaderStyle';




interface IState {
   
}

interface IProps {
    heading: string,
    subTitle: string,
    data: any,
    searchInputValue: any
    handleSearchChange: any
}

class Header extends React.Component<IProps, IState>{
    constructor(props){
        super(props)
    }
  
    render() {
        return (
            <React.Fragment>
               
                <Grid style={{ marginTop: "15px" }}>
                    <GridItem span={6} sm={6} md={6}>
                        <H2>{this.props.heading}</H2>
                        <H6>{this.props.subTitle}</H6>
                    </GridItem>
                    <GridItem span={6} sm={6} md={6}>

                        <SearchInput
                            style={{ marginTop: "10px", marginRight: "15px" }}
                            placeholder='Search here'
                            value={this.props.searchInputValue}
                            onChange={this.props.handleSearchChange}
                            onClear={(evt) => this.props.handleSearchChange('', evt)}
                        />

                    </GridItem>
                   
                </Grid>
            </React.Fragment>
        );
    }
}

export default Header;
