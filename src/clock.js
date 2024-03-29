document.addEventListener("DOMContentLoaded", () => {
    const cl = document.querySelector("span")

    function getClock() {
        const d = new Date();
        const h = String(d.getHours()).padStart(2, "0");
        const m = String(d.getMinutes()).padStart(2, "0");
        const s = String(d.getSeconds()).padStart(2, "0");
        cl.innerHTML = `${h}:${m}:${s}`;
    };
      
    getClock();
    setInterval(getClock, 1000);
});