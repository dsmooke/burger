// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const devourBtn = document.querySelectorAll(".devour-burger");

  // Set up the event listener for the create button
  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const wasDevoured = e.target.getAttribute("data-devoured");

        const wasDevouredState = {
          devoured: wasDevoured,
        };

        fetch(`/api/burger/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(wasDevouredState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed burger to: ${wasDevoured}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const submitBurgerBtn = document.getElementById("create-form");

  if (submitBurgerBtn) {
    submitBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById("burg").value.trim(),
        devoured: document.getElementById("devoured").checked,
      };

      // Send POST request to create a new quote
      fetch("/api/burger", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById("burg").value = "";

        // Reload the page so the user can see the new quote
        console.log("Created a new burger!");
        location.reload();
      });
    });
  }

  // DELETE
  const deleteCatBtns = document.querySelectorAll(".delete-cat");

  // Set up the event listeners for each delete button
  deleteCatBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      // Send the delete request
      fetch(`/api/burger/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        console.log(`Deleted cat: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
