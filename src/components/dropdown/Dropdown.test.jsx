import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './index';

describe('Dropdown', () => {
  it('render dropdown with the children passed', () => {
    const wrapper = shallow(<Dropdown><button type="button" className="first-button">click me</button></Dropdown>);

    expect(wrapper.find('.menu-wrapper')).toHaveLength(1);
    expect(wrapper.find('.menu-wrapper').childAt(0).type()).toBe('button');

    wrapper.find('.menu-button').simulate('click');

    expect(wrapper.find('.dropdown-content').childAt(0).type()).toBe('button');
    expect(wrapper.find('.first-button').type()).toBe('button');
    expect(wrapper.find('.dropdown-content').children()).toHaveLength(1);
    expect(wrapper.find('.dropdown-content').childAt(0).html()).toBe('<button type="button" class="first-button">click me</button>');
  });
});
