// Your code here
//When the DOM is loaded, alert the user that the DOM has loaded.
window.addEventListener("DOMContentLoaded", event => {
    alert("DOM has loaded")
    //When the #red-input input contains the word "red",
    // change the background color of the input to red. 
    //Otherwise, remain transparent.
    const redInputId = document.getElementById("red-input")
    const redInputCb = event => {
        if (event.target.value.toLowerCase() === 'red') {

            redInputId.classList.remove("transparent")
            redInputId.classList.add("red")
        } else {
            redInputId.classList.remove("red")
            redInputId.classList.add("transparent")
        }
    }
    redInputId.addEventListener("input", redInputCb)

    //When #add-item is pressed, a new <li> element 
    //with the value from 
    //#list-add is created and appended to the <ul>.
    const submitButton = document.getElementById("add-item")
    const ulEl = document.getElementsByTagName("ul")[0];
    const submitButtonCb = event => {
        const inputLiText = document.getElementById("list-add").value
        const newLi = document.createElement("li")
        newLi.innerText = inputLiText
        ulEl.appendChild(newLi);
    }

    submitButton.addEventListener("click", submitButtonCb);


    // #color-select,change the background color of the 
    // <section> it belongs to.
    const colorSelect = document.getElementById("color-select");
    const section3 = document.getElementById("section-3");
    const colorSelectCb = event => {
        const bColorRGB = event.target.value;
        section3.style.backgroundColor = bColorRGB;

    }
    colorSelect.addEventListener("input", colorSelectCb)


    //When #remove-listeners is clicked, all event listeners from 
    //the previous three sections should be removed.

    const removeListeners = document.getElementById("remove-listeners");
    removeListeners.addEventListener("click", event => {
        redInputId.removeEventListener("input", redInputCb);
        submitButton.removeEventListener("click", submitButtonCb);
        colorSelect.removeEventListener("input", colorSelectCb);

        // bonus 1
        // Create a button that re-adds the event listeners removed
        // by the last task from #part-4.
        const section4 = document.getElementById("section-4");

        const divEmpty = document.createElement("div")
        divEmpty.innerText = "\n";
        section4.appendChild(divEmpty);
        const reAddListeners = document.createElement("button")
        reAddListeners.innerText = 'Re-add Listeners'
        section4.appendChild(reAddListeners);       
                
        reAddListeners.addEventListener("click", event => {
            redInputId.addEventListener("input", redInputCb);
            submitButton.addEventListener("click", submitButtonCb);
            colorSelect.addEventListener("input", colorSelectCb);

            divEmpty.remove();
            reAddListeners.remove() 
        })
    })

    // bonus 2:
    //Create a new section that contains a <div> 
    //and a hover event that adds text to the <div>
    // indicating that it is being hovered over.
    const hoveredDiv = document.getElementById("hovered");
    const originalText = hoveredDiv.innerText;
    hoveredDiv.addEventListener("mouseover", event => {
        hoveredDiv.innerText = "Hovered on";
        hoveredDiv.style.color = "red";
    });
    hoveredDiv.addEventListener("mouseout", event => {
        hoveredDiv.innerText = originalText;
        hoveredDiv.style.color = "black";
    })

    // bonus 3
    //Create a global event listener that alerts the 
    //user whenever the space bar is pressed.
    document.body.addEventListener("keydown", alertSpace)
    function alertSpace(e) {
        if (e.keyCode == 32) {
            alert("Spacebar pressed")
        }
    }
})