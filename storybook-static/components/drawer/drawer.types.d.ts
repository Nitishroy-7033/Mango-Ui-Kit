import { ReactNode } from '../../../node_modules/react';
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    /** Position of the drawer */
    position?: 'left' | 'right' | 'top' | 'bottom';
    /** Width for left/right, Height for top/bottom */
    size?: string | number;
    /** Whether to show the close button */
    showClose?: boolean;
    /** Whether to show the entire header section */
    showHeader?: boolean;
    /** Whether to show the entire footer section */
    showFooter?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
