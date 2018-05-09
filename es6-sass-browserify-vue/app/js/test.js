export async function test() {
    const json = await fetch("data.json");
    const data = await json.json();
    const el = Array.from(document.querySelectorAll("main"));
    console.log(data);
    console.log(el);
    console.log([1,2,3].includes(2));
    console.log(Object.assign({ a : 1}, {a : 2}));
    console.log("hallo".includes("lo"));
    console.log("hallo".repeat(5));

    new Vue({
        el : "main",

        components : {
            Test
        },

        data
    });
}