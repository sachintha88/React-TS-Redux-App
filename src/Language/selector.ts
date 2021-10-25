/**
 * Gets the externalized string for the given key.
 *
 * @param key The message key
 * @param bindings Optional string replacement variables
 * @returns {*} The external string
 */
import {useSelector} from "react-redux";
import { RootState } from "../Types/CommonTypes";

export function useMessageBundle(key:string, bindings?: string[] | null) : string | undefined {
    const messages = useSelector((state: RootState) => state.language.messages)

    // @ts-ignore
    //json has key:strings
    const value = messages[key]

    if (value === undefined || value === null) {
        return undefined;
    }

    if (!bindings) {
        return value;
    }

    return value.replace(/\{(\d+)}/g, (v:string, p1:number) => p1 < bindings.length ? bindings[p1] : v);
}