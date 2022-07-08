enum AppRoutes {
  Loading = 'Loading',

  //Auth
  Login = 'Login',
  Onboarding = 'Onboarding',

  //Shop
  Shop = 'Shop',
}

export default AppRoutes;

export type RootRoutes = 'Login' | 'Loading' | 'Shop' | 'Onboarding';
