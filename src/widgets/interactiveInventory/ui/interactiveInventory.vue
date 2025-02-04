<script lang="ts" setup>
import { myInventory } from '@/entities/inventory'

const invntSize = 25

</script>
<template>
  <myInventory :invent-size="invntSize"> </myInventory>
</template>
