import { config } from 'dotenv'

config({ override: true })

import { z } from 'zod'

const envSchema = z.object({
  CONSOLA_LEVEL: z.string()
})

export const env = envSchema.parse(process.env)

export const vars = {
  consolaLevel: env.CONSOLA_LEVEL
}
