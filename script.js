document.addEventListener("DOMContentLoaded", () => {
  // Categories and Sliders
  const categories = document.querySelectorAll(".categories button");
  const sliders = document.querySelectorAll(".slider");

  // Function to show the selected slider and hide others
  const showSlider = (categoryId) => {
    sliders.forEach((slider) => {
      slider.style.display = "none";
    });
    document.getElementById(`${categoryId}-slider`).style.display = "block";
  };

  // Attach event listeners to category buttons
  categories.forEach((button) => {
    button.addEventListener("click", () => {
      showSlider(button.id);
    });
  });

  // Sliding functionality for categories
  sliders.forEach((slider) => {
    let currentIndex = 0;
    const slides = slider.querySelector(".slides");
    const totalSlides = slides.children.length;
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    const updateSlidePosition = () => {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    });
  });
 
});
