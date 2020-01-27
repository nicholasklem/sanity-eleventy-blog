export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e2ed20e22392da1dbb27c96',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-qrphq8qe',
                  apiId: 'fd779bb1-68a9-42aa-8433-f1ee6dc6799d'
                },
                {
                  buildHookId: '5e2ed20e22392da622b27c93',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-21bztp5g',
                  apiId: 'da9ba39d-7541-412d-9dc3-6f88d5dc1b4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-21bztp5g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
