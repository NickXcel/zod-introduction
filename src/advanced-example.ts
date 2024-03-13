/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from 'zod'
import { wrapTry } from './util'

wrapTry(() => {
    const PersonSchema = z.object({
        id: z.string().uuid(),
        name: z.string(),
        website: z.string().regex(/(http:\/\/)?([a-z]+\.)+[a-z]/gi).transform(
            urlString => new URL(urlString.startsWith('http://') ? urlString : `http://${urlString}`)
        ),
        birthday: z.object({
            day: z.number().int().gt(0).lte(31),
            month: z.number().int().gt(0).lte(12),
            year: z.number().int().gte(1900).lte(new Date().getFullYear())
        })
    })
    const PersonCreatePayloadSchema = PersonSchema.omit({ id: true })
    const PersonPatchPayloadSchema = PersonSchema.deepPartial()
    const PersonDeletePayloadSchema = PersonSchema.pick({ id: true })
    const PersonPutPayloadSchema = PersonSchema
    const PersonGetPayloadSchema = PersonSchema.pick({ id: true })

    type PersonCreatePayload = z.infer<typeof PersonCreatePayloadSchema>
    type PersonPatchPayload = z.infer<typeof PersonPatchPayloadSchema>
    type PersonDeletePayload = z.infer<typeof PersonDeletePayloadSchema>
    type PersonPutPayload = z.infer<typeof PersonPutPayloadSchema>
    type PersonGetPayload = z.infer<typeof PersonGetPayloadSchema>
     
})
