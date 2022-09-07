<template>
    <div>
        <div @click="nodeClicked" class="node" :style="{ 'margin-left': `${depth * 20}px` }">
            <span class="material-icons">{{ node?.Name }}</span>
        </div>
        <div>
            <div>
                <TreeItem class="sport-icon"  :class="expanded ? 'sport-icon:hover' : null" :sport="child.KeyName.toLowerCase()" @click="nodeClicked"
                    v-for="(child, index) in node?.Sports" :key="index" :node="child" :depth="depth + 1" />
            </div>
            <!-- <div v-if="expanded">
                <TreeItem class="flag" :country="child.KeyName.toLowerCase()" v-for="(child, index) in node?.Regions"
                    :key="index" :node="child" :depth="depth + 1" />
            </div>
            <div v-if="expanded">
                <TreeItem v-for="(child, index) in node?.Champs" :key="index" :node="child" :depth="depth + 6" />
            </div> -->
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

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


const expanded = ref(false)

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
    width: 100px;
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
    &:active:after {
        background-color: #262930 ;
    }
}
// .hover {
//     background-color: #262930 ;
//     border: 2px solid #ed3b2f;
// }
</style>