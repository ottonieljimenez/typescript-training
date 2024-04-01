// Dictionary interface
interface Dictionary {
    [key: string]: string;
}

// function to set a value for a key in a dictionary
function setDictionaryValue(dictionary: Dictionary, key: string, value: string): void {
    dictionary[key] = value;
}

// function to get the value associated with a key in a dictionary
function getDictionaryValue(dictionary: Dictionary, key: string): string | undefined {
    return dictionary[key];
}

// function to display all dictionary values in the console
function showAllDictionaryValues(dictionary: Dictionary): void {
    console.log(dictionary)
}

// create instance of the Dictionary interface
const worldCapitals: Dictionary = {
    France: 'Paris',
    England: 'London',
    Nicaragua: 'Managua',
    US: 'Washington DC'
}

// display worldCapitals dictionary
showAllDictionaryValues(worldCapitals)

// add elements to the dictionary
setDictionaryValue(worldCapitals, 'Honduras', 'Tegucigalpa')
setDictionaryValue(worldCapitals, 'Colombia', 'Bogotá')

// display updated worldCapitals dictionary
showAllDictionaryValues(worldCapitals)

// access dictionary element by key
console.log(getDictionaryValue(worldCapitals, 'US'))