const arr = [1,2,3,4];
const myFunct = (element) => {
    document.getElementById('content').innerText += element;
};

arr.forEach(element => myFunct(element));
