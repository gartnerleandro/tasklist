import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('Tasklist app render', () => {
  it('render div that contains a p with the text Hello World on first load', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.app').childAt(0).type()).toBe('p');
    expect(wrapper.find('.app').childAt(0).html()).toBe('<p>Hello World!</p>');
  });
});
