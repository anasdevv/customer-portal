import React, { PropsWithChildren } from 'react';

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { AnimationControls, motion } from 'framer-motion';
import useInView from './useInView';

function AnimationReveal({
  disabled,
  children,
}: {
  disabled: boolean;
  children: React.ReactElement | React.ReactElement[];
}) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ['left', 'right'];
  const childrenWithAnimation = children?.map((child, i) => {
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[i % directions.length] as Direction}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

type Direction = 'left' | 'right';

function AnimatedSlideInComponent({
  direction = 'left',
  offset = 30,
  children,
}: PropsWithChildren<{
  direction: Direction;
  offset?: number;
}>) {
  const { ref, isInView: inView } = useInView({
    margin: `-${offset}px 0px 0px 0px`,
  });

  const x = { target: '0%', initial: '150%' };

  if (direction === 'left') x.initial = '-150%';

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={
          {
            x: inView && x.target,
            transitionEnd: {
              x: inView && 0,
            },
          } as unknown as AnimationControls
        }
        transition={{ type: 'spring', damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default (props: any) => (
  <div className='font-display min-h-screen text-secondary-500 px-8 overflow-hidden`'>
    <AnimationReveal {...props} />
  </div>
);
