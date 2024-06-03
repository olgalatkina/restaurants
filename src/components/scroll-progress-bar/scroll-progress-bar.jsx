import { useScrollProgress } from '../../hooks/use-scroll-progress-bar';

export const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div
      style={{
        width: `${scrollProgress}%`,
        height: 8,
        background:
          "linear-gradient( 90deg,rgb(157,134,233) 0%,rgb(97,218,251) 100% )",
        scrollBehavior: "smooth",
      }}
    />
)}
