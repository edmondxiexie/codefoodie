const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    first_name: {
        type: String,
        required: true,
        max: 40,
    },
    last_name: {
        type: String,
        required: true,
        max: 40,
    },
    full_name: {
        type: String,
        required: true,
        max: 40,
    },
    crt_date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('profiles', ProfileSchema);
