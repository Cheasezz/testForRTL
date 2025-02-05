import { onBeforeMount, watch, type Ref } from 'vue'
import type { TInventoryItem } from '../../model/types'

export function useSaveItemList(items: Ref<TInventoryItem[]>) {
  onBeforeMount(() => {
    const itemList = localStorage.getItem('itemList')
    if (itemList) items.value = JSON.parse(itemList)
  })

  watch(
    items,
    () => {
      localStorage.setItem('itemList', JSON.stringify(items.value))
    },
    { deep: true },
  )
}
