'use client'
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchCourse = () => {
    return (
        <div className="relative h-10 max-lg:w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 z-10 h-4 w-4" />
          
          <Input
            type="text"
            placeholder="Search courses..."
            className="pl-8 pr-3 py-2 text-sm bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-indigo-400"
          />
        </div>
    );
};

export default SearchCourse;