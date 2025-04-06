// Definition of constants used in the project
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { AiFillWechat } from "react-icons/ai";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import synflo from '../assets/images/synflo.png';
import rarafresh from '../assets/images/rarafresh.png';
import aicarehealth from '../assets/images/aicarehealth.png';
import personalweb from '../assets/images/personalweb.png';

export const GithubUrl = "https://github.com/RyannnnC"
export const LinkedInUrl = "https://www.linkedin.com/in/ryan-cai-aab38b227/"

interface ContactItem {
    name: string;
    icon: IconType;
    url: string | null;
    content: string;
}

export const contactList: Record<string, ContactItem> = {
    wechat: {
      name: 'wechat',
      icon: AiFillWechat,
      url: null,
      content: 'Ryc_1231',
    },
    phone: {
      name: 'phone',
      icon: MdPhoneIphone,
      url: 'tel:+61416502123',
      content: '+61 416 502 123',
    },
    email: {
      name: 'email',
      icon: MdEmail,
      url: 'mailto:qq398268537@gmail.com',
      content: 'qq398268537@gmail.com',
    },
};

export interface ProjectItem {
    name: string;
    description: string;
    image: string;
    url: string;
}

export const projectList: Record<string, ProjectItem> = {
    synflo: {
        name: 'Synflo',
        description: 'A web application that allows users to create and manage their own custom workflows.',
        image: synflo,
        url: 'https://alliancecc.synflo.co/',
    },
    raraFresh: {
        name: 'Rara Fresh',
        description: 'Well designed web application that allows users to order fresh pet products online.',
        image: rarafresh,
        url: 'https://www.rarafresh.com.au/',
    },
    aicareHealth: {
        name: 'Aicare Health',
        description: 'Mobile application that allow remote monitoring of patients and telehealth services.',
        image: aicarehealth,
        url: 'https://www.aicarehealth.com.au/',
    },
    personalWeb: {
        name: 'Personal Website',
        description: 'Creative portfolio with animated elements and some funny HTML5 games.',
        image: personalweb,
        url: 'http://localhost:7001/',
    }
}
