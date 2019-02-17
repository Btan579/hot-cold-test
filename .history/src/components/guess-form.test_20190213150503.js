import React from 'react';
import {
    shallow
} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {

    });
});