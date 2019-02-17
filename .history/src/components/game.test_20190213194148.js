import React from 'react';
import {
    shallow
} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can starts a new game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 4, 8, 6],
            feedback: 'Cool',
            correctAnswer: -1
        });
        wrapper.instance.restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);


    });
});