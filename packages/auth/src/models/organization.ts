import { z } from 'zod'

export const organizationSchema = z.object({
    __typename: z.literal('Organization').default('Organization'),
    id: z.string(),
    ownerId: z.string(),
})

export type Oganization = z.infer<typeof organizationSchema>