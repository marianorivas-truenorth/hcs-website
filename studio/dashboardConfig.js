export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'IMPORTANT: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6036c89302b0dc2d5dce447e',
                  title: 'Sanity Studio',
                  name: 'hcs-website-studio',
                  apiId: '16a9b8b6-01e9-4a1b-992c-583d72838d69'
                },
                {
                  buildHookId: '6036c866739b112655468008',
                  title: 'Website',
                  name: 'hcs-website',
                  apiId: 'a361615c-23ff-49bc-9012-cc926949736d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/truenorth-tech/hcs-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hcs-website.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['event', 'post', 'press']
      },
      layout: { width: 'medium' }
    }
  ]
}
