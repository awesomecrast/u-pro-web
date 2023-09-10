<template>
  <footer class="footer">
    <a href="https://academia.urbisfx.com/" class="button" v-if="showButton">Volver al inicio</a>
    <p>© 2023 Copyright <a class="footer-link" href="/">UrbisFX</a></p>
  </footer>
</template>

<script lang="js">
export default {
  props: {
    showButton: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped lang="css">
.footer {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  text-align: center;
  padding-block: 1rem;
  margin-top: 3rem;
}

.button {
  width: fit-content;
  margin: 0 auto;
  background-color: #000143;
  color: #fff;
  font-size: 1rem;
  border: none;
  padding-inline: 1rem;
  padding-block: 0.8rem;
  cursor: pointer;
  font-weight: bold;
}

.footer-link {
  color: #757575;
}
</style>
