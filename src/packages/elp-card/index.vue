<template>
  <div class="elp-card">
    <header v-if="title" class="elp-card__head">
      <div>
        <el-tooltip :content="tooltip">
          <i class="el-icon-warning" v-if="tooltip"></i>
        </el-tooltip>
        <span class="elp-card__head__title">{{title}}</span>
        <span class="elp-card__head__sub">{{subTitle}}</span>
      </div>
      <div>
        <slot name="operate"></slot>
      </div>
    </header>
    <main class="elp-card__main" :class="{'elp-card__main--symmetry': !title}">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'elp-card',
  props: {
    title: String,
    subTitle: String,
    tooltip: String
  }
}
</script>
