import Initial from './pages/initial';
import CountdownPage from './pages/Countdown';



export const Routes=[
            { path: '/loginSignupPage', component: Initial },
            { path: '/countdown', component: CountdownPage },
            { path: '/', exact: true, redirectTo: '/loginSignupPage' }
        ];