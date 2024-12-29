import React from 'react';
import { cn } from '@/lib/utils';

interface ReviewSliderProps {
  parameter: string;
  value: number;
  onChange: (value: number) => void;
  emojis: string[];
  className?: string;
}

export function ReviewSlider({ parameter, value, onChange, emojis, className }: ReviewSliderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{parameter}</label>
        <span className="text-2xl">{emojis[Math.floor((value / 100) * (emojis.length - 1))]}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}