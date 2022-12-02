const contactInfo = document.getElementById('contact-info')
const btn = document.getElementById('btn')
function show() {
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block'
    } else {
        contactInfo.style.display = 'none'
    }
}
