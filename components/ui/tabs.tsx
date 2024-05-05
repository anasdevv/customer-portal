'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// import useStore from '@/app/store/useStore';
import { useUser } from '@/app/providers/UserContext';
import { setCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  disabled?: boolean;
};

export const Tabs = ({
  initalActive,
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  initalActive?: Tab;
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  // const logoutUser = useStore(useUserStore, (state) => state.resetUser);
  const [active, setActive] = useState<Tab>(() =>
    initalActive ? initalActive : propTabs[0]
  );
  const pathname = usePathname();
  const { logout } = useUser();
  const [_, __, path, roomId] = pathname.split('/');
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const router = useRouter();
  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  console.log('roomId ', roomId);
  useEffect(() => {
    if (path === 'rooms') return;
    const idx = tabs.findIndex((t) => t.value === path);

    console.log('idx ', idx, ' path ', path);
    if (idx >= 0) {
      moveSelectedTabToTop(idx);
    }
  }, [roomId]);
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          ' flex flex-row items-center justify-center [perspective:1000px] relative overflow-hidden sm:overflow-visible no-visible-scrollbar max-w-full w-full  py-2 rounded pl-2 bg-gradient-to-r from-indigo-600 to-sky-300',
          containerClassName
        )}
      >
        {/* <div className=''> */}
        <button
          className='px-5 absolute left-5   h-[2rem]  bg-white rounded shadow-md  transition hover:origin-top-left hover:rotate-6'
          onClick={(e) => {
            console.log('clicked logout');
            e?.preventDefault();
            logout();
            setCookie('Authentication', '');
            router.replace('/auth/login');
          }}
        >
          Logout
        </button>
        {/* </div> */}
        {propTabs.map((tab, idx) => (
          <button
            disabled={tab?.disabled ?? false}
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
              window.history.pushState(null, '', `/tabs/${tab.value}`);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn('relative px-4 py-2 rounded-full', tabClassName)}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId='clickedbutton'
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ',
                  activeTabClassName
                )}
              />
            )}

            <span className='relative block text-black dark:text-white'>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn('mt-14', contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  console.log('infiniteloop');
  return (
    <div className='relative w-full h-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn('w-full h-full absolute top-0 left-0', className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
