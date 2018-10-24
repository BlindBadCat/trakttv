import React from 'react';
import { shallow } from 'enzyme';
import CategoriesContainer from '../../src/components/CategoriesContainer/CategoriesCotainer';

describe('<CategoriesContainer />', () => {
  let container;
  const handleSelect = jest.fn();

  beforeEach(() => {
    container = shallow(<CategoriesContainer handleSelect={handleSelect} />);
  });

  it('should render component', () => {
    container.find('select').simulate('change');
    expect(handleSelect.mock.calls.length).toEqual(1);
  });

  it('should has options', () => {
    expect(container.find('option').length).toMatchSnapshot();
  });
});
