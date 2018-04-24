import Vue from 'vue';

async function main() {
    const json = await fetch("data.json");
    const data = await json.json();

    new Vue({
        el : "main",

        data
    });
}

main();