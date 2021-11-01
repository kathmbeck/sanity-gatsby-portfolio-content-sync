export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '618051d48561b20b55c4e52e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-content-sync-studio',
                  apiId: 'e64bd7f3-a8d1-4304-9ebe-01f86d37ac95'
                },
                {
                  buildHookId: '618051d41606011361e1c759',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-content-sync',
                  apiId: '78627c68-9e55-44b5-a79f-6514446dedf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kathmbeck/sanity-gatsby-portfolio-content-sync',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-content-sync.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
