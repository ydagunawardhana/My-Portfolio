'use client';

import { TechDetails as TechDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  return (
    <div className="flex flex-col items-center justify-center w-20 md:w-24 gap-2">
      <Link noCustomization href={url} externalLink>
        {typeof logo === 'function' ? (
          <div className="flex items-center justify-center transition-transform duration-300 md:hover:scale-110">
            {(() => {
              const Icon = logo as React.ElementType;
              return <Icon className="!w-16 !h-16 object-contain text-gray-700 dark:text-gray-300 transition-transform duration-300 md:hover:scale-110" />;
            })()}
          </div>
        ) : (
          <ImageWrapper
            src={logo as any}
            srcForDarkMode={darkModeLogo as any}
            alt={label}
            className="!w-16 !h-16 object-contain transition-transform duration-300 md:hover:scale-110"
          />
        )}
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
