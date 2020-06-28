<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/vue-codemirror_data_binding"
                >vue-codemirror：直接数据绑定</router-link
            >
            |
            <router-link
                to="/vue-codemirror_manually_control_data_synchronization"
                >vue-codemirror：手动控制数据同步</router-link
            >
            | <router-link to="/js-yaml">js-yaml</router-link> | |
            <router-link to="/vue_codemirror_merge"
                >vue-codemirror 实现 merge 例子</router-link
            >
            |
            <router-link to="/codemirror_merge"
                >codemirror 实现 merge 例子</router-link
            >
            |
        </div>
        <div>===以下是内容===</div>
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}

#nav {
    /*padding: 30px;*/

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
