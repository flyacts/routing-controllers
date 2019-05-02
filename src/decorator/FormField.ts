import {getMetadataArgsStorage} from "../index";
import { BodyOptions } from "../decorator-options/BodyOptions";

/**
 * Injects an uploaded file object to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function FormField(name: string, options?: BodyOptions): Function {
    return function (object: Object, methodName: string, index: number) {
        getMetadataArgsStorage().params.push({
            type: "form-field",
            object: object,
            method: methodName,
            index: index,
            name: name,
            parse: false,
            required: options ? options.required : undefined,
            extraOptions: options ? options.options : undefined,
            explicitType: options ? options.type : undefined,
            classTransform: options ? options.transform : undefined,
            validate: options ? options.validate : undefined,
        });
    };
}
