function city(obj) {
    let entries = Object.entries(obj)
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Plovdiv",
    area: 389, 
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})