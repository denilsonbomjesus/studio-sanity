// schemaTypes/post.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Post',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Link Amigável (Slug)',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: { hotspot: true }, // Permite recortar a imagem
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array', // O Sanity usa Portable Text (array de blocos)
      of: [{type: 'block'}]
    }),
  ],
})