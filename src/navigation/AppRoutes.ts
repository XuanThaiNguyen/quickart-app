enum AppRoutes {
  Loading = 'Loading',

  //Auth
  Auth = 'Auth',
  Onboarding = 'Onboarding',
  Login = 'Login',
  Signup = 'Signup',

  //Shop
  Shop = 'Shop',

  //Other
  Empty = 'Empty',
}

export default AppRoutes;

export type RootRoutes = 'Auth' | 'Loading' | 'Shop' | 'Onboarding';
