import React from 'react';
import { shallow } from 'enzyme';

import Modal from './index';

describe('Modal', () => {
  it('render a modal with the passed child', () => {
    const wrapper = shallow(<Modal showModal onClose={() => true}><p>Hello Modal</p></Modal>);

    expect(wrapper.find('.modal')).toHaveLength(1);
    expect(wrapper.find('.close-modal')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').html()).toBe('<p>Hello Modal</p>');
  });
});
