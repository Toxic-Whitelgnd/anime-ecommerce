import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const Client = sanityClient(
    {
        projectId: 'fqvhx5pe',
        dataset:'production',
        apiVersion:'2022-08-11',
        useCdn: true,
        token: process.env.SANITY_PROJECT_TOKEN
    }
)

const builder = imageUrlBuilder(Client)

export const urlFor = (source)=> builder.image(source);