<script lang="ts" setup>
import './style.scss'
import { baseButton } from '@/shared/ui'
import { iconCross } from '@/shared/ui'
</script>

<template>
  <div class="footer">
    <h2 class="footer__h2"></h2>
    <baseButton class="footer__button_close">
      <template #icon>
        <iconCross />
      </template>
    </baseButton>
  </div>
</template>
