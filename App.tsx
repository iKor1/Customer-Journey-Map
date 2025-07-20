import React, { useState } from 'react';
import { CJMTable } from './components/CJMTable';
import { ProductModules } from './components/ProductModules';
import { KeyInsights } from './components/KeyInsights';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card } from './components/ui/card';

const segments = [
  {
    id: 'segment1',
    title: 'Молодёжь 14–18 лет, малые региональные города',
    description: 'Первый банковский опыт под присмотром родителей'
  },
  {
    id: 'segment2', 
    title: 'Молодёжь 14–18 лет, крупные города',
    description: 'Цифровой лайфстайл и самовыражение через финансы'
  },
  {
    id: 'segment3',
    title: 'Молодёжь 18–22 лет, малые региональные города', 
    description: 'Управление ограниченным бюджетом студента/начинающего работника'
  },
  {
    id: 'segment4',
    title: 'Молодёжь 18–22 лет, крупные города',
    description: 'Продвинутые финансовые инструменты и аналитика'
  }
];

export default function App() {
  const [activeSegment, setActiveSegment] = useState('segment1');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">
              Customer Journey Map
            </h1>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#EF3124] rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">НП</span>
              </div>
              <h2 className="text-xl text-[#1F1F1F]">
                Молодёжный необанк Альфа-Банк
              </h2>
            </div>
            <p className="text-[#717182] text-sm">
              Сегментированная аудитория 14–22 лет • Россия • Альфа-стиль
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <Tabs value={activeSegment} onValueChange={setActiveSegment} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#F5F6F7]">
            {segments.map((segment, index) => (
              <TabsTrigger 
                key={segment.id} 
                value={segment.id}
                className="text-sm p-3 data-[state=active]:bg-[#EF3124] data-[state=active]:text-white"
              >
                Сегмент {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {segments.map((segment) => (
            <TabsContent key={segment.id} value={segment.id} className="space-y-8">
              {/* Segment Header */}
              <Card className="p-6 bg-[#F5F6F7] border-none">
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {segment.title}
                </h3>
                <p className="text-[#717182]">
                  {segment.description}
                </p>
              </Card>

              {/* CJM Table */}
              <CJMTable segmentId={segment.id} />
            </TabsContent>
          ))}
        </Tabs>

        {/* Product Modules */}
        <ProductModules />

        {/* Key Insights */}
        <KeyInsights />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-xs text-[#717182] leading-relaxed">
            <p className="font-medium mb-2">Источники данных:</p>
            <p>
              ЦБ РФ (финансовая грамотность молодёжи 2024), ВЦИОМ (доверие к банкам, предпочтения молодёжи 2023–2024), 
              программа лояльности СберСпасибо (категории трат 2023), отраслевые обзоры и глубинные интервью 
              (кастдев 2025, n=12).
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}