import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@react-subapp/react-subapp",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@react-subapp/react-subapp"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
