const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1482803529432432862/UBiL1zT4XdnhxLptkC9bxP_55-8QadxliGG8mjwYzyI6zz6ZlSLQ7foO4cxn4nO-uswg";

const form = document.getElementById("appealForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const discord = document.getElementById("discord").value.trim();
  const appeal = document.getElementById("appeal").value.trim();

  statusEl.classList.remove("error");
  statusEl.textContent = "Sending your appeal...";

  const payload = {
    content:
      "📩 **New Fallen Rats Gang Appeal**\n" +
      `**Name:** ${name}\n` +
      `**Discord:** ${discord}\n` +
      `**Appeal:** ${appeal}`,
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      mode: "no-cors",
    });

    form.reset();
    statusEl.textContent = "Appeal sent. Fallen Rats Gang will review it.";
  } catch (error) {
    statusEl.classList.add("error");
    statusEl.textContent = "Could not send appeal right now. Try again.";
  }
});
