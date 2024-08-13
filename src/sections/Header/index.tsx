'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';
import Link from 'next/link';

const BarsComponent: FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
};
BarsComponent.displayName = 'Menu Bar Component';

export const HeaderSection: FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const headerNavRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (!window || !headerRef.current || !headerNavRef.current) return;

    const sizing = {
      SPACE_SIZE: 16,

      get padding() {
        return this.SPACE_SIZE * 2;
      },

      get gap() {
        return this.SPACE_SIZE * 2;
      }
    };

    const headerElement = headerRef.current;
    const headerNavElement = headerNavRef.current;

    const calculateNavWidth = (scrolled: boolean): string => {
      if (scrolled === false) return '100%';

      // prettier-ignore
      const elementsWidth = Array.from(headerNavElement.childNodes).map((child) => {
        if (child instanceof HTMLElement) {
          return child.getBoundingClientRect().width;
        }

        return 0;
      }).reduce((result, width) => result + width, sizing.padding + sizing.gap);

      return elementsWidth + 'px';
    };

    const onScroll = (_e: Event) => {
      const scrollTop = window.scrollY;
      if (scrolled === true && scrollTop >= sizing.SPACE_SIZE) return;

      headerElement.style.setProperty(
        '--header-nav-width',
        calculateNavWidth(scrollTop >= sizing.SPACE_SIZE)
      );
      setScrolled(scrollTop >= sizing.SPACE_SIZE);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrolled]);

  return (
    <header
      data-scrolled={scrolled}
      ref={headerRef}
      className={cn([
        'group container flex sticky justify-center top-0 my-4',
        'data-[scrolled=true]:top-4 transition-[top]'
      ])}
    >
      <nav
        ref={headerNavRef}
        className={cn([
          'group bg-black/0 flex items-center justify-between backdrop-filter',
          'w-full max-w-[var(--header-nav-width,_100%)] py-2.5 px-0 gap-2 md:gap-4 rounded-full',
          'group-data-[scrolled=true]:bg-black/60 group-data-[scrolled=true]:backdrop-blur-sm',
          'transition-all duration-300 group-data-[scrolled=true]:px-4'
        ])}
      >
        <Link href='/' className='hover:underline underline-offset-2'>
          <h3>{`Takhirov's Diary`}</h3>
        </Link>

        <span className='w-px h-full bg-gray-400 opacity-0 group-data-[scrolled=true]:opacity-100' />

        <div className='hidden md:flex items-center gap-4'>
          <Link href='/about'>About</Link>
          <Link href='/posts'>Blog</Link>
          <Link href='/works'>Works</Link>
          <Link href='/resume'>Resume</Link>
        </div>

        <div className='flex md:hidden items-center gap-4'>
          <BarsComponent />
        </div>
      </nav>
    </header>
  );
};

HeaderSection.displayName = 'Footer section';
export default HeaderSection;
