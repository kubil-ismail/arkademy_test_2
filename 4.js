function divideAndSort(input) {
    // Only nymber
    let regex = /^\d+$/;

    if (regex.test(input)) {
        // Convert to array
        let number = input.toString().split('0');
        let data = [];
        number.forEach(function (item) {
            // Combine all array value
            data.push(...item.split('').sort());
        })
        console.log(...data)
    } else {
        return "parameter hanya deret angka";
    }
};

divideAndSort(5956560159466056);
