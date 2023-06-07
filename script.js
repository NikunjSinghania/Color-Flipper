function colorGen() {
    let r = Math.floor((Math.random() * 256))
    let g = Math.floor((Math.random() * 256))
    let b = Math.floor((Math.random() * 256))

    return 'rgb('+r+','+g+','+b+')'
}

document.querySelector('img').addEventListener('click', () =>{
    document.querySelector('body').style.backgroundColor = colorGen()
})