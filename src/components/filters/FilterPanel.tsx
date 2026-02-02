import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PriceFilter } from './PriceFilter';
import { StopsFilter } from './StopsFilter';
import { AirlineFilter } from './AirlineFilter';
import { TimeFilter } from './TimeFilter';
import type { FilterState } from '../../types/flight';

interface FilterPanelProps {
  filters: FilterState;
  updateFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  hasActiveFilters: boolean;
  filterOptions: {
    airlines: string[];
    priceRange: [number, number];
    durationRange: [number, number];
  };
  dictionaries?: Record<string, string>;
  resultCount: number;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  updateFilter,
  resetFilters,
  hasActiveFilters,
  filterOptions,
  dictionaries,
  resultCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="sticky top-4">
      <div className="space-y-6">
        {/* Header - Always visible */}
        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <div className="lg:hidden">
              <span className="text-sm text-gray-500 font-normal">({resultCount})</span>
            </div>
          </div>
          
          {/* Mobile Toggle Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
          </Button>

          {/* Desktop Clear Button */}
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="hidden lg:flex items-center gap-1">
              <X className="w-3 h-3" /> Clear
            </Button>
          )}
        </div>

        {/* Mobile Content Toggle */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-6`}>
          {/* Mobile Clear Button */}
          {hasActiveFilters && (
             <div className="lg:hidden">
               <Button variant="secondary" size="sm" onClick={resetFilters} fullWidth className="flex items-center justify-center gap-1 mb-4">
                 <X className="w-3 h-3" /> Clear All Filters
               </Button>
             </div>
          )}

          {/* Result count (Desktop only) */}
          <div className="hidden lg:block text-base font-normal text-gray-800 px-2 py-2 bg-gray-50 rounded-lg text-center">
            {resultCount} flight{resultCount !== 1 ? 's' : ''} found
          </div>


        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Price Filter */}
        <PriceFilter
          value={filters.priceRange}
          min={filterOptions.priceRange[0]}
          max={filterOptions.priceRange[1]}
          onChange={(value) => updateFilter('priceRange', value)}
        />

        <div className="border-t border-gray-100" />

        {/* Departure Time Filter */}
        <TimeFilter
          label="Departure Time"
          value={filters.departureTimeRange}
          onChange={(value) => updateFilter('departureTimeRange', value)}
        />

        <div className="border-t border-gray-100" />

        {/* Arrival Time Filter */}
        <TimeFilter
          label="Arrival Time"
          value={filters.arrivalTimeRange}
          onChange={(value) => updateFilter('arrivalTimeRange', value)}
        />

        <div className="border-t border-gray-100" />

        {/* Stops Filter */}
        <StopsFilter
          value={filters.stops}
          onChange={(value) => updateFilter('stops', value)}
        />

        <div className="border-t border-gray-100" />

        {/* Airline Filter */}
        <AirlineFilter
          airlines={filterOptions.airlines}
          selected={filters.airlines}
          onChange={(value) => updateFilter('airlines', value)}
          dictionaries={dictionaries}
        />
        </div>
      </div>
    </Card>
  );
};