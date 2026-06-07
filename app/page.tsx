'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { StatsOverview } from '@/components/stats-overview'
import { FilterControls } from '@/components/filter-controls'
import { LabsGrid } from '@/components/labs-grid'
import type { AWSService, Category } from '@/lib/mock-data'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedService, setSelectedService] = useState<AWSService | null>(null)

  return (
    <main className="min-h-screen bg-white">
      <Header searchValue={searchValue} onSearchChange={setSearchValue} />
      <StatsOverview />
      <FilterControls
        selectedCategory={selectedCategory}
        selectedService={selectedService}
        onCategoryChange={setSelectedCategory}
        onServiceChange={setSelectedService}
      />
      <LabsGrid
        searchValue={searchValue}
        selectedCategory={selectedCategory}
        selectedService={selectedService}
      />
    </main>
  )
}
