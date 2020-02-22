import React from 'react';
import { shallow } from 'enzyme';

import Card, { CARD_STATUS } from './index';

describe('Card', () => {
  it('render card with the props pased', () => {
    const wrapper = shallow(<Card title="test" body="content" status={CARD_STATUS.UNCOMPLETED} />);

    expect(wrapper.find('.card')).toHaveLength(1);
    expect(wrapper.find('.card').childAt(0).type()).toBe('div');
    expect(wrapper.find('.card').childAt(1).type()).toBe('div');
    expect(wrapper.find('.card-title').html()).toBe('<div class="card-title">test</div>');
    expect(wrapper.find('.card-body').html()).toBe('<div class="card-body">content</div>');
  });
});
