export async function test() {
    const json = await fetch("data.json");
    const data = await json.json();
    document.querySelector('#test').innerHTML = data.test;

    console.log([1,2,3].includes(2));
    console.log(Object.assign({ a : 1}, {a : 2}));
    console.log("hallo".includes("lo"));
    console.log("hallo".repeat(5));
}