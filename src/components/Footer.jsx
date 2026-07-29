import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-base-100 text-base-content border-t border-base-300 transition-colors duration-300 pt-16 pb-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-12">
                    
                    <div className="space-y-4 max-w-xs">
                        <h2 className="text-2xl font-bold text-primary tracking-tight">MORENT</h2>
                        <p className="text-sm text-base-content/60 leading-relaxed">
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 lg:gap-20">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-base text-base-content">About</h3>
                                <ul className="space-y-3 text-sm text-base-content/60">
                                    <li><Link to="#" className="hover:text-primary transition-colors">How it works</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Featured</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Partnership</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Bussiness Relation</Link></li>
                                </ul>
                            </div>

                           
                            <div className="space-y-4 col-span-2 lg:col-span-1 order-3 lg:order-2">
                                <h3 className="font-semibold text-base text-base-content">Community</h3>
                                <ul className="space-y-3 text-sm text-base-content/60">
                                    <li><Link to="#" className="hover:text-primary transition-colors">Events</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Podcast</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Invite a friend</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-4 order-2 lg:order-3">
                                <h3 className="font-semibold text-base text-base-content">Socials</h3>
                                <ul className="space-y-3 text-sm text-base-content/60">
                                    <li><Link to="#" className="hover:text-primary transition-colors">Discord</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Instagram</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Twitter</Link></li>
                                    <li><Link to="#" className="hover:text-primary transition-colors">Facebook</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-base-content/60">
                    <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center justify-between gap-6 md:order-2">
                        <div className="grid grid-cols-2 w-full md:w-auto gap-8 font-medium text-base-content">
                            <Link to="#" className="hover:text-primary transition-colors text-left">Privacy & Policy</Link>
                            <Link to="#" className="hover:text-primary transition-colors text-right md:text-left">Terms & Condition</Link>
                        </div>
                    </div>
                    <p className="md:order-1">©2022 MORENT. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}