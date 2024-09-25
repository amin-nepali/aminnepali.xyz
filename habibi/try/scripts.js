// Function to handle encryption based on selected method
function encrypt() {
    const keyword = document.getElementById('keyword').value;
    const key = document.getElementById('key').value;
    const method = document.getElementById('cipher-method').value;
    let output = '';

    if (method === 'caesar') {
        output = caesarCipher(keyword, parseInt(key));
    } else if (method === 'vigenere') {
        output = vigenereCipher(keyword, key);
    }

    document.getElementById('output').innerText = `Encrypted Text: ${output}`;
}

// Function to handle decryption based on selected method
function decrypt() {
    const keyword = document.getElementById('keyword').value;
    const key = document.getElementById('key').value;
    const method = document.getElementById('cipher-method').value;
    let output = '';

    if (method === 'caesar') {
        output = caesarDecipher(keyword, parseInt(key));
    } else if (method === 'vigenere') {
        output = vigenereDecipher(keyword, key);
    }

    document.getElementById('output').innerText = `Decrypted Text: ${output}`;
}

// Caesar Cipher Encryption
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code < 97 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

// Caesar Cipher Decryption
function caesarDecipher(str, shift) {
    return caesarCipher(str, 26 - shift);
}

// Vigenère Cipher Encryption
function vigenereCipher(text, key) {
    key = key.toLowerCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code < 97 ? 65 : 97;
            let shift = key.charCodeAt(keyIndex % key.length) - 97;
            result += String.fromCharCode(((code - base + shift) % 26) + base);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

// Vigenère Cipher Decryption
function vigenereDecipher(text, key) {
    key = key.toLowerCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code < 97 ? 65 : 97;
            let shift = key.charCodeAt(keyIndex % key.length) - 97;
            result += String.fromCharCode(((code - base - shift + 26) % 26) + base);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}
