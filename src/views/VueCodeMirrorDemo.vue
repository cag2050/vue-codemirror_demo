<template>
    <div>
        <codemirror v-model="code" :options="cmOptions" ref="cmEditor" />
        <el-button @click="getCode" class="btn">getCode</el-button>
    </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
// import theme style
import "codemirror/theme/base16-dark.css";

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
                theme: "base16-dark",
                lineNumbers: true,
                line: true
                // more CodeMirror options...
            }
        };
    },
    methods: {
        getCode() {
            console.log(this.code);
        }
    }
};
</script>

<style scoped>
.btn {
    margin-top: 10px;
}
</style>
