const un = process.argv[2]
function show_numbers(number) {
    let numbersArray = []
    for (let searchable_number = 0; numbersArray.length < +number; searchable_number++) {
        for (let denominator = 0; denominator <= searchable_number; denominator++) {
            if ((searchable_number % denominator == 0) && (denominator != 1)) {
                break
            }
            if ((searchable_number-denominator == 1) && (searchable_number !=1)) {
                numbersArray.push(searchable_number)   
            }
        }
        
    }
    return numbersArray
}

console.log(show_numbers(un))
