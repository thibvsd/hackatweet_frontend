import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetSlice = createSlice({
	name: 'tweet',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.value.push(action.payload);
		},
		removeTweet: (state, action) => {
			state.value = state.value.filter();
		},
	},
});

export const { addTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
