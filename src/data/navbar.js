export const navbarData = {
  navbar: [
    {
      id: 1,
      name: "Home",
      router: "/",
      active: true,
      icon: "home",
    },
    {
      id: 2,
      name: "Expertise",
      router: "/expertise",
      subItems: [
        {
          id: 6,
          name: "React",
          router: "/expertise/react",
        },
        {
          id: 7,
          name: "Vue",
          router: "/expertise/vue",
        },
      ],
    },
    {
      id: 3,
      name: "Projects",
      router: "/projects",
      icon: "briefcase",
    },
    {
      id: 4,
      name: "Experience",
      router: "/experience",
      icon: "star",
    },
    {
      id: 5,
      name: "Contact",
      router: "/contact",
      icon: "mail",
    },
  ],
};
