interface ScrollRevealTextProps { children: string; className?: string; }
const ScrollRevealText = ({ children, className = "" }: ScrollRevealTextProps) => (
  <h1 className={className}>{children}</h1>
);
export default ScrollRevealText;
