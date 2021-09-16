import React, { ImgHTMLAttributes } from 'react';

interface ProgressiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
}

const cacheKeys: string[] = [];

export const ProgressiveImage: React.FC<ProgressiveImageProps> = (props) => {
    const inCache = cacheKeys.find(cacheKey => cacheKey === props.src);
    return (
        <img
            {...props}
            style={{
                ...props?.style,
                transition: 'filter 500ms ease 0s',
                visibility: inCache ? 'visible' : 'hidden',
                filter: inCache ? 'blur(0px)' : 'blur(10px)'
            }}
            onLoad={(event) => {
                if (props.onLoad) {
                    props.onLoad(event);
                }
                if (!inCache) {
                    if (event?.currentTarget) {
                        event.currentTarget.style.visibility = 'visible';
                        event.currentTarget.style.filter = 'blur(0px)';
                    }
                    cacheKeys.push(props.src);
                }
            }}
        />
    );
}
