import Initial from './pages/initial';
import Dashboard from './pages/dashboard'



export const Routes=[
            { path: '/loginSignupPage', component: Initial },
            { path: '/ldashboard', component: Dashboard },
            { path: '/', exact: true, redirectTo: '/loginSignupPage' }
        ];