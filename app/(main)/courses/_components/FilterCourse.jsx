'use client'
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";

const PRICE_OPTIONS = [
    { label: "Free", value: "free" },
    { label: "Paid", value: "paid" },
];

const CATEGORY_OPTIONS = [
    { id: 1, label: "Design", value: "design" },
    { id: 3, label: "Development", value: "development" },
    { id: 4, label: "Marketing", value: "marketing" },
    { id: 5, label: "IT & Software", value: "it-software" },
    { id: 6, label: "Personal Development", value: "personal-development" },
    { id: 7, label: "Business", value: "business" },
    { id: 8, label: "Photography", value: "photography" },
    { id: 9, label: "Music", value: "music" },
];

const FilterCourse = () => {

    const [filter, setFilter] = useState({
        categories: ["development"],
        price: ["free"],
        sort: "",
    });

    const applyArrayFilter = ({ type, value }) => {
        const isFilterApplied = filter[type].includes(value);

        if (isFilterApplied) {
            setFilter((prev) => ({
                ...prev,
                [type]: prev[type].filter((v) => v !== value),
            }));
        } else {
            setFilter((prev) => ({
                ...prev,
                [type]: [...prev[type], value],
            }));
        }
    };

    return (
        <div className="hidden lg:block">
            <Accordion defaultValue={["categories"]} type="multiple">

                {/* Categories */}
                <AccordionItem value="categories" className="border-slate-800">
                    <AccordionTrigger className="py-3 text-sm text-slate-400 hover:text-indigo-400">
                        <span className="font-medium text-slate-100">
                            Categories
                        </span>
                    </AccordionTrigger>

                    <AccordionContent className="pt-6 animate-none">
                        <ul className="space-y-4">
                            {CATEGORY_OPTIONS.map((option, optionIdx) => (
                                <li key={option.value} className="flex items-center">
                                    <Checkbox
                                        id={`category-${optionIdx}`}
                                        className="border-slate-700 data-[state=checked]:bg-indigo-400 data-[state=checked]:border-indigo-400"
                                        onCheckedChange={() => {
                                            applyArrayFilter({
                                                type: "categories",
                                                value: option.value,
                                            });
                                        }}
                                        checked={filter.categories.includes(option.value)}
                                    />
                                    <label
                                        htmlFor={`category-${optionIdx}`}
                                        className="ml-3 text-sm text-slate-400 hover:text-indigo-400 cursor-pointer"
                                    >
                                        {option.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price" className="border-slate-800">
                    <AccordionTrigger className="py-3 text-sm text-slate-400 hover:text-indigo-400">
                        <span className="font-medium text-slate-100">
                            Price
                        </span>
                    </AccordionTrigger>

                    <AccordionContent className="pt-6 animate-none">
                        <ul className="space-y-4">
                            {PRICE_OPTIONS.map((option, optionIdx) => (
                                <li key={option.value} className="flex items-center">
                                    <Checkbox
                                        id={`price-${optionIdx}`}
                                        className="border-slate-700 data-[state=checked]:bg-indigo-400 data-[state=checked]:border-indigo-400"
                                        onCheckedChange={() => {
                                            applyArrayFilter({
                                                type: "price",
                                                value: option.value,
                                            });
                                        }}
                                        checked={filter.price.includes(option.value)}
                                    />
                                    <label
                                        htmlFor={`price-${optionIdx}`}
                                        className="ml-3 text-sm text-slate-400 hover:text-indigo-400 cursor-pointer"
                                    >
                                        {option.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    );
};

export default FilterCourse;