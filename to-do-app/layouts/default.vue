<template>
    <div class="layout">
        <div>
        </div>
        <div class="app">
          <AppHeader />
          <div class="container">
            <SideMenu />
            <slot />
          </div>
          <AppFooter />
        </div>
        <div></div>
    </div>
</template>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}
.app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: lightgray;
}
.container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
}
</style>