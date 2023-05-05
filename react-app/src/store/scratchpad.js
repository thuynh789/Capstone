const GET_SCRATCHPAD = 'scratchpad/GET_SCRATCHPAD';
const UPDATE_SCRATCHPAD = 'scratchpad/UPDATE_SCRATCHPAD';

// ACTION CREATORS
export const getScratchpad = (scratchpad) => ({
	type: GET_SCRATCHPAD,
	payload: scratchpad,
});

export const updateScratchpad = (newScratchpad) => ({
	type: UPDATE_SCRATCHPAD,
	payload: newScratchpad,
});

