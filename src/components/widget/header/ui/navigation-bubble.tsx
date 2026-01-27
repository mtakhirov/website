import { cn } from "#utils";

function NavigationBubble() {
  return (
    <div id="navigation-bubble">
      {/* Navigation Logo Bubble */}
      {/* Navigation Logo Bubble (Hover) */}
      <span
        id="navigation-logo__bubble-hover"
        className={cn`
          anchored/navigation-logo top-anchor-top right-anchor-right
          bottom-anchor-bottom left-anchor-left -z-2 m-0.5 rounded-full border
          border-border/10 bg-accent/80 transition-all
        `}
      />

      {/* Navigation List Bubble Active */}
      <span
        id="navigation-list__bubble-active"
        className={cn`
          anchored/active-navigation-list top-anchor-top right-anchor-right
          bottom-anchor-bottom left-anchor-left -z-1 m-0.5 rounded-full border
          border-border/10 bg-accent transition-all duration-500
          ease-[cubic-bezier(0.2,1,0.2,1)]
        `}
      />

      {/* Navigation List Bubble Hover */}
      <span
        id="navigation-list__bubble-hover"
        className={cn`
          anchored/navigation-list top-anchor-top right-anchor-right
          bottom-anchor-bottom left-anchor-left -z-2 m-0.5 rounded-full border
          border-border/10 bg-accent/80 transition-all duration-500
          ease-[cubic-bezier(0.2,1,0.2,1)]
        `}
      />
    </div>
  );
}

export default NavigationBubble;
export { NavigationBubble };
