    function commonElements(arr1, arr2) {
        for(let i = 0; i < arr1.length; i++) {
            let currentElement = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                let element = arr2[j];
                if (currentElement === element) {
                    console.log(element);
                }
            }
        }
    }
    commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
    commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])