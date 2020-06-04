<template>
    <div id="cssModules">
        <div class="$style.test">123</div>
    </div>
</template>

<script>
    export default {
        name:"cssModules"
    }
</script>

<style lang="scss" module>
.test {
    width: 100px;
    height: 100px;
    background-color: pink;
}
</style>