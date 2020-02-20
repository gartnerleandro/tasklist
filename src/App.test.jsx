import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('Tasklist app render', () => {
  it('render div that contains a p with the text Hello World on first load', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('div').children()).toHaveLength(1);
    expect(wrapper.find('div').childAt(0).type()).toBe('p');
    expect(wrapper.find('p').childAt(0).html()).toBe('Hello World!');

    wrapper.unmount();
  });
});
