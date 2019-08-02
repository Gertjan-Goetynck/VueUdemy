import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

//Lazy loading of individual routes. First argument is the file vue tries to use, second a function that includes it, third is an optional name to bundle files.

const User = resolve => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user"
  );
};
const UserDetail = resolve => {
  require.ensure(
    ["./components/user/UserDetail.vue"],
    () => {
      resolve(require("./components/user/UserDetail.vue"));
    },
    "user"
  );
};
const UserEdit = resolve => {
  require.ensure(
    ["./components/user/UserEdit.vue"],
    () => {
      resolve(require("./components/user/UserEdit.vue"));
    },
    "user"
  );
};
const UserStart = resolve => {
  require.ensure(
    ["./components/user/UserStart.vue"],
    () => {
      resolve(require("./components/user/UserStart.vue"));
    },
    "user"
  );
};

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/user",
    props: true,
    components: { default: User, "header-bottom": Header },
    children: [
      {
        path: "",
        component: UserStart
      },
      {
        path: ":id",
        component: UserDetail,
        props: true
        // beforeEnter: (to, from, next) => {
        //   console.log("Inside route setup");
        //   next();
        // }
      },
      {
        path: ":id/edit",
        component: UserEdit,
        name: "userEdit"
      }
    ]
  },
  { path: "/redirect-me", redirect: "/" },
  { path: "*", redirect: "/" }

  // props:true passes url variables down as props the component can use
  //{ path: "/user/:id", component: User, props: true }
];
