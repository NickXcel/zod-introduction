// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { z } from 'zod'


// // import type { Options, Targets } from './Options'
// import type * as zod from 'zod'
// declare module 'zod' {
//     interface ZodTypeDef {
//         jsonMeta: Record<string, unknown>,
//         deepPartialSchema: boolean
//     }
//     interface ZodSchema<Output = any, Def extends ZodTypeDef = ZodTypeDef, Input = Output> {
//         jsonMeta<T extends ZodSchema<Output, Def, Input>>(
//             this: T,
//             properties: Record<string, string | boolean | number | []>
//         ): T,
//         markDeepPartialSchema<T extends ZodSchema<Output, Def, Input>>(this: T): T,
//         // toJsonSchema<T extends ZodSchema<Output, Def, Input>>(this: T, options?: Partial<Options<'jsonSchema7'>>): ReturnType<typeof zodToJsonSchema>
//     }
// }
// const zodJsonMetaProperties = function <T extends zod.z.ZodTypeAny>(
//     zAny: T,
//     options: Record<string, unknown>
// ) {
//     zAny._def.jsonMeta = {
//         ...zAny._def.jsonMeta,
//         ...options
//     }
//     return zAny
// }

// const expandPrototype = (zod: typeof z) => {
//     zod.ZodSchema.prototype.jsonMeta = function(metaProps: any) {
//         return zodJsonMetaProperties(this, metaProps)
//     }
//     // zod.ZodSchema.prototype.toJsonSchema = function (options: Partial<Options<Targets>> = { $refStrategy: 'none' }) {
//     //  const schema = zodToJsonSchema(this, options)
//     //  if (this._def.deepPartialSchema) {
//     //   // iterate recursively and delete all `required` properties
//     //   const deleteRequired = (obj: any) => {
//     //    if (obj.required) {
//     //     delete obj.required
//     //    }
//     //    Object.keys(obj).forEach((key) => {
//     //     if (typeof obj[key] === 'object') {
//     //      deleteRequired(obj[key])
//     //     }
//     //    })
//     //   }
//     //   deleteRequired(schema)
//     //  }
//     //  return schema
//     // }

//     zod.ZodSchema.prototype.markDeepPartialSchema = function() {
//         this._def.deepPartialSchema = true
//         return this
//     }
// }
// expandPrototype(z)
// export * from 'zod'
