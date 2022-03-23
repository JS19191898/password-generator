const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = ArrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = ArrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = ArrayFromLowToHigh(48, 57)
const SPECIAL_CHARACTER_CHAR_CODES = ArrayFromLowToHigh(33, 47).concat(
    ArrayFromLowToHigh(58, 64)
).concat(
    ArrayFromLowToHigh(91, 96)
).concat(
    ArrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit' , e => {
    e.preventDefault()
    const characterAmount = characterAmount.value
    const includeLowercase = includeLowercaseElement.checked
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked
    const password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIAL_CHARACTER_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount, i++) { 
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function ArrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

