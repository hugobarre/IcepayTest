// https://docs.cypress.io/api/introduction/api.html

describe('Test home page', () => {
    beforeEach(()=> { 
      window.localStorage.setItem('auth-code', "test")
      window.localStorage.setItem('access-token', "test")
  
      cy.visit('http://localhost:8080');
    });
  
    it('Visits the app root url', () => {
      cy.contains('p', 'Welcome to Icepay Vue JS Assignment');
    });
  })

describe('Test respostories page modal', () => {
   beforeEach(()=> { 
     window.localStorage.setItem('auth-code', "test")
     window.localStorage.setItem('access-token', "test")
     
      cy.visit('http://localhost:8080/#/repositories');

   });
 
   it('Check for open modal', () => {
     cy.get('.vs-button').contains('Add Repository').click().get('.vsm-modal').contains('Add new repository');
   });
    
   it('Check for close modal', () => {
      cy.get('.vs-button').contains('Add Repository').click().get('.vsm-modal').contains('Add new repository');
      cy.get('.btn-close').click().get('.vsm-modal').should('not.visible');
   });
 })
  

describe('Test add repo', () => {
   beforeEach(()=> { 
     window.localStorage.setItem('auth-code', "test")
     window.localStorage.setItem('access-token', "test")
   
     cy.server()
     cy.route('https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos?test', 
     [
       {
          "id":204345349,
          "node_id":"MDEwOlJlcG9zaXRvcnkyMDQzNDUzNDk=",
          "name":"Hello-World",
          "full_name":"hugobarre/Hello-World",
          "private":false,
          "owner":{
             "login":"hugobarre",
             "id":35267415,
             "node_id":"MDQ6VXNlcjM1MjY3NDE1",
             "avatar_url":"https://avatars2.githubusercontent.com/u/35267415?v=4",
             "gravatar_id":"",
             "url":"https://api.github.com/users/hugobarre",
             "html_url":"https://github.com/hugobarre",
             "followers_url":"https://api.github.com/users/hugobarre/followers",
             "following_url":"https://api.github.com/users/hugobarre/following{/other_user}",
             "gists_url":"https://api.github.com/users/hugobarre/gists{/gist_id}",
             "starred_url":"https://api.github.com/users/hugobarre/starred{/owner}{/repo}",
             "subscriptions_url":"https://api.github.com/users/hugobarre/subscriptions",
             "organizations_url":"https://api.github.com/users/hugobarre/orgs",
             "repos_url":"https://api.github.com/users/hugobarre/repos",
             "events_url":"https://api.github.com/users/hugobarre/events{/privacy}",
             "received_events_url":"https://api.github.com/users/hugobarre/received_events",
             "type":"User",
             "site_admin":false
          },
          "html_url":"https://github.com/hugobarre/Hello-World",
          "description":"This is your first repository",
          "fork":false,
          "url":"https://api.github.com/repos/hugobarre/Hello-World",
          "forks_url":"https://api.github.com/repos/hugobarre/Hello-World/forks",
          "keys_url":"https://api.github.com/repos/hugobarre/Hello-World/keys{/key_id}",
          "collaborators_url":"https://api.github.com/repos/hugobarre/Hello-World/collaborators{/collaborator}",
          "teams_url":"https://api.github.com/repos/hugobarre/Hello-World/teams",
          "hooks_url":"https://api.github.com/repos/hugobarre/Hello-World/hooks",
          "issue_events_url":"https://api.github.com/repos/hugobarre/Hello-World/issues/events{/number}",
          "events_url":"https://api.github.com/repos/hugobarre/Hello-World/events",
          "assignees_url":"https://api.github.com/repos/hugobarre/Hello-World/assignees{/user}",
          "branches_url":"https://api.github.com/repos/hugobarre/Hello-World/branches{/branch}",
          "tags_url":"https://api.github.com/repos/hugobarre/Hello-World/tags",
          "blobs_url":"https://api.github.com/repos/hugobarre/Hello-World/git/blobs{/sha}",
          "git_tags_url":"https://api.github.com/repos/hugobarre/Hello-World/git/tags{/sha}",
          "git_refs_url":"https://api.github.com/repos/hugobarre/Hello-World/git/refs{/sha}",
          "trees_url":"https://api.github.com/repos/hugobarre/Hello-World/git/trees{/sha}",
          "statuses_url":"https://api.github.com/repos/hugobarre/Hello-World/statuses/{sha}",
          "languages_url":"https://api.github.com/repos/hugobarre/Hello-World/languages",
          "stargazers_url":"https://api.github.com/repos/hugobarre/Hello-World/stargazers",
          "contributors_url":"https://api.github.com/repos/hugobarre/Hello-World/contributors",
          "subscribers_url":"https://api.github.com/repos/hugobarre/Hello-World/subscribers",
          "subscription_url":"https://api.github.com/repos/hugobarre/Hello-World/subscription",
          "commits_url":"https://api.github.com/repos/hugobarre/Hello-World/commits{/sha}",
          "git_commits_url":"https://api.github.com/repos/hugobarre/Hello-World/git/commits{/sha}",
          "comments_url":"https://api.github.com/repos/hugobarre/Hello-World/comments{/number}",
          "issue_comment_url":"https://api.github.com/repos/hugobarre/Hello-World/issues/comments{/number}",
          "contents_url":"https://api.github.com/repos/hugobarre/Hello-World/contents/{+path}",
          "compare_url":"https://api.github.com/repos/hugobarre/Hello-World/compare/{base}...{head}",
          "merges_url":"https://api.github.com/repos/hugobarre/Hello-World/merges",
          "archive_url":"https://api.github.com/repos/hugobarre/Hello-World/{archive_format}{/ref}",
          "downloads_url":"https://api.github.com/repos/hugobarre/Hello-World/downloads",
          "issues_url":"https://api.github.com/repos/hugobarre/Hello-World/issues{/number}",
          "pulls_url":"https://api.github.com/repos/hugobarre/Hello-World/pulls{/number}",
          "milestones_url":"https://api.github.com/repos/hugobarre/Hello-World/milestones{/number}",
          "notifications_url":"https://api.github.com/repos/hugobarre/Hello-World/notifications{?since,all,participating}",
          "labels_url":"https://api.github.com/repos/hugobarre/Hello-World/labels{/name}",
          "releases_url":"https://api.github.com/repos/hugobarre/Hello-World/releases{/id}",
          "deployments_url":"https://api.github.com/repos/hugobarre/Hello-World/deployments",
          "created_at":"2019-08-25T20:18:46Z",
          "updated_at":"2019-08-25T20:18:46Z",
          "pushed_at":"2019-08-25T20:18:47Z",
          "git_url":"git://github.com/hugobarre/Hello-World.git",
          "ssh_url":"git@github.com:hugobarre/Hello-World.git",
          "clone_url":"https://github.com/hugobarre/Hello-World.git",
          "svn_url":"https://github.com/hugobarre/Hello-World",
          "homepage":"https://github.com",
          "size":0,
          "stargazers_count":0,
          "watchers_count":0,
          "language":null,
          "has_issues":true,
          "has_projects":true,
          "has_downloads":true,
          "has_wiki":true,
          "has_pages":false,
          "forks_count":0,
          "mirror_url":null,
          "archived":false,
          "disabled":false,
          "open_issues_count":0,
          "license":null,
          "forks":0,
          "open_issues":0,
          "watchers":0,
          "default_branch":"master",
          "permissions":{
             "admin":true,
             "push":true,
             "pull":true
          }
       }
     ]).as('initialList')     

       cy.visit('http://localhost:8080/#/repositories');
       cy.wait('@initialList')
   });
 
   it('Check for add repo', () => {
      cy.get('[data-cy=repos]').children().should('have.length', 1);

      cy.route('https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos?test', 
      [
        {
           "id":204345349,
           "node_id":"MDEwOlJlcG9zaXRvcnkyMDQzNDUzNDk=",
           "name":"Hello-World",
           "full_name":"hugobarre/Hello-World",
           "private":false,
           "owner":{
              "login":"hugobarre",
              "id":35267415,
              "node_id":"MDQ6VXNlcjM1MjY3NDE1",
              "avatar_url":"https://avatars2.githubusercontent.com/u/35267415?v=4",
              "gravatar_id":"",
              "url":"https://api.github.com/users/hugobarre",
              "html_url":"https://github.com/hugobarre",
              "followers_url":"https://api.github.com/users/hugobarre/followers",
              "following_url":"https://api.github.com/users/hugobarre/following{/other_user}",
              "gists_url":"https://api.github.com/users/hugobarre/gists{/gist_id}",
              "starred_url":"https://api.github.com/users/hugobarre/starred{/owner}{/repo}",
              "subscriptions_url":"https://api.github.com/users/hugobarre/subscriptions",
              "organizations_url":"https://api.github.com/users/hugobarre/orgs",
              "repos_url":"https://api.github.com/users/hugobarre/repos",
              "events_url":"https://api.github.com/users/hugobarre/events{/privacy}",
              "received_events_url":"https://api.github.com/users/hugobarre/received_events",
              "type":"User",
              "site_admin":false
           },
           "html_url":"https://github.com/hugobarre/Hello-World",
           "description":"This is your first repository",
           "fork":false,
           "url":"https://api.github.com/repos/hugobarre/Hello-World",
           "forks_url":"https://api.github.com/repos/hugobarre/Hello-World/forks",
           "keys_url":"https://api.github.com/repos/hugobarre/Hello-World/keys{/key_id}",
           "collaborators_url":"https://api.github.com/repos/hugobarre/Hello-World/collaborators{/collaborator}",
           "teams_url":"https://api.github.com/repos/hugobarre/Hello-World/teams",
           "hooks_url":"https://api.github.com/repos/hugobarre/Hello-World/hooks",
           "issue_events_url":"https://api.github.com/repos/hugobarre/Hello-World/issues/events{/number}",
           "events_url":"https://api.github.com/repos/hugobarre/Hello-World/events",
           "assignees_url":"https://api.github.com/repos/hugobarre/Hello-World/assignees{/user}",
           "branches_url":"https://api.github.com/repos/hugobarre/Hello-World/branches{/branch}",
           "tags_url":"https://api.github.com/repos/hugobarre/Hello-World/tags",
           "blobs_url":"https://api.github.com/repos/hugobarre/Hello-World/git/blobs{/sha}",
           "git_tags_url":"https://api.github.com/repos/hugobarre/Hello-World/git/tags{/sha}",
           "git_refs_url":"https://api.github.com/repos/hugobarre/Hello-World/git/refs{/sha}",
           "trees_url":"https://api.github.com/repos/hugobarre/Hello-World/git/trees{/sha}",
           "statuses_url":"https://api.github.com/repos/hugobarre/Hello-World/statuses/{sha}",
           "languages_url":"https://api.github.com/repos/hugobarre/Hello-World/languages",
           "stargazers_url":"https://api.github.com/repos/hugobarre/Hello-World/stargazers",
           "contributors_url":"https://api.github.com/repos/hugobarre/Hello-World/contributors",
           "subscribers_url":"https://api.github.com/repos/hugobarre/Hello-World/subscribers",
           "subscription_url":"https://api.github.com/repos/hugobarre/Hello-World/subscription",
           "commits_url":"https://api.github.com/repos/hugobarre/Hello-World/commits{/sha}",
           "git_commits_url":"https://api.github.com/repos/hugobarre/Hello-World/git/commits{/sha}",
           "comments_url":"https://api.github.com/repos/hugobarre/Hello-World/comments{/number}",
           "issue_comment_url":"https://api.github.com/repos/hugobarre/Hello-World/issues/comments{/number}",
           "contents_url":"https://api.github.com/repos/hugobarre/Hello-World/contents/{+path}",
           "compare_url":"https://api.github.com/repos/hugobarre/Hello-World/compare/{base}...{head}",
           "merges_url":"https://api.github.com/repos/hugobarre/Hello-World/merges",
           "archive_url":"https://api.github.com/repos/hugobarre/Hello-World/{archive_format}{/ref}",
           "downloads_url":"https://api.github.com/repos/hugobarre/Hello-World/downloads",
           "issues_url":"https://api.github.com/repos/hugobarre/Hello-World/issues{/number}",
           "pulls_url":"https://api.github.com/repos/hugobarre/Hello-World/pulls{/number}",
           "milestones_url":"https://api.github.com/repos/hugobarre/Hello-World/milestones{/number}",
           "notifications_url":"https://api.github.com/repos/hugobarre/Hello-World/notifications{?since,all,participating}",
           "labels_url":"https://api.github.com/repos/hugobarre/Hello-World/labels{/name}",
           "releases_url":"https://api.github.com/repos/hugobarre/Hello-World/releases{/id}",
           "deployments_url":"https://api.github.com/repos/hugobarre/Hello-World/deployments",
           "created_at":"2019-08-25T20:18:46Z",
           "updated_at":"2019-08-25T20:18:46Z",
           "pushed_at":"2019-08-25T20:18:47Z",
           "git_url":"git://github.com/hugobarre/Hello-World.git",
           "ssh_url":"git@github.com:hugobarre/Hello-World.git",
           "clone_url":"https://github.com/hugobarre/Hello-World.git",
           "svn_url":"https://github.com/hugobarre/Hello-World",
           "homepage":"https://github.com",
           "size":0,
           "stargazers_count":0,
           "watchers_count":0,
           "language":null,
           "has_issues":true,
           "has_projects":true,
           "has_downloads":true,
           "has_wiki":true,
           "has_pages":false,
           "forks_count":0,
           "mirror_url":null,
           "archived":false,
           "disabled":false,
           "open_issues_count":0,
           "license":null,
           "forks":0,
           "open_issues":0,
           "watchers":0,
           "default_branch":"master",
           "permissions":{
              "admin":true,
              "push":true,
              "pull":true
           }
        },
        {
           "id":204189941,
           "node_id":"MDEwOlJlcG9zaXRvcnkyMDQxODk5NDE=",
           "name":"IcepayTest",
           "full_name":"hugobarre/IcepayTest",
           "private":false,
           "owner":{
              "login":"hugobarre",
              "id":35267415,
              "node_id":"MDQ6VXNlcjM1MjY3NDE1",
              "avatar_url":"https://avatars2.githubusercontent.com/u/35267415?v=4",
              "gravatar_id":"",
              "url":"https://api.github.com/users/hugobarre",
              "html_url":"https://github.com/hugobarre",
              "followers_url":"https://api.github.com/users/hugobarre/followers",
              "following_url":"https://api.github.com/users/hugobarre/following{/other_user}",
              "gists_url":"https://api.github.com/users/hugobarre/gists{/gist_id}",
              "starred_url":"https://api.github.com/users/hugobarre/starred{/owner}{/repo}",
              "subscriptions_url":"https://api.github.com/users/hugobarre/subscriptions",
              "organizations_url":"https://api.github.com/users/hugobarre/orgs",
              "repos_url":"https://api.github.com/users/hugobarre/repos",
              "events_url":"https://api.github.com/users/hugobarre/events{/privacy}",
              "received_events_url":"https://api.github.com/users/hugobarre/received_events",
              "type":"User",
              "site_admin":false
           },
           "html_url":"https://github.com/hugobarre/IcepayTest",
           "description":null,
           "fork":false,
           "url":"https://api.github.com/repos/hugobarre/IcepayTest",
           "forks_url":"https://api.github.com/repos/hugobarre/IcepayTest/forks",
           "keys_url":"https://api.github.com/repos/hugobarre/IcepayTest/keys{/key_id}",
           "collaborators_url":"https://api.github.com/repos/hugobarre/IcepayTest/collaborators{/collaborator}",
           "teams_url":"https://api.github.com/repos/hugobarre/IcepayTest/teams",
           "hooks_url":"https://api.github.com/repos/hugobarre/IcepayTest/hooks",
           "issue_events_url":"https://api.github.com/repos/hugobarre/IcepayTest/issues/events{/number}",
           "events_url":"https://api.github.com/repos/hugobarre/IcepayTest/events",
           "assignees_url":"https://api.github.com/repos/hugobarre/IcepayTest/assignees{/user}",
           "branches_url":"https://api.github.com/repos/hugobarre/IcepayTest/branches{/branch}",
           "tags_url":"https://api.github.com/repos/hugobarre/IcepayTest/tags",
           "blobs_url":"https://api.github.com/repos/hugobarre/IcepayTest/git/blobs{/sha}",
           "git_tags_url":"https://api.github.com/repos/hugobarre/IcepayTest/git/tags{/sha}",
           "git_refs_url":"https://api.github.com/repos/hugobarre/IcepayTest/git/refs{/sha}",
           "trees_url":"https://api.github.com/repos/hugobarre/IcepayTest/git/trees{/sha}",
           "statuses_url":"https://api.github.com/repos/hugobarre/IcepayTest/statuses/{sha}",
           "languages_url":"https://api.github.com/repos/hugobarre/IcepayTest/languages",
           "stargazers_url":"https://api.github.com/repos/hugobarre/IcepayTest/stargazers",
           "contributors_url":"https://api.github.com/repos/hugobarre/IcepayTest/contributors",
           "subscribers_url":"https://api.github.com/repos/hugobarre/IcepayTest/subscribers",
           "subscription_url":"https://api.github.com/repos/hugobarre/IcepayTest/subscription",
           "commits_url":"https://api.github.com/repos/hugobarre/IcepayTest/commits{/sha}",
           "git_commits_url":"https://api.github.com/repos/hugobarre/IcepayTest/git/commits{/sha}",
           "comments_url":"https://api.github.com/repos/hugobarre/IcepayTest/comments{/number}",
           "issue_comment_url":"https://api.github.com/repos/hugobarre/IcepayTest/issues/comments{/number}",
           "contents_url":"https://api.github.com/repos/hugobarre/IcepayTest/contents/{+path}",
           "compare_url":"https://api.github.com/repos/hugobarre/IcepayTest/compare/{base}...{head}",
           "merges_url":"https://api.github.com/repos/hugobarre/IcepayTest/merges",
           "archive_url":"https://api.github.com/repos/hugobarre/IcepayTest/{archive_format}{/ref}",
           "downloads_url":"https://api.github.com/repos/hugobarre/IcepayTest/downloads",
           "issues_url":"https://api.github.com/repos/hugobarre/IcepayTest/issues{/number}",
           "pulls_url":"https://api.github.com/repos/hugobarre/IcepayTest/pulls{/number}",
           "milestones_url":"https://api.github.com/repos/hugobarre/IcepayTest/milestones{/number}",
           "notifications_url":"https://api.github.com/repos/hugobarre/IcepayTest/notifications{?since,all,participating}",
           "labels_url":"https://api.github.com/repos/hugobarre/IcepayTest/labels{/name}",
           "releases_url":"https://api.github.com/repos/hugobarre/IcepayTest/releases{/id}",
           "deployments_url":"https://api.github.com/repos/hugobarre/IcepayTest/deployments",
           "created_at":"2019-08-24T17:26:04Z",
           "updated_at":"2019-08-26T07:06:55Z",
           "pushed_at":"2019-08-26T07:06:54Z",
           "git_url":"git://github.com/hugobarre/IcepayTest.git",
           "ssh_url":"git@github.com:hugobarre/IcepayTest.git",
           "clone_url":"https://github.com/hugobarre/IcepayTest.git",
           "svn_url":"https://github.com/hugobarre/IcepayTest",
           "homepage":null,
           "size":174,
           "stargazers_count":0,
           "watchers_count":0,
           "language":"Vue",
           "has_issues":true,
           "has_projects":true,
           "has_downloads":true,
           "has_wiki":true,
           "has_pages":false,
           "forks_count":0,
           "mirror_url":null,
           "archived":false,
           "disabled":false,
           "open_issues_count":0,
           "license":null,
           "forks":0,
           "open_issues":0,
           "watchers":0,
           "default_branch":"master",
           "permissions":{
              "admin":true,
              "push":true,
              "pull":true
           }
        }
      ]).as('updatedList')

      cy.server({
         method: 'POST',
         response: {}
         })
         cy.route('https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos?test').as('addMethod'),  

      cy.get('.vs-button').contains('Add Repository').click().get('.vsm-modal').contains('Add new repository');
      cy.get('[data-cy=addButton]').click();

      cy.get('[data-cy=repos]').children().should('have.length', 2);

   });
 })

  

 