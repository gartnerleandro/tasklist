import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('Tasklist app render', () => {
  it('render a list of cards and add button', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.app')).toHaveLength(1);
    expect(wrapper.find('.header')).toHaveLength(1);
    expect(wrapper.find('.header').childAt(0).type()).toBe('button');
    expect(wrapper.find('.list')).toHaveLength(1);
    expect(wrapper.find('.modal')).toHaveLength(0);

    wrapper.unmount();
  });
});
