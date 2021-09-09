module.exports = (model, Schema) => {
	const User = new Schema(
		{
			name: String
		},
		{ timestamps: { createdAt: "birthday", updatedAt: "userChange" } }
	);

	return model("User", User);
};
