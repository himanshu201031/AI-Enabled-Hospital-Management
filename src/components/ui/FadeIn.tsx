'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
    const directions = {
        up: { y: 40, opacity: 0 },
        down: { y: -40, opacity: 0 },
        left: { x: 40, opacity: 0 },
        right: { x: -40, opacity: 0 },
        none: { opacity: 0 }
    };

    return (
        <motion.div
            initial={directions[direction]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
