import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type RevealDirection = "up" | "left" | "right" | "fill-left" | "fill-up";

interface RevealProps extends PropsWithChildren {
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  once?: boolean;
}

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: RevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const hiddenStyle: Record<RevealDirection, string> = {
    up: "opacity-0 translate-y-16",
    left: "opacity-0 -translate-x-16",
    right: "opacity-0 translate-x-16",

    // 오른쪽이 잘린 상태에서 왼쪽 → 오른쪽으로 펼쳐짐
    "fill-left": "opacity-0 [clip-path:inset(0_100%_0_0)]",

    // 아래쪽이 잘린 상태에서 위 → 아래로 펼쳐짐
    "fill-up": "opacity-0 [clip-path:inset(0_0_100%_0)]",
  };

  const visibleStyle: Record<RevealDirection, string> = {
    up: "opacity-100 translate-y-0",
    left: "opacity-100 translate-x-0",
    right: "opacity-100 translate-x-0",
    "fill-left": "opacity-100 [clip-path:inset(0_0_0_0)]",
    "fill-up": "opacity-100 [clip-path:inset(0_0_0_0)]",
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transform-gpu
        transition-[opacity,transform,clip-path]
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        ${isVisible ? visibleStyle[direction] : hiddenStyle[direction]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
