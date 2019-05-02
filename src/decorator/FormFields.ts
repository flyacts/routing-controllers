import {getMetadataArgsStorage} from "../index";
import { BodyOptions } from "../decorator-options/BodyOptions";

/**
 * Injects an uploaded file object to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function FormFields(name: string, options?: BodyOptions): Function {
    return function (object: Object, methodName: string, index: number) {
        getMetadataArgsStorage().params.push({
            type: "form-fields",
            object: object,
            method: methodName,
            index: index,
            name: name,
            parse: false,
            required: options ? options.required : undefined,
            extraOptions: options ? options.options : undefined
        });
    };
}
