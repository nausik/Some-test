import React from 'react';
import { mount } from 'enzyme';
import FullItem from './FullItem.component';

describe('<FullItem/>', () => {
  it('should render properly', () => {
    const wrapper = mount(
      <FullItem
        name="Test"
        image="123"
        price={25}
        description="yo"
      />,
    );

    expect(wrapper.find('FullItem')).toHaveLength(1);
    expect(wrapper.text()).toContain('TestPrice: $25');
    expect(wrapper.text()).toContain('Description: yo');
  });

  it('should not show description when showDescription === false', () => {
    const wrapper = mount(
      <FullItem
        name="Test"
        image="123"
        price={25}
        showDescription={false}
        description="yo"
      />,
    );

    expect(wrapper.text()).not.toContain('Description: yo');
  });
});
