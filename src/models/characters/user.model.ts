import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		characters_eldenRing: [{
			type: Schema.Types.ObjectId,
			ref: 'elden_ring_character',
		}]
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const UserModel = model('user', UserSchema); // collection name, schema