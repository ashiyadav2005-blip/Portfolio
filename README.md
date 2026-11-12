# Himanshi Yadav: Portfolio Website

Plain HTML, CSS and JavaScript. No build step, so it works directly on GitHub Pages.

## Folder structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/profile.jpg
│   └── documents/ (resume.pdf, ai-literacy-certificate.pdf)
└── README.md
```

## How to edit
- **Education, skills, projects, training, certificates:** open `js/script.js` and change the `DATA` object at the top. An empty link (`""`) hides its button.
- **Project repo link:** set `repo: ""` in the project block to your GitHub repository URL.
- **Project image:** add a file to `assets/images/` and set `image: "assets/images/your-file.png"`.
- **Contact details, about text, headline:** edit `index.html`.
- **Colours and fonts:** change the variables at the top of `css/style.css`.
- **Photo:** replace `assets/images/profile.jpg` (square, about 600 x 600 px).
- **Resume:** replace `assets/documents/resume.pdf` with the new file, keeping the same name.

## Publish on GitHub Pages
1. Create a repository on GitHub, for example `portfolio`.
2. Upload everything inside this folder to the repository (keep the folders).
3. Go to **Settings, Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After a minute, your site is live at `https://Himanshi123-tech.github.io/portfolio/`.

For a short address (`https://Himanshi123-tech.github.io/`), name the repository `Himanshi123-tech.github.io`.
