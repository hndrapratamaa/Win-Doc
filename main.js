function openSubTab(evt, subTabId) {
    var container = evt.currentTarget.closest(".card");
    var subContents = container.querySelectorAll(".sub-tab-content");
    var subBtns = container.querySelectorAll(".sub-tab-btn");

    subContents.forEach(el => el.style.display = "none");
    subBtns.forEach(btn => btn.classList.remove("active"));

    document.getElementById(subTabId).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function copyCode(btn) {
    const code = btn.previousElementSibling.innerText;

    navigator.clipboard.writeText(code).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => btn.innerHTML = original, 1500);
    });
}