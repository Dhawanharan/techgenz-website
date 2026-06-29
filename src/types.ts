/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CompetitionStatus = 'Finalist' | 'Semi-Finalist' | 'Participant' | 'Registered / Upcoming';

export interface Competition {
  id: string;
  name: string;
  status: CompetitionStatus;
  description: string;
  date: string;
  techStack: string[];
  imageUrl: string;
}

export interface CompetitionGallery {
  id: string;
  competitionName: string;
  description: string;
  folderPath: string; // e.g., '/assets/yarlgeek/'
  images: string[];   // e.g., ['photo1.jpg', 'photo2.jpg']
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  currentStatus: string;
  avatar: string;
  skills: string[];
  github: string;
  linkedin: string;
  behance?: string;
}

