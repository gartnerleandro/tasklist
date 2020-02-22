import React from 'react';
import { mount } from 'enzyme';

import List from './index';

describe('List', () => {
  it('render a list of cards with the elements passed', () => {
    const taks = [
      {
        id: 1,
        title: 'fist',
        body: 'fist body',
      },
      {
        id: 2,
        title: 'second',
        body: 'second body',
      },
      {
        id: 3,
        title: 'third',
        body: 'third body',
      },
    ];
    const wrapper = mount(<List elements={taks} />);

    expect(wrapper.find('.list')).toHaveLength(1);
    expect(wrapper.find('.card')).toHaveLength(3);

    wrapper.unmount();
  });

  it('render an empty list', () => {
    const wrapper = mount(<List />);

    expect(wrapper.find('.list')).toHaveLength(1);
    expect(wrapper.find('.list').html()).toBe('<div class="list">No elements found</div>');
    expect(wrapper.find('.card')).toHaveLength(0);

    wrapper.unmount();
  });
});
