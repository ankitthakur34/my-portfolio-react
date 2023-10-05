import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'qswhfo7r',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-03',
})
