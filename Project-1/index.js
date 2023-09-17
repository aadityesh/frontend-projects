// alert("Hello")
const panel_arr = document.querySelectorAll('.panel');
// console.log()

let n = panel_arr.length;
// alert(n);
for (let x = 0; x < n; x++) {

    panel_arr[x].addEventListener('click', function () {
        removeActiveClasses();
        panel_arr[x].classList.add('active');
    })
}

function removeActiveClasses() {
    for (let x = 0; x < n; x++) {
        panel_arr[x].classList.remove('active');
    }
};
