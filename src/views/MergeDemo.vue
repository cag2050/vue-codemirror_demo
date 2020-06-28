<template>
    <div>
        <codemirror :merge="true" :options="cmOption" @scroll="onCmScroll" />
    </div>
</template>

<script>
import { codemirror } from "vue-codemirror"
import "codemirror/lib/codemirror.css"
// merge js
import "codemirror/addon/merge/merge.js"
// merge css
import "codemirror/addon/merge/merge.css"
// google DiffMatchPatch
import DiffMatchPatch from "diff-match-patch"
// DiffMatchPatch config with global
window.diff_match_patch = DiffMatchPatch
window.DIFF_DELETE = -1
window.DIFF_INSERT = 1
window.DIFF_EQUAL = 0

export default {
    components: {
        codemirror
    },
    data() {
        return {
            cmOption: {
                value: "<p>hello</p>",
                origLeft: null,
                orig: "<p>hello world</p>",
                connect: "align",
                mode: "text/html",
                lineNumbers: true,
                collapseIdentical: false,
                highlightDifferences: true
            }
        }
    },
    methods: {
        onCmScroll() {
            console.log("onCmScroll")
        }
    }
}
</script>

<style>
/* Autoresize Demo: https://codemirror.net/demo/resize.html */
.CodeMirror {
    border: 1px solid #eee;
    height: auto;
    font-size: 14px;
}
</style>
