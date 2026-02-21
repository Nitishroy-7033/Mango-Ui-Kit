import { default as React } from '../../../node_modules/react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
}
export declare const Card: ({ className, hoverable, children, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const CardHeader: ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
export declare const CardTitle: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => import("react/jsx-runtime").JSX.Element;
export declare const CardContent: ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
