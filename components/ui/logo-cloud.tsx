import React from 'react';
import { InfiniteSlider } from "./infinite-slider";
import { cn } from "../../lib/utils";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
    isHuman: boolean;
};

export function LogoCloud({ className, logos, isHuman, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-4",
                // Soft mask based on theme 
                isHuman
                    ? "[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
                    : "[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
                className
            )}
        >
            <InfiniteSlider gap={64} reverse speed={40} speedOnHover={15}>
                {logos.map((logo) => (
                    <img
                        key={`logo-${logo.alt}`}
                        alt={logo.alt}
                        // Use CSS invert tricks based on theme
                        className={cn(
                            "pointer-events-none select-none h-6 md:h-8 hover:scale-110 transition-transform duration-500",
                            // Since the strip is white in both modes, the natively white _light logos must be inverted to pure black.
                            "brightness-0 opacity-60 hover:opacity-100"
                        )}
                        height={logo.height || "auto"}
                        loading="lazy"
                        src={logo.src}
                        width={logo.width || "auto"}
                    />
                ))}
            </InfiniteSlider>
        </div>
    );
}
