import { ref } from 'vue'
import { useItemStore } from '@/entities/inventory'
import { storeToRefs } from 'pinia'

export function useOnDrop() {
  const isTarget = ref(false)

  const itemStore = useItemStore()
  const { getItemByID } = itemStore
  const { items } = storeToRefs(itemStore)

  function onDrop(e: DragEvent, id: number) {
    if (e.target == null || e.dataTransfer == null || getItemByID(id)) return
    const itemID = e.dataTransfer.getData('itemID')

    const item = items.value.find((item) => item.id === +itemID)
    if (item !== undefined) item.id = id
    isTarget.value = false
  }
  return {
    isTarget,
    onDrop,
  }
}
