'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ActiveFilters = ({filter}) => {
    return (
        <div className="flex items-center gap-2 flex-wrap">
        {/* active categories */}
        {filter.categories.length > 0 &&
          filter.categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-xs h-7 bg-slate-900 border border-slate-800 rounded-full gap-1 text-slate-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400"
              onClick={() =>
                applyArrayFilter({ type: "categories", value: category })
              }
            >
              {category}
              <X className="w-3 text-slate-400 group-hover:text-indigo-400" />
            </Button>
          ))}

        {/* active prices */}
        {filter.price.length > 0 &&
          filter.price.map((price) => (
            <Button
              key={price}
              variant="ghost"
              className="text-xs h-7 bg-slate-900 border border-slate-800 rounded-full gap-1 text-slate-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400"
              onClick={() => applyArrayFilter({ type: "price", value: price })}
            >
              {price}
              <X className="w-3 text-slate-400 group-hover:text-indigo-400" />
            </Button>
          ))}
      </div>
    );
};

export default ActiveFilters;