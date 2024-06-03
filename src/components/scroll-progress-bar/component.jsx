import { useScroll } from '../../hooks/use-scroll';

export const ProgressBar = () => {
  const barPercentWidth = useScroll();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 4,
        width: barPercentWidth + '%',
        background:
          "linear-gradient( 90deg,rgb(157,134,233) 0%,rgb(97,218,251) 100% )",
        zIndex: 100,
        scrollBehavior: "smooth",
      }}
    />
)}
