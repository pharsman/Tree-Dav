<template>
    <div>
        <div @click="nodeClicked" class="node" :style="{ 'margin-left': `${depth * 20}px` }">
            <span class="material-icons">{{ node?.Name }}</span>
        </div>
        <div>
            <div  @click="nodeClicked">
                <TreeItem class="sport-icon" :style="expanded ? activeStyle : null "
                    :sport="child.KeyName.toLowerCase()" v-for="(child, index) in node?.Sports" :key="index"
                    :node="child" :depth="depth + 1" />
            </div>
            <div v-if="expanded">
                <TreeItem class="flag" :country="child.KeyName.toLowerCase()" v-for="(child, index) in node?.Regions"
                    :key="index" :node="child" :depth="depth + 1" />
            </div>
            <!-- <div v-if="expanded">
                <TreeItem v-for="(child, index) in node?.Champs" :key="index" :node="child" :depth="depth + 6" />
            </div> -->
        </div>
    </div>

</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    node: {
        type: Object,
        required: true
    },
    depth: {
        type: Number,
        default: 0
    },

})

const dusbut = ref(false)

const expanded = ref(false)

const activeStyle = ref({
    backgroundColor: '#262930'
})

const nodeClicked = () => {
    expanded.value = !expanded.value
}

</script>

<style  lang="scss">
body {
    background-color: #262930;
    display: flex;
    flex-direction: column;
}

.node {
    font-size: 18px;
    width: 266px;
    display: flex;
    flex-direction: column;

    &::before {
        content: '';
        color: #fff;
    }

    span {
        color: #ffffff;
        cursor: pointer;
        width: 100px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

}

.sport-icon {
    margin-top: 14px;
    cursor: pointer;

    &::before {
        color: #ed3b2f !important;
        display: flex;
        flex-direction: column;

    }

}

.sport-icon-active {
    background-color: #262930;
}
</style>