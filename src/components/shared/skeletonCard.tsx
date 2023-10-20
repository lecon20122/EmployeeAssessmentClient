import React from 'react'

interface Props {
    times: number,
}

export default function SkeletonCard({ times }: Props) {
    return (
        <div className="container mx-auto text-black p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: times }).map((_, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg shadow-md p-4 animate-pulse">
                        <div className="h-10 bg-gray-400 rounded mb-6"></div>
                        <div className="h-6 bg-gray-400 rounded mb-4"></div>
                        <div className="h-3 bg-gray-400 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
