'use client'

import { useState } from 'react'
import navLinks from '@/app/data/navLinks'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b border-zinc-200 bg-white">
            <div className="mx-auto max-w-7xl px-8 py-5">
                <div className="flex items-center justify-between">

                    <div className="text-xl font-bold text-blue-600">
                        MAAV
                    </div>

                    {/* Menú escritorio */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-900">
                        {navLinks.map((link) => (
                            <a key={link.id} href={link.href} className="transition-colors hover:text-blue-600">{link.label}</a>
                        ))}
                    </div>

                    {/* Botón hamburguesa */}
                    <button
                        className="md:hidden p-2 text-zinc-900"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menú"
                        aria-expanded={isOpen}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Menú móvil */}
                {isOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium text-zinc-900">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="p-2 border-b border-zinc-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}