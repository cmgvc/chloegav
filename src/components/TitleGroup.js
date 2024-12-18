export const Title = ({ className }) => (
    <div className={className}>
      <div className="first">CHLOE</div>
      &nbsp;
      <div className="last">GAVRILOVIC</div>
    </div>
);
  
export const TitleGroup = ({ containerClass, titleClass, count = 3 }) => (
    <div className={`title-container ${containerClass || ""}`}>
      {Array.from({ length: count }).map((_, index) => (
        <Title key={index} className={titleClass} />
      ))}
    </div>
);