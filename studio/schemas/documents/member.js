export default {
  name: 'member',
  title: 'Board Member',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Full Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
