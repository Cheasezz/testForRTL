<script lang="ts" setup>
import './style.scss'
import { useStartDrag } from '../../../lib/composables/useStartDrag'
import { useItemStore } from '@/entities/inventory/model/store'
import { computed, useTemplateRef } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    default: null,
  },
})
const dragEl = useTemplateRef<HTMLDivElement>('dragEl')

const itemStore = useItemStore()
const { getItemByID } = itemStore

const { startDrag } = useStartDrag()
const item = computed(() => getItemByID(props.id))
</script>

<template>
  <div
    v-if="item"
    class="drag-el"
    draggable="true"
    ref="dragEl"
    @dragstart="startDrag($event, item, dragEl)"
  >
    <img
      class="drag-el__img"
      :src="item.src"
    />
    <span class="drag-el__counter">{{ item.counter }}</span>
  </div>
</template>
