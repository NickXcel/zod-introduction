import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { extendZodWithOpenApi, createDocument } from 'zod-openapi'
extendZodWithOpenApi(z)

const mySchema = z
    .object({
        myString: z.string().min(5).openapi({description: 'A string', example: 'This is a string'}),
        myUnion: z.union([z.number(), z.boolean()]).openapi({description: 'this can be a number or a boolean', examples:[5, true]}),
    })
    .describe("My neat object schema");

const jsonSchema = zodToJsonSchema(mySchema, "mySchema");
console.log(jsonSchema)

const openapiSchema = createDocument({
openapi: '3.1.0',
  info: {
    title: 'My API',
    version: '1.0.0',
  },
  paths: {
    '/jobs': {
      patch: {
        requestBody: {
          content: {
            'application/json': { schema: mySchema.deepPartial() },
          },
        },
        responses: {
          '200': {
            description: '200 OK',
            content: {
              'application/json': { schema: mySchema },
            },
          },
        },
      },
    },
  },
})
console.log(JSON.stringify(openapiSchema, undefined, 2))
