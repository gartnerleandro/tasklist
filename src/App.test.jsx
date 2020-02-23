import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('Tasklist app render', () => {
  it('render full app', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.app')).toHaveLength(1);
    expect(wrapper.find('.list')).toHaveLength(1);
    expect(wrapper.find('.filters')).toHaveLength(1);
    expect(wrapper.find('.modal')).toHaveLength(0);
    expect(wrapper.find('.add-button')).toHaveLength(1);

    wrapper.find('.add-button').simulate('click');

    expect(wrapper.find('.modal')).toHaveLength(1);

    wrapper.unmount();
  });
});
