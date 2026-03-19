export const site = {
  name: 'SASE WPI',
  shortName: 'SASE WPI',
  tagline: 'Society of Asian Scientists and Engineers',
  description:
    'Worcester Polytechnic Institute Chapter of the Society of Asian Scientists and Engineers',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Executive Board', href: '/executive-board' },
    { label: 'Pillars', href: '/pillars' },
    { label: 'Programs', href: '/programs' },
    { label: 'Conferences', href: '/conferences' },
    { label: 'Events', href: '/events' },
    { label: 'Sponsorship', href: '/sponsorship' },
    { label: 'Alumni', href: '/alumni' }
  ],
  footerText: '© SASE WPI 2026. All rights reserved.'
};

// Shared image wheel used on every page.
// To add images later:
// 1) Put image files in src/assets/club-wheel/
// 2) Replace the `src` values below with your real file paths
// 3) Update the alt/caption text
export const sharedWheelImages = [
  {
    src: '../assets/images/wheel/IMG_4030.png',
    alt: 'Darren Kwee, an alum, presenting to our chapter at a recent professional development event'
  }
];

export const pageContent = {
  home: {
    eyebrow: 'SASE WPI',
    title: 'Learn more about us',
    // intro:
    //   'Use this homepage to introduce your chapter mission, highlight your most important updates, and direct visitors to the pages they need most.',
    sections: [
      // {
      //   title: 'What this page can include',
      //   body:
      //     'Add a concise welcome message, quick links, a short chapter overview, and one or two calls to action for students, sponsors, or alumni.'
      // }
    ]
  },
  executiveBoard: {
    eyebrow: 'Leadership',
    title: 'Executive Board',
    sections: []
  },
  pillars: {
    eyebrow: 'Chapter Foundation',
    title: 'Our Three Pillars',
    intro:
      '',
    sections: [
      {
        title: 'Professional Development',
        body: ''
      },
      {
        title: 'Cultural Advancement',
        body: ''
      },
      {
        title: 'Philanthropic Efforts',
        body: ''
      }
    ]
  },
  programs: {
    eyebrow: 'Chapter Programming',
    title: 'Programs',
    // intro:
    //   'Use this page to describe the two programs your chapter runs, who they serve, and how students can participate.',
    sections: [
      // {
      //   title: 'Recommended structure',
      //   body:
      //     'Give each program its own section with a short overview, goals, timeline, and a clear next step for interested students.'
      // }
    ]
  },
  conferences: {
    eyebrow: 'Professional Development',
    title: 'Conferences',
    // intro:
    // 'Use this page to explain the two conferences your chapter attends and what students gain from each experience.',
    sections: [
      // {
      //   title: 'Recommended structure',
      //   body:
      //     'For each conference, include purpose, typical attendees, chapter involvement, and how members prepare or apply.'
      // }
    ]
  },
  events: {
    eyebrow: 'Chapter Activity',
    title: 'Events',
    // intro:
    //   'Use this page to organize upcoming and past events in a way that makes it easy for students to see what your chapter offers.',
    sections: [
      // {
      //   title: 'Recommended structure',
      //   body:
      //     'Separate upcoming and past events, then add short descriptions, dates, locations, and RSVP or recap links as needed.'
      // }
    ]
  },
  sponsorship: {
    eyebrow: 'External Partners',
    title: 'Sponsorship',
    // intro:
    //   'Use this page for companies interested in supporting your chapter and learning about sponsorship opportunities.',
    sections: [
      // {
      //   title: 'Recommended structure',
      //   body:
      //     'Add a short chapter overview, sponsorship value proposition, partnership opportunities, and a link to your sponsorship package.'
      // }
    ]
  },
  alumni: {
    eyebrow: 'Reconnect',
    title: 'Alumni',
    intro:
      'Stay connected with us, even after graduation!',
    sections: [
      // {
      //   title: 'Recommended structure',
      //   body:
      //     'Add ways for alumni to mentor, speak at events, attend reunions, share opportunities, or join your mailing list.'
      // }
    ]
  }
};

// export const executiveBoardTemplate = Array.from({ length: 8 }, (_, index) => ({
//   name: `Board Member ${index + 1}`,
//   role: `Role ${index + 1}`,
//   major: 'Add major or class year',
//   image: `/assets/images/board/member-${index + 1}.jpg`,
//   bio: 'Add a short 1–2 sentence introduction here.'
// }));

export const executiveBoardTemplate = [
  {
    name: 'Colin Truong',
    role: 'President',
    major: 'Computer Science/Robotics Engineering',
    image: '/assets/images/board/president.jpg'
  },
  {
    name: 'Nicole Guan',
    role: 'Vice President',
    major: 'Data Science',
    image: '/assets/images/board/vp.jpg'
  },
  {
    name: 'Aadi Kumar',
    role: 'Treasurer',
    major: 'Mechanical Engineering',
    image: '/assets/images/board/treasurer.jpg'
  },
  {
    name: 'Myer Cheng',
    role: 'Secretary',
    major: 'Computer Science',
    image: '/assets/images/board/secretary.jpg'
  },
  {
    name: 'Angelina Voong',
    role: 'Events Coordinator',
    major: 'Robotics Engineering',
    image: '/assets/images/board/ec1.jpg'
  },
  {
    name: 'George Shui',
    role: 'Events Coordinator',
    major: 'Financial Technology',
    image: '/assets/images/board/ec2.jpg'
  },
  {
    name: 'Jules Sangil',
    role: 'Public Relations Chair',
    major: 'Data Science',
    image: '/assets/images/board/pr.jpg'
  },
  {
    name: 'Luhai Tang',
    role: 'Membership Chair',
    major: 'Robotics Engineering',
    image: '/assets/images/board/membership.jpg'
  },
  // {
  //   name: 'Shuling Lin',
  //   role: 'Interim Membership Chair',
  //   major: 'Biology/Biotechnology',
  //   image: '/assets/images/board/interim-membership.jpg'
  // }
]

export const programsTemplate = [
  {
    title: 'Mentor Mentee (M&M)',
    summary: '',
    // cta: ''
  },
  {
    title: 'Senior Banquet',
    summary: 'Each year, we hold a banquet to honor our graduating seniors and highlight their contributions to our chapter during their time at WPI',
    // cta: ''
  }
];

export const conferencesTemplate = [
  {
    title: 'Northeast Regional Conference',
    summary: 'SASE Northeast\'s regional conference'
  },
  {
    title: 'STEM Connect',
    summary: 'SASE\'s yearly national conference'
  }
];

export const pillarTemplate = [
  // {
  //   title: 'Pillar 1',
  //   summary: 'Add a short explanation of the first pillar.'
  // },
  // {
  //   title: 'Pillar 2',
  //   summary: 'Add a short explanation of the second pillar.'
  // },
  // {
  //   title: 'Pillar 3',
  //   summary: 'Add a short explanation of the third pillar.'
  // }
];

export const eventTemplate = {
  upcoming: [
    {
      title: 'SASE D-term GBM: SASEcapes',
      details: 'Wednesday, March 25th @ 6-7:30pm'
    }
  ],
  past: [
    {
      title: 'SASE Sitdowns',
      details: 'Wednesday, February 25th @ 6-7:30pm'
    },
    {
      title: 'SASE x SWE x NSBE: Elevate & Empower',
      details: 'Wednesday, February 18th @ 6-7:30pm'
    }
  ]
};
