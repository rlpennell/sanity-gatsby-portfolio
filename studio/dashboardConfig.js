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
                  buildHookId: '60c90ac688a9ac24093e944a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wh55tf7z',
                  apiId: 'bb3ceca2-f38f-45b6-ac2a-13a93255bc64'
                },
                {
                  buildHookId: '60c90ac6b76b58206e391d6b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y9ik9ahh',
                  apiId: '93ae51be-a904-4363-b194-4a79e650da0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rlpennell/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y9ik9ahh.netlify.app',
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
