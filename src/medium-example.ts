import { z } from 'zod'
import { wrapTry } from './util'

wrapTry(() => {
    const LessSimplePerson = z.object({
        name: z.string(),
        website: z.string().regex(/(http:\/\/)?([a-z]+\.)+[a-z]/gi).transform(
            urlString => new URL(urlString.startsWith('http://') ? urlString : `http://${urlString}`)
        ),
        birthday: z.object({
            day: z.number().int().gt(0).lte(31),
            month: z.number().int().gt(0).lte(12),
            year: z.number().int().gte(1900).lte(new Date().getFullYear())
        }).transform(birthday => {
            return new Date(birthday.year, birthday.month - 1, birthday.day)
        })
    })
    console.log('Parsing alice')
    const alice = LessSimplePerson.parse({ name: 'alice', website: 'alice.io', birthday: { day: 30, month: 2, year: 1997 } })
    console.log(alice)
    console.log('Parsing alyx')
    const alyx = LessSimplePerson.parse({ name: 'alyx', website: 'https://www.alyx.to', birthday: { day: 19, month: 11, year: 1900 } })
    console.log(alyx)
    console.log('Parsing cody')
    const cody = LessSimplePerson.parse({ name: 'cody', website: 'cody.co.uk', birthday: { day: 33, month: 99, year: 900 } })
    console.log(cody)
})
