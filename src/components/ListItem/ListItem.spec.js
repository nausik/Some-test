import React from 'react';
import { mount } from 'enzyme';
import ListItem from './ListItem.component';

describe('<ListItem/>', () => {
  it('should render properly', () => {
    const wrapper = mount(
      <ListItem
        name="Test"
        image="123"
        price={25}
      />,
    );

    expect(wrapper.find('ListItem')).toHaveLength(1);
  });
});
