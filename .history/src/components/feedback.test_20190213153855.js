import React from 'react';
import {
    shallow
} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders withut crasahing', () => {
        shallow(<Feedback />);
    });

    it('Renders feedback message', () => {
        let test_feedback = 'Never guess again!';
        let wrapper = shallow(<Feedback feedback={test_feedback} />);
        expect(wrapper.contains(test_feedback)).toEqual(true);
    });
});