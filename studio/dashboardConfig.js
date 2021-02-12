export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6026b619bfa21e1491847fad',
                  title: 'Sanity Studio',
                  name: 'hcs-website-studio',
                  apiId: 'c22770e1-bc6b-4dcd-afb0-76cbba731f88'
                },
                {
                  buildHookId: '6026b6191182971339895904',
                  title: 'Landing pages Website',
                  name: 'hcs-website',
                  apiId: '9c158708-8162-45a6-9eb6-d3bf5a9d07fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marianorivas-truenorth/hcs-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://hcs-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
