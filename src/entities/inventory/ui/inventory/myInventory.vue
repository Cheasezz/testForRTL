<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSaveItemList } from '../../lib/composables/useSaveItemList'
import { useItemStore } from '../../model/store'
import './style.scss'
import DroppableZone from '../dragNdropCells/droppableZone/droppableZone.vue'
import DraggableItem from '../dragNdropCells/draggableItem/draggableItem.vue'

const itemStore = useItemStore()
const { items, inventorySieze } = storeToRefs(itemStore)

useSaveItemList(items)

const sqrtInvntSize = Math.sqrt(inventorySieze.value)
const renderRows = Math.ceil(sqrtInvntSize)
const renderColumn = Math.ceil(sqrtInvntSize)

const style = `grid: repeat(${renderRows},1fr) / repeat(${renderColumn},1fr);`
</script>

<template>
  <div
    class="inventory"
    :style="style"
  >
    <DroppableZone
      v-for="id in inventorySieze"
      :id="id"
      :key="id"
    >
      <DraggableItem
        :id="id"
        :key="id"
      />
    </DroppableZone>
    <slot name="modal"></slot>
  </div>
</template>
