<template>
    <div>
        <codemirror
            v-model="code"
            :options="cmOptions"
            ref="cmEditor"
            class="CodeMirror"
        />
        <el-button @click="getCode" class="btn">getCode</el-button>
        <el-button @click="handleYamlToJson">yaml转换为json</el-button>
    </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
// import theme style
import "codemirror/theme/base16-dark.css";

const yaml = require("js-yaml");

export default {
    components: {
        codemirror
    },
    computed: {
        codemirror() {
            return this.$refs.cmEditor.codemirror;
        }
    },
    mounted() {
        console.log("the current CodeMirror instance object:");
        console.log(this.codemirror);
        // you can use this.codemirror to do something...
    },
    data() {
        return {
            code:
                "languages:\n" +
                "    - Ruby\n" +
                "    - Perl\n" +
                "    - Python \n" +
                "websites:\n" +
                "    YAML: yaml.org \n" +
                "    Ruby: ruby-lang.org \n" +
                "    Python: python.org \n" +
                "    Perl: use.perl.org",
            cmOptions: {
                tabSize: 4,
                mode: "text/x-yaml",
                // theme: "base16-dark",
                theme: "default",
                lineNumbers: true,
                line: true,
                viewportMargin: Infinity
                // more CodeMirror options...
            }
        };
    },
    methods: {
        getCode() {
            console.log(this.code);
        },
        handleYamlToJson() {
            try {
                console.log(yaml);
                const doc = yaml.safeLoad(this.code);
                console.log(doc);
            } catch (e) {
                console.log(e);
            }
        }
    }
};
</script>

<style scoped>
.btn {
    margin-top: 10px;
}
/* Autoresize Demo: https://codemirror.net/demo/resize.html */
.CodeMirror {
    border: 1px solid #eee;
    height: auto !important;
}
</style>
