import Color from 'color'

describe('Test Repositories List Component', () => {
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
     ]
      )
      cy.visit('http://localhost:8080/#/repositories');
  
      });
  
    it('check repos', () => {
      cy.get('[data-cy=repos]').children().should('have.length', 2);
    });
  })


  describe('Test Repo Detail Component', () => {
    beforeEach(()=> { 
      window.localStorage.setItem('auth-code', "test")
      window.localStorage.setItem('access-token', "test")
  
      cy.server()
      cy.route('https://cors-anywhere.herokuapp.com/https://api.github.com/repos/param1/param2?test', 
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
       )

       cy.route('https://cors-anywhere.herokuapp.com/https://api.github.com/repos/hugobarre/Hello-World/commits',
       [
        {
           "sha":"71cceb2bc5d30335ad32f033d0e50e0e80ab4d8e",
           "node_id":"MDY6Q29tbWl0MjA0MTg5OTQxOjcxY2NlYjJiYzVkMzAzMzVhZDMyZjAzM2QwZTUwZTBlODBhYjRkOGU=",
           "commit":{
              "author":{
                 "name":"Hugo",
                 "email":"hugo.x.barrenechea.-nd@disney.com",
                 "date":"2019-08-27T07:25:37Z"
              },
              "committer":{
                 "name":"Hugo",
                 "email":"hugo.x.barrenechea.-nd@disney.com",
                 "date":"2019-08-27T07:25:37Z"
              },
              "message":"add some test",
              "tree":{
                 "sha":"8bbf9bad193e48be42bf3308b377a5572d044d69",
                 "url":"https://api.github.com/repos/hugobarre/IcepayTest/git/trees/8bbf9bad193e48be42bf3308b377a5572d044d69"
              },
              "url":"https://api.github.com/repos/hugobarre/IcepayTest/git/commits/71cceb2bc5d30335ad32f033d0e50e0e80ab4d8e",
              "comment_count":0,
              "verification":{
                 "verified":false,
                 "reason":"unsigned",
                 "signature":null,
                 "payload":null
              }
           },
           "url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/71cceb2bc5d30335ad32f033d0e50e0e80ab4d8e",
           "html_url":"https://github.com/hugobarre/IcepayTest/commit/71cceb2bc5d30335ad32f033d0e50e0e80ab4d8e",
           "comments_url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/71cceb2bc5d30335ad32f033d0e50e0e80ab4d8e/comments",
           "author":null,
           "committer":null,
           "parents":[
              {
                 "sha":"419d0e69489333f5faf9b224190246afbae97e07",
                 "url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/419d0e69489333f5faf9b224190246afbae97e07",
                 "html_url":"https://github.com/hugobarre/IcepayTest/commit/419d0e69489333f5faf9b224190246afbae97e07"
              }
           ]
        },
        {
           "sha":"419d0e69489333f5faf9b224190246afbae97e07",
           "node_id":"MDY6Q29tbWl0MjA0MTg5OTQxOjQxOWQwZTY5NDg5MzMzZjVmYWY5YjIyNDE5MDI0NmFmYmFlOTdlMDc=",
           "commit":{
              "author":{
                 "name":"Hugo",
                 "email":"hugo.x.barrenechea.-nd@disney.com",
                 "date":"2019-08-26T07:06:35Z"
              },
              "committer":{
                 "name":"Hugo",
                 "email":"hugo.x.barrenechea.-nd@disney.com",
                 "date":"2019-08-26T07:06:35Z"
              },
              "message":"adding cypress",
              "tree":{
                 "sha":"068415ca151e1e53834f7623f43a75a65cb66e9e",
                 "url":"https://api.github.com/repos/hugobarre/IcepayTest/git/trees/068415ca151e1e53834f7623f43a75a65cb66e9e"
              },
              "url":"https://api.github.com/repos/hugobarre/IcepayTest/git/commits/419d0e69489333f5faf9b224190246afbae97e07",
              "comment_count":0,
              "verification":{
                 "verified":false,
                 "reason":"unsigned",
                 "signature":null,
                 "payload":null
              }
           },
           "url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/419d0e69489333f5faf9b224190246afbae97e07",
           "html_url":"https://github.com/hugobarre/IcepayTest/commit/419d0e69489333f5faf9b224190246afbae97e07",
           "comments_url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/419d0e69489333f5faf9b224190246afbae97e07/comments",
           "author":null,
           "committer":null,
           "parents":[
              {
                 "sha":"62d3c9d0e5eea7f982948308cd56913b26af30f1",
                 "url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/62d3c9d0e5eea7f982948308cd56913b26af30f1",
                 "html_url":"https://github.com/hugobarre/IcepayTest/commit/62d3c9d0e5eea7f982948308cd56913b26af30f1"
              }
           ]
        },
        {
           "sha":"62d3c9d0e5eea7f982948308cd56913b26af30f1",
           "node_id":"MDY6Q29tbWl0MjA0MTg5OTQxOjYyZDNjOWQwZTVlZWE3Zjk4Mjk0ODMwOGNkNTY5MTNiMjZhZjMwZjE=",
           "commit":{
              "author":{
                 "name":"Hugo",
                 "email":"hugo.x.barrenechea.-nd@disney.com",
                 "date":"2019-08-26T06:51:04Z"
              },
              "committer":{
                 "name":"Hugo",
                 "email":"hugo.x.barrenechea.-nd@disney.com",
                 "date":"2019-08-26T06:51:04Z"
              },
              "message":"clean solution",
              "tree":{
                 "sha":"36dffc82f41920949509c7a95b4c56a841183dce",
                 "url":"https://api.github.com/repos/hugobarre/IcepayTest/git/trees/36dffc82f41920949509c7a95b4c56a841183dce"
              },
              "url":"https://api.github.com/repos/hugobarre/IcepayTest/git/commits/62d3c9d0e5eea7f982948308cd56913b26af30f1",
              "comment_count":0,
              "verification":{
                 "verified":false,
                 "reason":"unsigned",
                 "signature":null,
                 "payload":null
              }
           },
           "url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/62d3c9d0e5eea7f982948308cd56913b26af30f1",
           "html_url":"https://github.com/hugobarre/IcepayTest/commit/62d3c9d0e5eea7f982948308cd56913b26af30f1",
           "comments_url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/62d3c9d0e5eea7f982948308cd56913b26af30f1/comments",
           "author":null,
           "committer":null,
           "parents":[
              {
                 "sha":"bfc7b80f20809f04da86b2a8b4b97e77fbce7e7c",
                 "url":"https://api.github.com/repos/hugobarre/IcepayTest/commits/bfc7b80f20809f04da86b2a8b4b97e77fbce7e7c",
                 "html_url":"https://github.com/hugobarre/IcepayTest/commit/bfc7b80f20809f04da86b2a8b4b97e77fbce7e7c"
              }
           ]
        }
     ]
       )


      cy.visit('http://localhost:8080/#/repodetail/param1/param2');
    
      });
  
    it('check detail data', () => {
        cy.get('[data-cy=title]').contains('Hello-World Repository Detail');
        cy.get('[data-cy=id]').contains('204345349');
        cy.get('[data-cy=owner]').contains('hugobarre');
        cy.get('[data-cy=fullName]').contains('hugobarre/Hello-World');

    });

    it('check commits info', () => {
        cy.get('[data-cy=commits]').children().should('have.length', 3);
        cy.get('[data-cy=commits] li').children('a').should('have.class', 'commit')       
    });
  })



  describe('Test Header Component', () => {
    beforeEach(()=> { 
      window.localStorage.setItem('auth-code', "test")
      window.localStorage.setItem('access-token', "test")
  
      cy.visit('http://localhost:8080/');
  
      });
  
    it('check language chaging', () => {

        cy.get('[data-cy=en]').click()
        .get('[data-cy=menu-title]').contains('VueJS Application')
        .get('[data-cy=tab-home]').contains('Home')
        .get('[data-cy=tab-repo]').contains('Repositories')

        cy.get('[data-cy=es]').click()
            .get('[data-cy=menu-title]').contains('Aplicacion VueJS')
            .get('[data-cy=tab-home]').contains('Inicio')
            .get('[data-cy=tab-repo]').contains('Repositorios')
    });
  })
