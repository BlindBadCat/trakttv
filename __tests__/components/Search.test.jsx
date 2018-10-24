import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../src/components/SearchContainer';

describe('<Search />', () => {
  it('Should handle Search Submit', () => {
    const submitMock = jest.fn();
    const wrapper = shallow(<Search handleSubmit={submitMock} />);
    wrapper.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  });
});
