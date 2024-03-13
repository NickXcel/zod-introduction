import { ZodError } from "zod"

export const wrapTry = (fn: () => void) => {
    try {
        fn()
    } catch (err: unknown) {
        if (err instanceof ZodError)
            console.error('ZodError:\n', err.issues)
        else
            console.error(err)
    }
}
