export const site = {
  name: 'SASE WPI',
  shortName: 'SASE WPI',
  tagline: 'Society of Asian Scientists and Engineers',
  description:
    'Worcester Polytechnic Institute Chapter of the Society of Asian Scientists and Engineers',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Executive Board', href: '/executive-board' },
    { label: '3 Pillars', href: '/pillars' },
    { label: 'Programs', href: '/programs' },
    { label: 'Conferences', href: '/conferences' },
    { label: 'Events', href: '/events' },
    { label: 'Sponsorship', href: '/sponsorship' },
    { label: 'Alumni', href: '/alumni' }
  ],
  footerText: 'Replace placeholder text, images, and links with your chapter details.'
};

// Shared image wheel used on every page.
// To add images later:
// 1) Put image files in src/assets/club-wheel/
// 2) Replace the `src` values below with your real file paths
// 3) Update the alt/caption text
export const sharedWheelImages = [
  {
    src: '../assets/images/wheel/placeholder-1.png',
    alt: 'Placeholder club image 1',
    caption: 'Replace with a featured chapter image'
  },
  {
    src: '../assets/images/wheel/placeholder-2.jpg',
    alt: 'Placeholder club image 2',
    caption: 'Replace with a conference or event photo'
  },
  {
    src: '../assets/images/wheel/placeholder-3.jpg',
    alt: 'Placeholder club image 3',
    caption: 'Replace with a professional development photo'
  },
  {
    src: '../assets/images/wheel/placeholder-4.jpg',
    alt: 'Placeholder club image 4',
    caption: 'Replace with a community or culture photo'
  }
];

export const pageContent = {
  home: {
    eyebrow: 'SASE WPI',
    title: 'Empowerment',
    intro:
      'Use this homepage to introduce your chapter mission, highlight your most important updates, and direct visitors to the pages they need most.',
    sections: [
      {
        title: 'What this page can include',
        body:
          'Add a concise welcome message, quick links, a short chapter overview, and one or two calls to action for students, sponsors, or alumni.'
      }
    ]
  },
  executiveBoard: {
    eyebrow: 'Leadership',
    title: 'Executive Board',
    sections: []
  },
  pillars: {
    eyebrow: 'Chapter Foundation',
    title: 'SASE’s 3 Pillars',
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
    intro:
      'Use this page to describe the two programs your chapter runs, who they serve, and how students can participate.',
    sections: [
      {
        title: 'Recommended structure',
        body:
          'Give each program its own section with a short overview, goals, timeline, and a clear next step for interested students.'
      }
    ]
  },
  conferences: {
    eyebrow: 'Professional Development',
    title: 'Conferences',
    intro:
      'Use this page to explain the two conferences your chapter attends and what students gain from each experience.',
    sections: [
      {
        title: 'Recommended structure',
        body:
          'For each conference, include purpose, typical attendees, chapter involvement, and how members prepare or apply.'
      }
    ]
  },
  events: {
    eyebrow: 'Chapter Activity',
    title: 'Events',
    intro:
      'Use this page to organize upcoming and past events in a way that makes it easy for students to see what your chapter offers.',
    sections: [
      {
        title: 'Recommended structure',
        body:
          'Separate upcoming and past events, then add short descriptions, dates, locations, and RSVP or recap links as needed.'
      }
    ]
  },
  sponsorship: {
    eyebrow: 'External Partners',
    title: 'Sponsorship',
    intro:
      'Use this page for companies interested in supporting your chapter and learning about sponsorship opportunities.',
    sections: [
      {
        title: 'Recommended structure',
        body:
          'Add a short chapter overview, sponsorship value proposition, partnership opportunities, and a link to your sponsorship package.'
      }
    ]
  },
  alumni: {
    eyebrow: 'Reconnect',
    title: 'Alumni',
    intro:
      'Use this page to help alumni stay connected, support current members, and learn how to re-engage with the chapter.',
    sections: [
      {
        title: 'Recommended structure',
        body:
          'Add ways for alumni to mentor, speak at events, attend reunions, share opportunities, or join your mailing list.'
      }
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
        major: 'Computer Science/Data Science',
        image: '/assets/images/board/president'
    },
    {
        name: 'Nicole Guan',
        role: 'Vice President',
        major: 'Data Science',
        image: '/assets/images/board/vp'
    },
    {
        name: 'Aadi Kumar',
        role: 'Treasurer',
        major: 'Mechanical Engineering',
        image: '/assets/images/board/treasurer'
    },
    {
        name: 'Myer Cheng',
        role: 'Secretary',
        major: 'Computer Science',
        image: '/assets/images/board/secretary'
    },
    {
        name: 'Angelina Voong',
        role: 'Events Coordinator',
        major: 'Electrical & Computer Engineering',
        image: '/assets/images/board/ec1'
    },
    {
        name: 'George Shui',
        role: 'Events Coordinator',
        major: 'Financial Technology',
        image: '/assets/images/board/ec2'
    },
    {
        name: 'Jules Sangil',
        role: 'Public Relations Chair',
        major: 'Data Science',
        image: '/assets/images/board/pr'
    },
    {
        name: 'Luhai Tang',
        role: 'Membership Chair',
        major: 'Robotics Engineering',
        image: '/assets/images/board/membership'
    },
    {
        name: 'Shuling Lin',
        role: 'Interim Membership Chair',
        major: 'Biology/Biotechnology',
        image: '/assets/images/board/interim-membership'
    }
]

export const programsTemplate = [
  {
    title: 'Program 1',
    summary: 'Add a short overview of your first program.',
    cta: 'Add a participation or contact link'
  },
  {
    title: 'Program 2',
    summary: 'Add a short overview of your second program.',
    cta: 'Add a participation or contact link'
  }
];

export const conferencesTemplate = [
  {
    title: 'Conference 1',
    summary: 'Add a short overview of the first conference your chapter attends.'
  },
  {
    title: 'Conference 2',
    summary: 'Add a short overview of the second conference your chapter attends.'
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
      title: 'Upcoming Event Placeholder',
      details: 'Add date, time, location, and RSVP information.'
    }
  ],
  past: [
    {
      title: 'Past Event Placeholder',
      details: 'Add a short recap, photos, or highlights.'
    }
  ]
};
