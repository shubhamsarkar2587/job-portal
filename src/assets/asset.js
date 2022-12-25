import logo from './png/logo.png';
import archslate from './png/archslate.png';
import candidate from './png/candidate.png';
import company from './png/company.png';
import job from './png/job.png';
import notification from './png/notification.png';
import user from './png/user.png';
import back_arrow from './png/back_arrow.png';
import image1 from './png/image1.png';
import share from './png/share.png';
import bookmark from './png/bookmark.png';
import skill from './png/skill.png';
import star from './png/star.png';
import rate from './png/rate.png';
import location from './png/location.png';
import hr_image from './png/hr_image.png';

import mail from './svg/mail.svg';
import starSvg from './svg/star.svg';
import shareSvg from './svg/share.svg';

export const pngAsset = {
  global: {
    back_arrow
  },
  navbar: {
    logo,
    archslate,
    candidate,
    company,
    job,
    notification,
    user
  },
  CompanyDetail: {
    image1,
    share,
    bookmark
  },
  jobOverview: {
    skill,
    star,
    rate,
    location
  },
  recruiterDetail: {
    hr_image
  }
}

export const svgAsset = {
  jobOverview: {
    star: starSvg,
    share: shareSvg
  },
  recruiterDetail: {
    mail,
  }
}