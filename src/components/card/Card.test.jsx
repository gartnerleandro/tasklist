import React from 'react';
import { shallow } from 'enzyme';

import Card, { CARD_STATUS } from './index';

describe('Card', () => {
  it('render card with the props passed', () => {
    const element = {
      title: 'test',
      body: 'content',
      status: CARD_STATUS.PENDING,
    };
    const wrapper = shallow(<Card element={element} />);

    expect(wrapper.find('.card')).toHaveLength(1);
    expect(wrapper.find('.card').childAt(1).type()).toBe('div');
    expect(wrapper.find('.card').childAt(2).type()).toBe('div');
    expect(wrapper.find('.card-title').html()).toBe('<div class="card-title">test</div>');
    expect(wrapper.find('.card-body').html()).toBe('<div class="card-body">content</div>');
  });
});
