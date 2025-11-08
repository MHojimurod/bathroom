import React, { useState, useEffect } from 'react';
import type { Achievement } from '../types';
import { useLanguage } from '../context/LanguageContext';


const AnimatedCounter: React.FC<{ value: number }> = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 1500;
        const startTime = Date.now();

        const frame = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const currentCount = Math.floor(progress * value);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(frame);
            }
        };

        requestAnimationFrame(frame);
    }, [value]);

    return <span className="text-4xl md:text-5xl font-bold text-gray-900">{count.toLocaleString()}+</span>;
};


const Achievement: React.FC = () => {
    const { t } = useLanguage();

    const ACHIEVEMENTS: Achievement[] = [
        { value: 2500, label: t.achievement.products },
        { value: 30000, label: t.achievement.clients },
        { value: 20, label: t.achievement.partners },
        { value: 5, label: t.achievement.branches },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENTS.map((ach) => (
                <div key={ach.label} className="p-6 bg-white rounded-lg shadow-md">
                    <AnimatedCounter value={ach.value} />
                    <p className="text-gray-500 mt-2">{ach.label}</p>
                </div>
            ))}
        </div>
    )

}
export default Achievement;