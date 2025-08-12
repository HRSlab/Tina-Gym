# Form&Function Studio Website

[![Licence: Private](https://img.shields.io/badge/Private-orange?style=for-the-badge&logo=lock&logoColor=white)](#)
[![Licence: Non-Commercial](https://img.shields.io/badge/Non--Commercial-blue?style=for-the-badge&logo=handshake&logoColor=white)](#)

This is the official website for Form&Function Studio, a premium fitness and wellness studio located in Fort Mohave, AZ. The site is designed to be a sleek, modern, and engaging user experience, reflecting the high-quality services offered by the studio.

## Features

* **Design**: The website boasts a minimal and premium design, focusing on a clean aesthetic, ample white space, and a professional color palette.
* **Interactive 3D Elements**: Home, Services, and About pages feature interactive 3D backgrounds created with **Three.js**, providing an engaging and memorable user experience.
* **Smooth Animations**: The site uses the **GreenSock Animation Platform (GSAP)** for smooth, scroll-triggered animations and page transitions, adding a layer of polish and sophistication.
* **Responsive Design**: Built with a mobile-first approach using **Tailwind CSS**, the website is fully responsive and optimized for a seamless experience across all devices, from desktops to smartphones.
* **Component-Based Structure**: The code is organized into reusable components for the header, footer, and other UI elements, making it easy to maintain and scale.

## Technologies Used

* **HTML5**: Semantic HTML5 for a well-structured and accessible website.
* **CSS3**: Custom CSS properties (variables) for a consistent and easily customizable design.
* **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
* **JavaScript (ES6+)**: Modular JavaScript for interactive features and animations.
* **GSAP (GreenSock Animation Platform)**: For high-performance animations and interactive effects.
* **Three.js**: For creating and displaying animated 3D computer graphics in a web browser.

## File Structure

The project follows a scalable and organized file structure:
```
project-root/
├── index.html              # Home page
├── about.html              # About page
├── service.html            # Services page
├── fitness.html            # Fitness Services page
├── massage.html            # Massage Services page
├── gallery.html            # Gallery/Studio page
├── contact.html            # Contact page
├── css/
│   ├── main.css            # Global styles & layout
│   ├── variables.css       # CSS variables for colors, spacing, typography
│   ├── components.css      # Reusable UI components
│   └── animations.css      # Keyframes & transition styles
├── js/
│   ├── main.js             # Core functionality (navigation, mobile menu, etc.)
│   ├── animations.js       # Global animations (GSAP/Framer Motion)
│   └── utils.js            # Helper functions
├── assets/
│   ├── images/             # Optimized images
│   ├── videos/             # Optional background/hero videos
│   └── icons/              # SVG/PNG icons
├── fonts/                  # Custom fonts if needed
└── README.md               # Documentation
```
## Setup and Customization

To set up and customize the website, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/tina-gym.git](https://github.com/your-username/tina-gym.git)
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd tina-gym
    ```
3.  **Customize the content**:
    * **Text and Images**: Open the `.html` files (`index.html`, `about.html`, etc.) to change the text and image paths.
    * **Colors and Fonts**: Modify the `css/variables.css` file to update the color palette, typography, and other design tokens.
    * **Animations**: Adjust the animation settings in `js/animations.js` to change the behavior of the interactive elements.
4.  **Run the website locally**:
    * You can open the `.html` files directly in your browser or use a local server for a better development experience.

## License

This software is the private property of the copyright holder.

* **You may NOT**:
    * Copy, share, redistribute, or publish the Software, in whole or in part.
    * Use the Software for any commercial purpose without prior written consent.
    * Modify, adapt, reverse engineer, or create derivative works from the Software unless explicitly permitted.

Any unauthorized use, reproduction, or distribution of this Software is strictly prohibited and may result in legal action.