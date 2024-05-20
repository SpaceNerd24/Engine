// Create the outer modal container
const modalContainer = document.createElement('div');
modalContainer.id = 'id01';
modalContainer.className = 'modal';

// Create the modal content
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

// Create the close button (first span)
const closeButton1 = document.createElement('span');
closeButton1.className = 'close';
closeButton1.title = 'Close Modal';
closeButton1.innerHTML = '×';
closeButton1.onclick = () => {
    modalContainer.style.display = 'none';
};

// Create the clear button (second span)
const clearButton = document.createElement('span');
clearButton.className = 'clear';
clearButton.title = 'Clear Modal';
clearButton.innerHTML = '×';
clearButton.onclick = () => {
    document.getElementById('console').innerHTML = '';
};

// Create the console div
const consoleDiv = document.createElement('div');
consoleDiv.id = 'console';
consoleDiv.innerHTML = '<br>';

// Append the buttons and console div to the modal content
modalContent.appendChild(closeButton1);
modalContent.appendChild(clearButton);
modalContent.appendChild(consoleDiv);

// Append the modal content to the modal container
modalContainer.appendChild(modalContent);

// Append the modal container to the body
document.body.appendChild(modalContainer);

function consoleLog(text) {
    consoleDiv.innerHTML += text + "<br>";
}

// Create a <style> element
const styleElement = document.createElement('style');

// Define your CSS rules
const cssRules = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
        padding-top: 60px;
    }

    .modal-content {
        background-color: #727272;
        border-radius: 1rem;
        padding: 1rem;
        margin: 5px auto;
        border: 1px solid #888;
        width: 80%;
    }

    .close {
        position: absolute;
        right: 25px;
        top: 0;
        color: #000;
        font-size: 35px;
        font-weight: bold;
    }

    #gameCanvas {
        border-color: red;
        background-color: white;
        border: 1rem;
        width: 100%;
        height: 95vh;
    }

    .clear {
        position: relative;
        color: #000;
        font-size: 35px;
        font-weight: bold;
    }
`;

// Set the CSS rules in the <style> element
styleElement.textContent = cssRules;

// Append the <style> element to the <head>
document.head.appendChild(styleElement);
const EngineInputManager = new InputManager();

setInterval(() => {
    if (EngineInputManager.isKeyPressed("p")) {
        document.getElementById('id01').style.display='block'
    }
}, 1);