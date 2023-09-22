import Image from 'next/image';

export const BurgerIcon = () => {
  return (
    <Image
      src='/assets/images/icons/burgermenu.svg'
      alt='Hamburger menu icon'
      width={20}
      height={20}
    />
  );
};
