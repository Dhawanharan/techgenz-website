/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Competition, CompetitionGallery, TeamMember } from './types';

export const INITIAL_COMPETITIONS: Competition[] = [
  {
    id: 'comp-1',
    name: 'YarlGeek Innovation Festival 2025',
    status: 'Finalist',
    description: 'Designed and prototyped "Agri-Planner" a mobile application provides A-Z guild for farmers.',
    date: 'August 2025',
    techStack: ['Kotlin', 'Startup-Essentials'],
    imageUrl: 'assets/yarlgeek/7.jpg?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'comp-2',
    name: 'SLIoT Challenge 2026',
    status: 'Semi-Finalist',
    description: 'Developed a Sign-Audio bridge: IOT hand to help disables',
    date: 'Jan 2026',
    techStack: ['C++', 'ESP32', 'Python', 'MQTT'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'comp-3',
    name: 'Cre8x Hackathon',
    status: 'Participant',
    description: "An intense 36-hour challenge where we built 'BlueGuard' - an mobile app to protect Coastal areas.",
    date: 'November 2025',
    techStack: ['figma'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'comp-4',
    name: 'NEO Innovation Challenge',
    status: 'Registered / Upcoming',
    description: 'Preparing an ultra-low latency decentralized disaster response mesh network that utilizes drone-guided communication relays in active flood areas.',
    date: 'July 2026',
    techStack: ['Rust', 'WebRTC', 'Go', 'Flutter', 'Hardware Mesh'],
    imageUrl: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_SLIDESHOWS: CompetitionGallery[] = [
  {
    id: 'slideshow-1',
    competitionName: 'YarlGeek Innovation Festival',
    description: 'Startup Essentials and stage presentations.',
    folderPath: '/assets/yarlgeek/',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
  },
  {
    id: 'slideshow-2',
    competitionName: 'SLIoT Challenge',
    description: 'IOT Design and Development.',
    folderPath: '/assets/sliot/',
    images: ['1.jpg', '2.jpg']
  }
];

export const INITIAL_SQUAD: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Amshayan Bhavananthan',
    role: 'Founder',
    currentStatus: 'BSc in Computer Science (UG)',
    avatar: '#',
    skills: ['Strategy', 'Leadership', 'Product'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'member-2',
    name: 'Dhawanharan Mahalingam',
    role: 'Co-Founder',
    currentStatus: 'BSc in Computer Science (UG)',
    avatar: '/assets/squard/dhawan.jpg?auto=format&fit=crop&w=300&h=300&q=80',
    skills: ['HCI', 'Web Design', 'QA'],
    github: 'https://github.com/dhawanharan',
    linkedin: 'https://linkedin.com/in/dhawanharan',
    behance: 'https://behance.net/dhawanharan'
  },
  {
    id: 'member-3',
    name: 'Tharshan Atpudharasu',
    role: 'Co-Founder',
    currentStatus: 'BSc in Computer Science (UG)',
    avatar: '#',
    skills: ['Design', 'UI', 'Operations'],
    github: 'https://github.com/tharshanofficial',
    linkedin: 'https://linkedin.com/in/tharshanofficial'
  },
  {
    id: 'member-4',
    name: 'Dilushan',
    role: 'Member',
    currentStatus: 'BSc in Physical Science (UG)',
    avatar: '#',
    skills: ['Frontend', 'React', 'Tailwind'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'member-5',
    name: 'Rajeen',
    role: 'Member',
    currentStatus: 'BSc in Computer Science (UG)',
    avatar: '#',
    skills: ['Backend', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'member-6',
    name: 'Nithuja',
    role: 'Member',
    currentStatus: 'BSc in Physical Science (UG)',
    avatar: '#',
    skills: ['Hardware', 'IoT', 'C++'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];
