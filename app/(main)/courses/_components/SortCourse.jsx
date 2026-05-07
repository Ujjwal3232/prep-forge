'use client'
import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SORT_OPTIONS = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
];

const SortCourse = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px] bg-slate-900 text-slate-200 border border-slate-800 focus:ring-0 focus:ring-offset-0 focus:border-indigo-400 overflow-hidden">
                <SelectValue placeholder="Sort By" className="text-slate-400" />
            </SelectTrigger>

            <SelectContent className="bg-slate-950 border border-slate-800 text-slate-200">
                <SelectGroup>
                    <SelectLabel className="text-slate-400">
                        Sort Options
                    </SelectLabel>

                    {SORT_OPTIONS.map((option) => (
                        <SelectItem
                            className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800 data-[state=checked]:text-indigo-400"
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SortCourse;