<template>
    <div id="comScoped">
        <div class="son">
            <p>123</p>
            <el-button type="success">123</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"comScoped"
    }
</script>

<style lang="scss" scoped>
   #comScoped {
       .son {
           width: 100px;
           height: 100px;
           border: 2px solid blue;
       }
   }
</style>