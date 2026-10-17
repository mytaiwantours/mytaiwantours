# M.Y. Taiwan Tours

A responsive, static travel website for M.Y. Taiwan Tours, with brochure-inspired blue and lavender colors.

## Pages

- `index.html` — Home, including Popular Destinations.
- `tours.html` — North Coast, Taipei City, and Taichung tour highlights.
- `packages.html` — 24 collapsible itineraries across 9 destinations, plus custom itinerary and transfer information.
- `about.html` — About M.Y. Taiwan Tours.
- `contact.html` — Contact details, social links, and an inquiry form.

Navigation opens pages in the same tab. Package inquiry links carry the selected package to the Contact page.

## Files

- `style.css` — Shared colors, typography, and responsive layouts.
- `script.js` — Mobile menu, current copyright year, package preselection, and inquiry form behavior.
- `assets/` — Supplied destination photos: `north-coast.png`, `taipei-city.png`, and `taichung.png`.

## Preview locally

No installation or build step is required. Open `index.html` in a browser, or serve this folder with any static web server.

If Python is installed, run this from the website folder:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Then visit http://127.0.0.1:4173/. Stop the server with Ctrl+C.

## Edit the website

- Edit text and navigation in the relevant HTML files.
- Popular Destinations appears in both `index.html` and `tours.html`; update both when changing cards.
- Replace destination photos in `assets/`, retaining their filenames, or update image paths in both pages.
- Change shared colors in the `:root` variables in `style.css`. Later rules in the file override earlier styles.
- Edit itineraries in `packages.html`. Keep the corresponding option values in the Contact page synchronized with each inquiry link's `tour` query parameter.
- Edit contact details and social links in `contact.html`.
- The Home hero uses an external Unsplash image referenced in `style.css` and requires internet access to load.

## Contact form

The inquiry form opens the visitor's email application with a prefilled message addressed to `mytouringservices@gmail.com`. It does not send messages automatically or store submissions. Visitors need a configured email application to complete sending, or can use the contact details directly.

## Publish on GitHub Pages

For the existing site at https://mytaiwantours.github.io/mytaiwantours/:

1. Extract the website ZIP.
2. Upload all HTML files, `style.css`, `script.js`, `README.md`, and the complete `assets/` folder to the publishing folder of the `mytaiwantours/mytaiwantours` repository. Replace existing files when prompted. Keep these files together; do not place them inside an extra enclosing folder.
3. In the repository's **Settings → Pages**, check the configured publishing source. If using branch-based publishing from the repository root, ensure the updated files are in that branch's root. If using a workflow, follow that workflow's publishing setup.
4. Commit the changes and wait for the GitHub Pages deployment to finish.
5. Check the published site, including navigation, photos, package expansion, social links, and inquiry selections. Refresh the browser if old styles remain cached.

Preparing or downloading this folder does not update the live site. Repository changes must be published through GitHub Pages.

## Accessibility and mobile support

The site uses responsive layouts, native expandable itinerary controls, labeled form fields, accessible names for social icons, visible keyboard focus, and reduced-motion styles.
