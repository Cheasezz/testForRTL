import type { TInventoryItem } from '../../model/types'

export function useStartDrag() {
  function startDrag(e: DragEvent, item: TInventoryItem | undefined, elRef: HTMLDivElement | null) {
    if (e.dataTransfer !== null && item && elRef) {
      // Замена изображения у курсора во время перетаскивания
      const clone = elRef.cloneNode(true) as HTMLDivElement
      clone.style.position = 'fixed'
      clone.style.top = '-1000px'
      clone.style.left = '-1000px'
      clone.style.width = '4rem'
      clone.style.height = '4rem'
      clone.style.background = '#1d1d1d'
      clone.style.borderRadius = '12px'

      document.body.appendChild(clone)
      e.dataTransfer.setDragImage(clone, 50, 50)

      setTimeout(() => document.body.removeChild(clone), 0)

      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemID', item.id.toString())
    }
  }

  return {
    startDrag,
  }
}
