import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Bold, Italic, Link, Copy } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SelectionToolbarProps, SelectionDetails, SelectionAction } from './selection-toolbar.types';
import './selection-toolbar.css';

export const SelectionToolbar: React.FC<SelectionToolbarProps> = ({
    target,
    onSelectionChange,
    actions,
    showDefaultActions = true,
    variant = 'default',
    className,
    style,
    children
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [details, setDetails] = useState<SelectionDetails | null>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateSelection = useCallback(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
            setIsVisible(false);
            setDetails(null);
            onSelectionChange?.(null);
            return;
        }

        const range = selection.getRangeAt(0);
        const text = selection.toString().trim();

        if (text.length === 0) {
            setIsVisible(false);
            setDetails(null);
            onSelectionChange?.(null);
            return;
        }

        // Check if selection is within the target container
        let isInside = true;
        if (target) {
            const container = typeof target === 'string'
                ? document.querySelector(target)
                : target.current;
            if (container && !container.contains(selection.anchorNode)) {
                isInside = false;
            }
        } else if (containerRef.current && !containerRef.current.contains(selection.anchorNode)) {
            isInside = false;
        }

        if (!isInside || !containerRef.current) {
            setIsVisible(false);
            return;
        }

        const containerRect = containerRef.current.getBoundingClientRect();
        const rect = range.getBoundingClientRect();

        const newDetails: SelectionDetails = {
            text,
            wordCount: text.split(/\s+/).filter(w => w.length > 0).length,
            charCount: text.length,
            range,
            rect
        };

        setDetails(newDetails);
        onSelectionChange?.(newDetails);

        // Position toolbar above selection relative to container
        setPosition({
            top: rect.top - containerRect.top - 50,
            left: (rect.left - containerRect.left) + rect.width / 2
        });
        setIsVisible(true);
    }, [target, onSelectionChange]);

    useEffect(() => {
        const handleMouseUp = () => {
            // Delay slightly to allow selection to finalize
            setTimeout(updateSelection, 10);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsVisible(false);
            }
        };

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('keyup', handleMouseUp);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('keyup', handleMouseUp);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [updateSelection]);

    const defaultActions: SelectionAction[] = [
        {
            id: 'bold',
            icon: <Bold size={16} />,
            onClick: (d) => console.log('Bold:', d.text)
        },
        {
            id: 'italic',
            icon: <Italic size={16} />,
            onClick: (d) => console.log('Italic:', d.text)
        },
        {
            id: 'link',
            icon: <Link size={16} />,
            onClick: (d) => console.log('Link:', d.text)
        },
        {
            id: 'copy',
            icon: <Copy size={16} />,
            onClick: (d) => {
                navigator.clipboard.writeText(d.text);
                console.log('Copied');
            }
        }
    ];

    const allActions = actions || (showDefaultActions ? defaultActions : []);

    if (!isVisible && !children) return null;

    return (
        <div ref={containerRef} className={cn('mango-selection-container', className)} style={style}>
            {children}

            {isVisible && (
                <div
                    ref={toolbarRef}
                    className={cn('mango-selection-toolbar', `variant-${variant}`)}
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    <div className="toolbar-inner">
                        {allActions.map((action, index) => (
                            <React.Fragment key={action.id}>
                                <button
                                    className={cn('toolbar-btn', action.className)}
                                    onClick={() => details && action.onClick(details)}
                                    title={action.label}
                                >
                                    {action.icon}
                                </button>
                                {index === 2 && allActions.length > 3 && <div className="toolbar-divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

SelectionToolbar.displayName = 'SelectionToolbar';
