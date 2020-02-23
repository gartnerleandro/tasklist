import React from 'react';
import { shallow } from 'enzyme';

import Filters from './index';

describe('Card', () => {
  it('render card with the props passed', () => {
    const wrapper = shallow(<Filters />);

    expect(wrapper.find('.filters')).toHaveLength(1);
    expect(wrapper.find('.filters-label')).toHaveLength(1);
    expect(wrapper.find('.buttons-wrapper')).toHaveLength(1);
    expect(wrapper.find('.buttons-wrapper').children()).toHaveLength(3);
    expect(wrapper.find('.buttons-wrapper').childAt(0).type()).toBe('button');
    expect(wrapper.find('.buttons-wrapper').childAt(1).type()).toBe('button');
    expect(wrapper.find('.buttons-wrapper').childAt(2).type()).toBe('button');
  });
});
