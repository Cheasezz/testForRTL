import { defineStore } from 'pinia'
import { ref } from 'vue'
import { itemGreen, itemBrown, itemPurple } from '@/shared/ui'
import type { TInventoryItem } from './types'

export const useItemStore = defineStore('items', () => {
  const inventorySieze = ref(25)

  const items = ref<TInventoryItem[]>([
    { id: 1, counter: 4, src: itemGreen },
    { id: 2, counter: 2, src: itemBrown },
    { id: 3, counter: 5, src: itemPurple },
  ])

  function getItemByID(id: number): TInventoryItem | undefined {
    return items.value.find((item) => item.id === id)
  }

  function $reset() {
    localStorage.clear()
    items.value = [
      { id: 1, counter: 4, src: itemGreen },
      { id: 2, counter: 2, src: itemBrown },
      { id: 3, counter: 5, src: itemPurple },
    ]
  }

  return {
    inventorySieze,
    items,
    getItemByID,
    $reset,
  }
})
