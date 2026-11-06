// SleekTrader wordmark: a rising-trend mark followed by the brand name.
// See: src/components/layout/app-logo/README.md for how to swap in a different logo.

type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({ width = 132, height = 32, fill = 'currentColor', className = '' }: TBrandLogoProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 132 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            role='img'
            aria-label='SleekTrader'
        >
            <rect x='2' y='4' width='24' height='24' rx='6' fill='#3b82f6' />
            <path
                d='M7 21L12 15.5L15.5 18.5L21 11.5'
                stroke='#ffffff'
                strokeWidth='2.2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M17.5 11.5H21V15'
                stroke='#ffffff'
                strokeWidth='2.2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <text
                x='32'
                y='21.5'
                fontFamily='system-ui, -apple-system, sans-serif'
                fontSize='16'
                fontWeight='700'
                fill={fill}
            >
                SleekTrader
            </text>
        </svg>
    );
};

// CUSTOMIZATION OPTIONS:
//
// Option 1: Replace SVG inline (Recommended for vector logos)
// --------------------------------------------------------
// Delete the placeholder SVG above and paste your logo's SVG code:
//
// export const BrandLogo = ({ width = 120, height = 32, fill = 'currentColor' }) => {
//     return (
//         <svg width={width} height={height} viewBox="0 0 120 32" fill="none">
//             {/* Your logo's SVG paths here */}
//             <path d="M..." fill={fill} />
//             <path d="M..." fill={fill} />
//         </svg>
//     );
// };
//
//
// Option 2: Use image file (For PNG/JPG logos)
// ---------------------------------------------
// 1. Place your logo in: public/logo.svg (or .png)
// 2. Replace this component with:
//
// export const BrandLogo = ({ width = 120, height = 32, className = '' }: TBrandLogoProps) => {
//     return (
//         <img
//             src="/logo.svg"
//             alt="Brand Logo"
//             width={width}
//             height={height}
//             className={className}
//         />
//     );
// };
//
//
// Option 3: Use external URL
// ---------------------------
// export const BrandLogo = ({ width = 120, height = 32 }: TBrandLogoProps) => {
//     return (
//         <img
//             src="https://yourdomain.com/logo.svg"
//             alt="Brand Logo"
//             width={width}
//             height={height}
//         />
//     );
// };
//
// For detailed instructions, see: src/components/layout/app-logo/README.md
