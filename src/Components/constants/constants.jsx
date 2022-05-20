const LOGO = "Marketscale";

const MENU_LIST_TITLES = [
  {
    id: "t_1",
    title: "Teams",
  },
  {
    id: "t_2",
    title: "Menu",
  },
];

const MENU_LIST = {
  Teams: [
    {
      title: "Notary",
      id: "l_5",
      iid: 0,
    },
    {
      title: "1A Collection",
      id: "l_6",
      iid: 0,
    },
    {
      title: "TMM BANK",
      id: "l_7",
      iid: 1,
    },
    {
      title: "OIL SECTION",
      id: "l_8",
      iid: 1,
    },
  ],

  Menu: [
    {
      title: "Analytics",
      options: [
        {
          value: "Reports",
          label: "Reports",
        },
        {
          value: "Live Reports",
          label: "Live Reports",
        },
      ],
      id: "l_1",
      iid: 2,
    },
    {
      title: "Briefing",
      id: "l_2",
      iid: 3,
    },
    {
      title: "Credits",
      credits: 8,
      id: "l_3",
      iid: 4,
    },
    {
      title: "Calendar",
      id: "l_4",
      iid: 5,
    },
    {
      title: "Settings",
      id: "l_5",
      iid: 6,
    },
  ],
};

const URL = "https://api.covid19api.com/countries";

export { LOGO, MENU_LIST_TITLES, MENU_LIST, URL };
