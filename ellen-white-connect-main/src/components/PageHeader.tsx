interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div 
      className="relative h-64 md:h-80 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
