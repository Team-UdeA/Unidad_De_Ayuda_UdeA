import mongoose from "mongoose";
//video 1-6
const materialSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            require: [true, "Please complete the field."]
        },
        materia:{
            type: String,
            require: [true, "Please complete the field."]
        },
        tipo:{
            type: String,
            require: [true, "Please complete the field."]
        },
        periodo:{
            type: String,
            require: [true, "Please complete the field."]
        },
        ruta:{
            type: String,
            require: [true, "Please complete the field."]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const MaterialModel = mongoose?.models?.Recurso || mongoose.model("Recurso", materialSchema)