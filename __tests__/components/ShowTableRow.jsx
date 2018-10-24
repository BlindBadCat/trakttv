import React from 'react';
import { shallow } from 'enzyme';
import ShowTableRowComponent from '../../src/components/ShowTableRowComponent';

describe('<ShowTableRow />', () => {
  it('Should render correctly', () => {
    const children = <td>HW!</td>;
    const row = shallow(<ShowTableRowComponent children={children}/>);
    const result = <tr><td>HW!</td></tr>;
    expect(row.contains(result)).toEqual(true);
  });
});
