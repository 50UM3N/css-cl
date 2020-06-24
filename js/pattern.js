console.log('pattern.js')
function pattern(no) {
    for (let i = 0; i < no; i++) {
        var element = document.createElement('div')
        element.setAttribute('class', 'object')
        document.querySelector('.pattern').append(element)
    }
}

