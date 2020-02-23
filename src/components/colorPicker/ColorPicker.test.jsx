import React from 'react';
import { mount } from 'enzyme';

import ColorPicker from './index';

describe('ColorPicker', () => {
  it('render a color picker with the colors passed', () => {
    const wrapper = mount(<ColorPicker colors={['#FF0000', '#000000', '#8e8e8e']} />);

    expect(wrapper.find('.color-picker')).toHaveLength(1);
    expect(wrapper.find('.selected-color')).toHaveLength(1);
    expect(wrapper.find('.picker-content')).toHaveLength(0);

    wrapper.find('.selected-color').simulate('click');

    expect(wrapper.find('.picker-content').childAt(0).type()).toBe('div');
    expect(wrapper.find('.colors-list').children()).toHaveLength(4);

    wrapper.unmount();
  });

  it('render a color picker with the default colors', () => {
    const wrapper = mount(<ColorPicker />);

    expect(wrapper.find('.color-picker')).toHaveLength(1);
    expect(wrapper.find('.selected-color')).toHaveLength(1);
    expect(wrapper.find('.picker-content')).toHaveLength(0);

    wrapper.find('.selected-color').simulate('click');

    expect(wrapper.find('.picker-content').childAt(0).type()).toBe('div');
    expect(wrapper.find('.colors-list').children()).toHaveLength(10);

    wrapper.unmount();
  });
});
