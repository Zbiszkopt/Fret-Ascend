import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Home from './Home';
// Importuj inne komponenty, które będą wykorzystywane

const routes = [
    
{
    path: '/',
    exact: true,
    component: Home
},


  {
    path: 'users/register',
    exact: true,
    component: RegistrationForm
  },

  {
    path: 'users/login',
    exact: true,
    component: LoginForm
  },
  // Dodaj inne trasy według potrzeb
];

export default routes;