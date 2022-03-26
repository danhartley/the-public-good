const Slider = ({intialState, range, updateState}) => {

    const states = range.map((s,i) => {
        return {
            value: i,
            text: s
        }
    });

    const min = states[0].value;
    const max = states[states.length - 1].value;

    const state = states.find(h => h.text === intialState);

    const handleChange = e => {
        updateState(states.find(h => h.value === parseInt(e.target.value)).text);
    };

    return (    
        <>
        { 
            !states ? <></> :
            <>
            <input type="range" id="slider" name="slider" min={min} onChange={handleChange} max={max} value={state.value} />
            <label htmlFor="slider">{state.text}</label>
            </>
        }
        </>
    )
};

export default Slider;