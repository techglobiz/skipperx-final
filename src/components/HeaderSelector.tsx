'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';
import HomeHeader from './HomeHeader';

const HeaderSelector = () => {
  const pathname = usePathname();
  
  // Show HomeHeader only on the home page ("/")
  if (pathname === '/') {
    return <HomeHeader />;
  }
  
  // Show regular Header for all other pages
  return <Header />;
};

export default HeaderSelector;
