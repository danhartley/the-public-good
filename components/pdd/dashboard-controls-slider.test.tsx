// import '@testing-library/jest-dom'

import { render, fireEvent, screen } from '@testing-library/preact';

import Slider from 'components/pdd/dashboard-controls-slider';

describe('Slider', () => {

    const intialState = '23 Jan 2022';
    const range = [
        '23 Jan 2022', '23 Feb 2022', '23 Mar 2022'
    ];
    let state = '';
    const updateState = intialState => {
        state = intialState;
    };

    it('Should reflect position of slider', () => {

        const { container } = render(<Slider intialState={intialState} range={range} updateState={updateState}></Slider>);

        const slider: HTMLInputElement = container.querySelector('#slider');

        expect(slider.value).toBe('23 Jan 2022');

        fireEvent.change(slider, {
            target: { value: range[1] }
        });

        expect(slider.value).toBe('23 Feb 2022');
    });
});