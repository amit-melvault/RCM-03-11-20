import React from 'react';
import { Div } from './PeginationStyle'
import { Pagination, PaginationVariant } from "@patternfly/react-core";

interface IState {
  page: any,
  perPage: any
}

interface IProps {
  itemCount: any,
  onSetPage: any,
  perPage: any,
  page: any,
  onPerPageSelect: any,
}

class PaginationTop extends React.Component<IProps, IState>{

  render() {
    return (
      <Div>
        <Pagination
          itemCount={this.props.itemCount}
          perPage={this.props.perPage}
          page={this.props.page}
          onSetPage={this.props.onSetPage}
          widgetId="pagination-options-menu-top"
          onPerPageSelect={this.props.onPerPageSelect}
        />
      </Div>
    );
  }
}
export default PaginationTop;