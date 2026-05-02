import "server-only";
import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: { required: true, type: String },
    subtitle: { required: true, type: String },
    description: { required: true, type: String },
    thumbnail: { required: true, type: String },

    modules: [{ type: Schema.Types.ObjectId, ref:"Module"   }],

    price: { required: true, type: Number },
    active: { required: true, type: Boolean },

    category: {
        type: Schema.Types.ObjectId, // ✅ fixed
        ref: "Category"
    },

    instructor: {
        type: Schema.Types.ObjectId, // ✅ fixed
        ref: "User"
    },

    testimonials:[ {
        
        type: Schema.Types.ObjectId,
        ref: "Testimonial"// ✅ fixed
    }],

    quizSet: {
        required: true,
        type: Schema.Types.ObjectId // ✅ fixed
    },

    learning: {
        required: true,
        type: [String]
    },

    createdON: { required: true, type: Date },
    modifiedON: { required: true, type: Date }
});

export const Course =
  mongoose.models.Course ??
  mongoose.model("Course", courseSchema);