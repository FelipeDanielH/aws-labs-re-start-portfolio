'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { StatsOverview } from '@/components/stats-overview'
import { FilterControls } from '@/components/filter-controls'
import { LabsGrid } from '@/components/labs-grid'
import { Footer } from '@/components/footer'
import type { AWSService, Category } from '@/lib/mock-data'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedService, setSelectedService] = useState<AWSService | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Header />

      <main className="flex flex-col gap-10 py-10">
        <StatsOverview />
        <FilterControls
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          selectedService={selectedService}
          onSearchChange={setSearchValue}
          onCategoryChange={setSelectedCategory}
          onServiceChange={setSelectedService}
        />
        <LabsGrid
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          selectedService={selectedService}
        />
      </main>

      <Footer />
    </div>
  )
}
