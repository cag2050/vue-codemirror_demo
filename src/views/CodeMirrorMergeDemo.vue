<template>
    <div id="view"></div>
</template>

<script>
// 原文链接：https://blog.csdn.net/clj198606061111/java/article/details/104149532
import CodeMirror from "codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/addon/merge/merge.js"
import "codemirror/addon/merge/merge.css"
import DiffMatchPatch from "diff-match-patch"

window.diff_match_patch = DiffMatchPatch
window.DIFF_DELETE = -1
window.DIFF_INSERT = 1
window.DIFF_EQUAL = 0

export default {
    mounted() {
        let value = "abcc"
        let orig2 = "abcd"
        this.initUI(value, orig2)
    },
    methods: {
        initUI(value, orig2) {
            if (value == null) {
                return
            }
            let target = document.getElementById("view")
            target.innerHTML = ""
            CodeMirror.MergeView(target, {
                value: value, // 上次内容
                origLeft: null,
                orig: orig2, // 本次内容
                lineNumbers: true, // 显示行号
                mode: "text/html",
                highlightDifferences: true,
                connect: "align",
                revertButtons: true, // 是否显示还原按钮
                readOnly: true // 只读 不可修改
            })
        }
    }
}
</script>

<style scoped></style>
