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
      path: "/cessna",
      id: 2,
      type: "overlay",
      Children:[
        {
          name: "CSR",
          path: "/compliance/csr",
          id: 2.1,
        },
        {
          name: "Annual Report",
          path: "/compliance/annual-report",
          id: 2.2,
        },
      ]
    },
    {
      name: "BEECHCRAFT",
      path: "/beechcraft",
      id: 3,
      type: "overlay",
      Children:[
        {
          name: "CSR",
          path: "/compliance/csr",
          id: 3.1,
        },
        {
          name: "Annual Report",
          path: "/compliance/annual-report",
          id: 3.2,
        },
        {
          name: "Notice",
          path: "/compliance/notice",
          id: 3.3,
        },
      ]
    },
    {
      name: "SERVICES",
      path: "/services",
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
      path: "/restricted-baggage",
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
          path: "/aerosystem/achievements",
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
