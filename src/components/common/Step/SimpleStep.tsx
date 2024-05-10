"use-client";
import { usePrevious } from "@mantine/hooks";
import { useAnimate } from "framer-motion";
import React, {
  Children,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  active: number;
}

export function SimpleStep({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className="step" {...rest}>
      {children}
    </div>
  );
}

export function SimpleStepper({
  children,
  active,
  ...rest
}: PropsWithChildren<Props>) {
  const convertedChildren = Children.toArray(children) as React.ReactElement[];
  const stepContent = convertedChildren[active]?.props?.children;
  const [scope, animate] = useAnimate();
  const prevActive = usePrevious(active);

  useEffect(() => {
    (async () => {
      if (prevActive == active) return;
      if (active > (prevActive || 0)) {
        await animate(scope.current, { opacity: 0, x: 50 }, {});
        await animate(scope.current, { opacity: 0, x: -80 }, {});
      } else if (active < (prevActive || 0)) {
        await animate(scope.current, { opacity: 0, x: -50 }, {});
        await animate(scope.current, { opacity: 0, x: 80 }, {});
      }
      await animate(scope.current, { opacity: 1, x: 0 }, {});
    })();
  }, [active, animate, scope, prevActive]);

  return (
    <div style={{ opacity: 0 }} ref={scope} {...rest}>
      {stepContent}
    </div>
  );
}
