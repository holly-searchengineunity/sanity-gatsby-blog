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
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7f4467b350a0133085e1d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iyv1oryp',
                  apiId: '9846e907-ccbc-4041-a910-b6154572a876'
                },
                {
                  buildHookId: '5f7f44670ed4eb188b8f857d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hn29ngmv',
                  apiId: '4007fd15-b7ae-44e1-9b25-8310a5bdbb69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/holly-searchengineunity/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hn29ngmv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
