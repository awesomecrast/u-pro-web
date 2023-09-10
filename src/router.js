import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/u-pro',
    name: 'home',
    component: () => import('./pages/HomePage.vue'),
  },
  {
    path: '/u-pro/cert/:id',
    name: 'certification',
    component: () => import('./pages/ListCoursesPage.vue'),
  },
  {
    path: '/u/:username',
    name: 'profile',
    component: () => import('./pages/ProfileUserPage.vue'),
  },
  {
    path: '/play/:id',
    name: 'play-video',
    component: () => import('./pages/VideoPlayPage.vue'),
  },
  {
    path: '/live/:id',
    name: 'live-video',
    component: () => import('./pages/VideoLivePage.vue'),
  },
  //   {
  //     path: "/dashboard/panel",
  //     name: "panel",
  //     component: PanelDashboard,
  //     meta: {
  //       requiresAuth: true,
  //     },
  //   },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   // Si la ruta requiere autenticación
//   if (requiresAuth) {
//     // Obtener el accessToken de chrome.storage.local
//     const accessToken = await new Promise((resolve) => {
//       // eslint-disable-next-line no-undef
//       chrome.storage.local.get(["accessToken"], function (result) {
//         resolve(result.accessToken);
//       });
//     });

//     // Si no hay accessToken, redirigir a la página de login
//     if (!accessToken) {
//       next({ name: "login" });
//     } else {
//       next(); // Si hay accessToken, permite la navegación a la ruta protegida
//     }
//   } else {
//     next(); // Si la ruta no requiere autenticación, permite la navegación
//   }
// });

export default router;
