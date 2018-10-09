import React from 'react';
import ShowTableCellComponent from '../components/ShowTableCellComponent';

class ShowTableCell extends React.Component {
  render() {
    const { content } = this.props;
    return <ShowTableCellComponent content={content} />;
  }
}
export default ShowTableCell;
