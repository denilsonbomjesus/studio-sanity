import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'

dotenv.config()

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error('Missing SANITY_PROJECT_ID or SANITY_DATASET from .env')
}


export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
