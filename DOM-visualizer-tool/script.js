const container = document.querySelector(".container");
const wrapper = document.querySelector("#wrapper");
const inspectorBox = document.querySelector("#inspectorBox");

let currentElement = null;
let cardCount = 0;

/* ---------------------- */
/* Create Card On Click   */
/* ---------------------- */
document.addEventListener("click", (e) => {

    // Ignore clicks on inspector panel
    if (e.target.closest("#wrapper")) return;

    cardCount++;

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.innerText = "Card " + cardCount;

    const para = document.createElement("p");
    para.innerText = "Created dynamically using JavaScript.";

    card.appendChild(title);
    card.appendChild(para);

    container.appendChild(card);
});

/* ---------------------- */
/* Mouse Move Inspector   */
/* ---------------------- */
document.addEventListener("mousemove", (e) => {

    if (e.target.closest("#wrapper")) return;

    currentElement = e.target;

    const rect = currentElement.getBoundingClientRect();

    // Adjust for scrolling
    inspectorBox.style.top = rect.top + window.scrollY + "px";
    inspectorBox.style.left = rect.left + window.scrollX + "px";
    inspectorBox.style.width = rect.width + "px";
    inspectorBox.style.height = rect.height + "px";

    wrapper.innerHTML = `
        TAG: ${currentElement.tagName} <br>
        ChildNodes: ${currentElement.childNodes.length} <br>
        Width: ${Math.round(rect.width)}px <br>
        Height: ${Math.round(rect.height)}px
    `;
});

/* ---------------------- */
/* Keyboard Controls      */
/* ---------------------- */
document.addEventListener("keydown", (e) => {

    if (!currentElement) return;

    // Highlight parent
    if (e.key === "p") {
        const parent = currentElement.parentElement;
        if (parent) parent.classList.add("parent-highlight");
    }

    // Highlight children
    if (e.key === "c") {
        currentElement.childNodes.forEach(node => {
            if (node.nodeType === 1) {
                node.classList.add("child-highlight");
            }
        });
    }

    // Clear highlights
    if (e.key === "Escape") {
        document.querySelectorAll("*").forEach(el => {
            el.classList.remove("parent-highlight", "child-highlight");
        });
    }
});