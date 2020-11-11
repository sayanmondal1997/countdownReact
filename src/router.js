import Initial from './pages/initial';
import Countdown from './pages/Countdown';



export const Routes=[
            { path: '/loginSignupPage', component: Initial },
            { path: '/countdown', component: Countdown },
            { path: '/', exact: true, redirectTo: '/loginSignupPage' }
        ];