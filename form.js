document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactform");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(form);

    try {
      const response = await fetch("contact.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      alert(result); // Show PHP response message

      if (result.toLowerCase().includes("thank you")) {
        form.reset(); // Clear form on success
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
      console.error(error);
    }
  });
});
