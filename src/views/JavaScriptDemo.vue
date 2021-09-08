<template>
    <codemirror v-model="code" :options="cmOption" />
</template>

<script>
// 参考：https://github.com/surmon-china/surmon-china.github.io/blob/source/projects/vue-codemirror/examples/02-text-javascript.vue
import dedent from "dedent"
import { codemirror } from "vue-codemirror"
import "codemirror/lib/codemirror.css"
// language
import "codemirror/mode/javascript/javascript.js"
// theme css
import "codemirror/theme/monokai.css"
// require active-line.js
import "codemirror/addon/selection/active-line.js"
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js"
import "codemirror/addon/search/searchcursor.js"
// hint
import "codemirror/addon/hint/show-hint.js"
import "codemirror/addon/hint/show-hint.css"
import "codemirror/addon/hint/javascript-hint.js"
import "codemirror/addon/selection/active-line.js"
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js"
import "codemirror/addon/search/matchesonscrollbar.js"
import "codemirror/addon/search/searchcursor.js"
import "codemirror/addon/search/match-highlighter.js"
// keyMap
import "codemirror/mode/clike/clike.js"
import "codemirror/addon/edit/matchbrackets.js"
import "codemirror/addon/comment/comment.js"
import "codemirror/addon/dialog/dialog.js"
import "codemirror/addon/dialog/dialog.css"
import "codemirror/addon/search/searchcursor.js"
import "codemirror/addon/search/search.js"
import "codemirror/keymap/sublime.js"
// foldGutter
import "codemirror/addon/fold/foldgutter.css"
import "codemirror/addon/fold/brace-fold.js"
import "codemirror/addon/fold/comment-fold.js"
import "codemirror/addon/fold/foldcode.js"
import "codemirror/addon/fold/foldgutter.js"
import "codemirror/addon/fold/indent-fold.js"
import "codemirror/addon/fold/markdown-fold.js"
import "codemirror/addon/fold/xml-fold.js"

export default {
    components: {
        codemirror
    },
    data() {
        return {
            code: dedent`
                {
                    "errno": 0,
                    "errmsg": "成功",
                    "data": [
                        {
                            "ip": "192.168.232.152",
                            "archive_list": ["dcs://archive/test_ad_predictor_dcs/adctr-qtt-assemble-v9zk.yaml"]
                        }
                    ]
                }
            `,
            // code: JSON.stringify({
            //     "errno": 0,
            //     "errmsg": "成功",
            //     "data": [
            //         {
            //             "ip": "192.168.232.152",
            //             "archive_list": ["dcs://archive/test_ad_predictor_dcs/adctr-qtt-assemble-v9zk.yaml"]
            //         }
            //     ]
            // }),
            cmOption: {
                tabSize: 4,
                styleActiveLine: true,
                lineNumbers: true,
                styleSelectedText: true,
                line: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                highlightSelectionMatches: {
                    showToken: /\w/,
                    annotateScrollbar: true
                },
                mode: "text/javascript",
                // hint.js options
                hintOptions: {
                    // 当匹配只有一项的时候是否自动补全
                    completeSingle: false
                },
                //快捷键 可提供三种模式 sublime、emacs、vim
                keyMap: "sublime",
                matchBrackets: true,
                showCursorWhenSelecting: true,
                // theme: "monokai",
                theme: "default",
                extraKeys: { Ctrl: "autocomplete" },
                viewportMargin: Infinity
            }
        }
    },
    mounted() {}
}
</script>

<style>
/* Autoresize Demo: https://codemirror.net/demo/resize.html */
.CodeMirror {
    border: 1px solid #eee;
    height: auto;
    font-size: 14px;
}
/*.CodeMirror-focused .cm-matchhighlight {*/
/*    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);*/
/*    background-position: bottom;*/
/*    background-repeat: repeat-x;*/
/*}*/

/*.cm-matchhighlight {*/
/*    background-color: lightgreen;*/
/*}*/

/*.CodeMirror-selection-highlight-scrollbar {*/
/*    background-color: green;*/
/*}*/
</style>
