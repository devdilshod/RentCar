import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionTitle({ title, linkText, to }) {
    return (
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-base md:text-xl font-semibold text-base-content/60">
                {title}
            </h2>
            {to && (
                <Link to={to} className="text-primary text-sm md:text-base font-semibold hover:underline">
                    {linkText || "View All"}
                </Link>
            )}
        </div>
    );
}