<template>
  <div>
    <a-button @click="testButton">我的button</a-button>
    <div class="textSearch">
      <i class="iconfont icon-search"></i>
      <input placeholder="请输入搜索关键字" @input="handleInput" />
    </div>
  </div>
</template>
<script lang="ts" src="./InputQuery.ts"></script>
<style lang="scss" scoped src="./InputQuery.scss" ></style>