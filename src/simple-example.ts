import { z } from 'zod'
import { wrapTry } from './util'

wrapTry(() => {
    const SimplePersonSchema = z.object({
        name: z.string(),
        website: z.string().url(),
        birthday: z.date()
    })
    console.log('Parsing bob')
    const bob = SimplePersonSchema.parse({ name: 'bob', website: 'http://bob.com', birthday: new Date('02/12/1997') })
    console.log(bob)
    console.log('Parsing alice')
    const alice = SimplePersonSchema.parse({ name: 'alice', website: 'alice.io', birthday: new Date('02/30/1997') })
    console.log(alice)
})
