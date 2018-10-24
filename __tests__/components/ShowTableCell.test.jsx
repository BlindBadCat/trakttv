import React from 'react';
import { shallow } from 'enzyme';
import ShowTableCellComponent from '../../src/components/ShowTableCellComponent';

describe('<ShowTableCellComponent />', () => {
  it('Should render content', () => {
    const cell = shallow(<ShowTableCellComponent content="Hello World!" />);
    const result = <td style={{ fontSize: 25 }}>Hello World!</td>;
    expect(cell.contains(result)).toMatchSnapshot();
  });
});
