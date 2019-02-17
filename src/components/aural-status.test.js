import React from 'react';

import {
    shallow
} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
            it('Renders without crashing', () => {
                shallow(<AuralStatus  />);
            });

            it('Renders an aural status update', () => {
                let test_status = "This is a  test aural status!";

                let wrapper = shallow(<AuralStatus auralStatus={test_status} />);
                expect(wrapper.contains(test_status)).toEqual(true);
            });
});
