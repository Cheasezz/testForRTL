<script lang="ts" setup>
import { mainScreen } from '@/shared/ui'
import { myFooter } from '@/widgets/footer'
import { mySidebar } from '@/widgets/sidebar'
import { myInventory } from '@/entities/inventory'
</script>

<template>
  <mainScreen>
    <template #sidebar>
      <mySidebar />
    </template>
    <template #mainContent>
      <myInventory />
    </template>
    <template #footer>
      <myFooter />
    </template>
  </mainScreen>
</template>
