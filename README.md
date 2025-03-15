# Modern Portfolio Site

A sleek, modern Jekyll-based portfolio website featuring a blog, about page, and work showcase. The site includes a mesmerizing butterfly strange attractor animation on the homepage.

## Features

- Responsive design that works on all devices
- Dark theme with modern aesthetics
- Interactive butterfly strange attractor animation using JavaScript canvas
- Blog section for sharing thoughts and ideas
- Work/portfolio section to showcase projects
- About page to share your story
- Mobile-friendly navigation
- Smooth animations and transitions
- SEO optimized

## Prerequisites

Before you begin, ensure you have the following installed:
- Ruby (version 2.7.0 or higher recommended)
- RubyGems
- GCC and Make (for some gem installations)
- Jekyll and Bundler gems

## Installation

1. Clone this repository or download the ZIP file.

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install the dependencies:
   ```
   bundle install
   ```

## Running Locally

To run the site locally:

```
bundle exec jekyll serve
```

This will start a local development server at `http://localhost:4000`.

## Customization

### Personalization

- Edit `_config.yml` to update site title, description, and social media links
- Replace "Your Name" in various files with your actual name
- Update content in `_pages/about.md` with your personal information
- Add your own projects in the `_works` directory (following the format of the example)
- Write your own blog posts in the `_posts` directory

### Images

- Add your work images to `assets/images/works/`
- You may need to update image paths in the work files

### Colors and Styling

- Modify color variables in `assets/css/main.css` to match your personal brand
- Adjust typography and layout as needed

### Animation

- Modify the butterfly animation parameters in `assets/js/butterfly.js`
- Adjust colors, speed, and other properties to your liking

## Deployment

This site can be deployed on various platforms:

### GitHub Pages

1. Push your repository to GitHub
2. In your repository settings, enable GitHub Pages
3. Choose the branch to deploy (usually `main` or `master`)

### Netlify/Vercel

1. Push your repository to GitHub
2. Connect your repository to Netlify or Vercel
3. Configure the build settings (`jekyll build` as the build command and `_site` as the publish directory)

## Credits

- Jekyll - Static site generator
- Font Awesome - Icons
- Google Fonts - Typography
- Butterfly Strange Attractor algorithm - Based on mathematical principles of chaotic systems

## License

This project is licensed under the MIT License - see the LICENSE file for details.