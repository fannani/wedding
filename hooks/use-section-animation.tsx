import React from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type UseSectionAnimationParamType = {
  threshold?: any;
};

const useSectionAnimation = (props?: UseSectionAnimationParamType) => {
  const baseRef = React.useRef();
  const animate = useAnimation();

  const [ref, inView] = useInView({
    threshold: props?.threshold ?? 0.5,
  });
  const handleRef = React.useCallback(
    (node) => {
      ref(node);
      baseRef.current = node;
    },
    [baseRef, ref],
  );
  React.useEffect(() => {
    if (inView) animate.start('visible');
    else animate.start('hidden');
  }, [inView]);

  return {
    handleRef,
    animate,
    ref: baseRef,
  };
};

export default useSectionAnimation;
