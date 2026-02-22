import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { ChevronRight } from 'lucide-react';
import type { OptionMenuProps, MenuOption } from './option-menu.types';
import './option-menu.css';

const MenuItem: React.FC<{
    option: MenuOption;
    onClose: () => void;
    depth?: number;
}> = ({ option, onClose, depth = 0 }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    if (option.isDivider) {
        return <div className="mango-menu-divider" />;
    }

    const hasChildren = option.children && option.children.length > 0;

    const handleClick = (e: React.MouseEvent) => {
        if (option.disabled) return;
        if (hasChildren) {
            e.stopPropagation();
            return;
        }
        option.onClick?.(option.id);
        onClose();
    };

    return (
        <button
            className={cn(
                'mango-menu-item',
                option.variant === 'danger' && 'is-danger',
                option.disabled && 'is-disabled',
                hasChildren && 'has-submenu'
            )}
            onClick={handleClick}
            onMouseEnter={() => hasChildren && setIsSubmenuOpen(true)}
            onMouseLeave={() => hasChildren && setIsSubmenuOpen(false)}
            disabled={option.disabled}
        >
            {option.icon && <span className="mango-menu-icon">{option.icon}</span>}
            <span className="mango-menu-label">{option.label}</span>
            {option.rightSection && <span className="mango-menu-right">{option.rightSection}</span>}
            {hasChildren && <ChevronRight size={14} className="mango-submenu-arrow" />}

            {hasChildren && (
                <div className={cn('mango-menu-dropdown mango-menu-submenu', isSubmenuOpen && 'is-open')}>
                    {option.children?.map((child) => (
                        <MenuItem key={child.id} option={child} onClose={onClose} depth={depth + 1} />
                    ))}
                </div>
            )}
        </button>
    );
};

export const OptionMenu: React.FC<OptionMenuProps> = ({
    trigger,
    options,
    placement = 'bottom-start',
    triggerType = 'click',
    opened: controlledOpened,
    onOpenedChange,
    closeOnItemClick = true,
    width,
    zIndex = 1000,
    className,
    blur = false,
    theme,
}) => {
    const [internalOpened, setInternalOpened] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const isOpened = controlledOpened !== undefined ? controlledOpened : internalOpened;

    const toggleMenu = useCallback((val?: boolean) => {
        const next = val !== undefined ? val : !isOpened;
        if (controlledOpened === undefined) {
            setInternalOpened(next);
        }
        onOpenedChange?.(next);
    }, [isOpened, controlledOpened, onOpenedChange]);

    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !isOpened) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const menuWidth = menuRef.current?.offsetWidth || 200;
        const menuHeight = menuRef.current?.offsetHeight || 0;

        let top = 0;
        let left = 0;

        // Base placements
        switch (placement) {
            case 'bottom-start':
                top = rect.bottom + 8;
                left = rect.left;
                break;
            case 'bottom-end':
                top = rect.bottom + 8;
                left = rect.right - menuWidth;
                break;
            case 'bottom-center':
                top = rect.bottom + 8;
                left = rect.left + rect.width / 2 - menuWidth / 2;
                break;
            case 'top-start':
                top = rect.top - menuHeight - 8;
                left = rect.left;
                break;
            case 'top-end':
                top = rect.top - menuHeight - 8;
                left = rect.right - menuWidth;
                break;
            case 'right-start':
                top = rect.top;
                left = rect.right + 8;
                break;
            case 'left-start':
                top = rect.top;
                left = rect.left - menuWidth - 8;
                break;
            default:
                top = rect.bottom + 8;
                left = rect.left;
        }

        // Collision detection (Simple)
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        if (top + menuHeight > viewportHeight && top > menuHeight) {
            // Flip to top if no space at bottom
            top = rect.top - menuHeight - 8;
        } else if (top < 0 && rect.bottom + menuHeight < viewportHeight) {
            // Flip to bottom if no space at top
            top = rect.bottom + 8;
        }

        if (left + menuWidth > viewportWidth) {
            left = viewportWidth - menuWidth - 16;
        } else if (left < 16) {
            left = 16;
        }

        setPosition({ top, left });
    }, [isOpened, placement]);

    useEffect(() => {
        if (isOpened) {
            calculatePosition();
            window.addEventListener('scroll', calculatePosition, true);
            window.addEventListener('resize', calculatePosition);
        }
        return () => {
            window.removeEventListener('scroll', calculatePosition, true);
            window.removeEventListener('resize', calculatePosition);
        };
    }, [isOpened, calculatePosition]);

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
                menuRef.current && !menuRef.current.contains(event.target as Node)
            ) {
                toggleMenu(false);
            }
        };

        if (isOpened) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpened, toggleMenu]);

    const triggerProps = (trigger as React.ReactElement).props as any;

    const clonedTrigger = React.cloneElement(trigger as React.ReactElement, {
        ref: triggerRef,
        onClick: (e: React.MouseEvent) => {
            if (triggerType === 'click') {
                e.stopPropagation();
                toggleMenu();
            }
            triggerProps.onClick?.(e);
        },
        onMouseEnter: (e: React.MouseEvent) => {
            if (triggerType === 'hover') {
                toggleMenu(true);
            }
            triggerProps.onMouseEnter?.(e);
        },
    } as any);

    return (
        <div className="mango-menu-wrapper">
            {clonedTrigger}

            <div
                ref={menuRef}
                className={cn(
                    'mango-menu-dropdown',
                    isOpened && 'is-open',
                    blur && 'is-blur',
                    className
                )}
                style={{
                    top: position.top,
                    left: position.left,
                    width,
                    zIndex,
                }}
                data-theme={theme}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.id}
                        option={option}
                        onClose={() => closeOnItemClick && toggleMenu(false)}
                    />
                ))}
            </div>
        </div>
    );
};

OptionMenu.displayName = 'OptionMenu';
