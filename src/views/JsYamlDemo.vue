<template>
    <div>
        <el-button @click="handleYamlToJson">yaml转换为json</el-button>
    </div>
</template>

<script>
const yaml = require("js-yaml");

export default {
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
                "    Perl: use.perl.org"
        };
    },
    methods: {
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

<style scoped></style>
