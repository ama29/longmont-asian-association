import React, { useState } from "react";

export const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
      submenu: [
        {
          title: 'Initiatives',
          url: 'initiatives',
        },
        {
          title: 'Board of Directors',
          url: 'board-of-directors',
        },
        {
          title: 'Awards and Recognitions',
          url: 'awards-and-recognitions',
        },
        {
          title: 'Partners and Sponsors',
          url: 'partners-and-sponsors',
        },
      ],
    },
    {
      title: "Programs",
      url: "/programs",
      submenu: [
        {
          title: 'Cultural Outreach',
          url: 'cultural-outreach',
        },
        {
          title: 'Resource Referrals',
          url: 'resource-referrals',
        },
        {
          title: 'Community Service',
          url: 'community-service',
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
      submenu: [
        {
          title: 'Chinese New Year',
          url: 'chinese-new-year',
        },
        {
          title: 'Inclusive Communities',
          url: 'inclusive-communities',
        },
        {
          title: 'Longmont Tree Lighting',
          url: 'longmont-tree-lighting',
        },
        {
          title: 'Past Events',
          url: 'past-events',
        },
      ],
    },
    {
      title: "Get Involved",
      url: "/involvement",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ]