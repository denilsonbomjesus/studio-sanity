// schemaTypes/home.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Configuração da Home',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Título Principal (Headline)',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subtítulo',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem de Destaque',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})