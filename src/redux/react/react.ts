import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/Apis";

export const addReaction = createAsyncThunk(
	"reactions/addReaction",
	async ({ postId, reaction }) => {
		const response = await api.post(`/posts/${postId}/reactions`, {
			reaction,
		});
		return response.data;
	}
);

export const getAllReactions = createAsyncThunk(
	"reactions/getAllReactions",
	async (postId) => {
		const response = await api.get(`/posts/${postId}/reactions`);
		return response.data;
	}
);

const reactionsSlice = createSlice({
	name: "reactions",
	initialState: {
		reactions: [],
	},
	reducers: {
		setReaction: (state, action) => {
			const { postId, userId, reactionType } = action.payload;
			const reaction = { postId, userId, reactionType };
			state.reactions.push(reaction);
		},
		removeReaction: (state, action) => {
			const { postId, userId } = action.payload;
			const index = state.reactions.findIndex(
				(reaction) => reaction.postId === postId && reaction.userId === userId
			);
			if (index !== -1) {
				state.reactions.splice(index, 1);
			}
		},
		updateReaction: (state, action) => {
			const { postId, userId, newReactionType } = action.payload;
			const index = state.reactions.findIndex(
				(reaction) => reaction.postId === postId && reaction.userId === userId
			);
			if (index !== -1) {
				state.reactions[index].reactionType = newReactionType;
			}
		},
	},
});

export const { setReaction, removeReaction, updateReaction } =
	reactionsSlice.actions;

export const reactReducer = reactionsSlice.reducer;
