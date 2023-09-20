import { heroSection } from '@/app/api/response.json';

export const imgData = [
  {
    wrapper: 'md:hidden relative h-[383px] w-[174px]',
    img: heroSection.img.mobile,
    alt: 'Profile photo',
  },
  {
    wrapper: 'hidden md:block lg:hidden relative h-[600px] w-[322px]',
    img: heroSection.img.tablet,
    alt: 'Profile photo',
  },
  {
    wrapper: 'hidden lg:block relative h-[720px] w-[445px]',
    img: heroSection.img.desktop,
    alt: 'Profile photo',
  },
];

export const heroTextVariants = {
  hide: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
};

export const heroImageVariants = {
  hide: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
