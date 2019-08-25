import Home from './views/Home.vue';
import Repositories from './views/Repositories';
import RepoDetail from './views/RepoDetail';

const routes = [
    { path: '/', component: Home },
    { path: '/repositories', component: Repositories },
    { path: '/repodetail/:owner/:repo', component: RepoDetail },
];



export default routes;