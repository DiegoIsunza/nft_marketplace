import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image'; // equivalent: <img /> tag
import Link from 'next/link'; // equivalent: <a /> tag
import images from '../assets';

const Navbar = () => {
  const { theme, setTheme } = useTheme(); // info wether we are in the light or dark mode

  return (
    <div>test</div>
  );
};

export default Navbar;
