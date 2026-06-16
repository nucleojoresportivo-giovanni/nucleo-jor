import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'production'
    ? { kind: 'cloud' }
    : { kind: 'local' },
  cloud: { project: 'ixporte-ufsc/ixporte-ufsc' },
  collections: {
    reportagens: collection({
      label: 'Reportagens',
      slugField: 'title',
      path: 'src/content/reportagens/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        date: fields.date({ label: 'Data' }),
        author: fields.text({ label: 'Autor' }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Copa Feminina 2027', value: 'Copa Feminina 2027' },
            { label: 'Futebol', value: 'Futebol' },
            { label: 'Esportes', value: 'Esportes' },
            { label: 'Especial', value: 'Especial' },
          ],
          defaultValue: 'Futebol',
        }),
        coverImage: fields.image({
          label: 'Imagem de capa',
          directory: 'public/images',
          publicPath: '/images',
        }),
        excerpt: fields.text({ label: 'Resumo', multiline: true }),
        featured: fields.checkbox({ label: 'Destaque', defaultValue: false }),
      },
    }),
  },
});
