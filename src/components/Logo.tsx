interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

const Logo = ({ className = '', size = 'md', variant = 'default' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-primary';

  return (
    <div className={`font-display font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-port">C</span>
      <span className={textColor}>2</span>
      <span className="text-starboard">C</span>
      <span className={textColor}>Yachting</span>
    </div>
  );
};

export default Logo;
