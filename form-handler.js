document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lead-form");
    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        if (!email) return;

        const btn = document.querySelector("#submit-btn");
        if (btn) btn.disabled = true;

        try {
            const res = await fetch("/send_lead.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            if (res.ok) {
                window.location.href = "/thank-you.html";
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (err) {
            alert("Network error. Try again later.");
        } finally {
            if (btn) btn.disabled = false;
        }
    });
});
