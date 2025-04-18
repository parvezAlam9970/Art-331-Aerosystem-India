import { Icons } from "./icons";

export  const HeaderLinks = {
  MENU_LINKS: [
    {
      name: "HOME",
      path: "/",
      id: 1,      
    },
    {
      name: "CESSNA",
      path: "/",
      id: 2,
      type: "overlay",
      Children:[
        {
          name: "Compare Models",
          path: "/cessna",
          icons: <Icons.USERS />,

          id: 2.1,
        },
        {
          name: "Range Map",
          path: "/compliance/annual-report",
          icons: <Icons.MAP />,

          id: 2.2,
        },
      ]
    },
    {
      name: "BEECHCRAFT",
      path: "/",
      id: 3,
      type: "overlay",
      Children:[
      ]
    },
    {
      name: "SERVICES",
      path: "/",
      id: 4,
      type: "simple",
      Children:[
        {
          name: "Spares",
          path: "/services/spares",
          id: 4.1,  
          icons: <Icons.USERS />,
        },       
      ]
    },
    {
      name: "AEROSYSTEM",
      path: "/",
      id: 5,  
      type: "simple",
      Children:[
        {
          name: "Team",
          path: "/aerosystem/team",
          id: 3.1,
          icons: <Icons.USERS />,
        },
        {
          name: "Legacy And Company",
          path: "/aerosystem/legacy",
          id: 3.2,
          icons: <Icons.USERS />,
        },
        {
          name: "Achievements And Certifications.",
          path: "/aerosystem/achievements-certifications",
          id: 3.3,
          icons: <Icons.USERS />,
        },
        {
          name: "Media Gallery",
          path: "/aerosystem/gallery",
          id: 3.4,
          icons: <Icons.USERS />,
        },
      ]
    },
    {
      name: "CONTACT US",
      path: "/contact",
      id: 5,  
    },
    
  ],
  FOOTER_LINKS: [
    {
      name: "Home",
      path: "/",
      id: 1,
    },
    {
      name: "About",
      path: "/about",
      id: 2,
    },
    {
      name: "Fleet",
      path: "/fleets",
      id: 3,
    },
   
    {
      name: "Restricted Baggage",
      path: "/restricted-baggage",
      id: 5,  
    },
    
  ],
};
