export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      name: "Settings",
      url: "/settings",
      icon: "icon-speedometer",
      children: [
        {
          name: "New Settings",
          url: "/add",
          icon: "fa fa-list-alt",
        },
        {
          name: "Edit Settings",
          url: "/edit",
          icon: "fa fa-list-alt",
        },
      ],
    },
  ],
};
