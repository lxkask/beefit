import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'm5f3047g',
    dataset: 'production'
  },
  
  studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || '',
  
  autoUpdates: true,
})
