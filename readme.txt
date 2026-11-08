PORTFOLIO WEB 1
===============

A one-page personal portfolio website in a black and red style.
Plain HTML, CSS and JavaScript: no build step and no dependencies.


FILES
-----
index.html          All page content (hero, projects, experience, skills, contact)
style.css           Colors, fonts, layout and the mobile/tablet layouts
script.js           Small animations: stat count-up, project fade-in, headline parallax
assets/profile.png  The portrait shown in front of the PORTFOLIO headline


RUN IT
------
From the Website folder:

    python3 -m http.server 5510 --directory "portfolio web 1"

Then open http://localhost:5510 in your browser.
(You can also double-click index.html, but a local server is more reliable.)


CHANGE THE PHOTO
----------------
Replace assets/profile.png with another picture of the same name and reload.
A PNG with a transparent background, cropped from the waist up,
looks best in front of the big red PORTFOLIO headline.


CONTENT
-------
The page is filled in from Sai Jeshnu R's resume:
hero (name, role, intro, Chennai), stats (2 internships, 2 key projects,
6 certifications), the three project cards, Professional Experience,
Certifications, Languages, Education, Skills & Tools, and contact details.

Everything is plain text in index.html. Still to fill in:

- LinkedIn link     replace href="#" next to "LinkedIn: Saijeshnu.R"
                    with the full profile URL
- Project links     the three cards under "Selected Projects" are not linked yet
- Quote             the red panel line is a suggestion; change it freely


CHANGE THE COLORS OR FONTS
--------------------------
At the top of style.css, inside :root:

    --red: #e0141e;        main accent color
    --red-deep: #8a0b10;   darker red for gradients
    --bg: #070707;         page background

Fonts (loaded from Google Fonts): Anton (headings), Inter (body text),
Mrs Saint Delafield (handwritten "Hello, I'm" and signature).


PUBLISH IT
----------
The folder is a static site, so you can upload it as-is to GitHub Pages,
Netlify or Vercel, or to any web host.




Open a terminal and run these two commands.

Go to your Website folder:
cd ~/Documents/Projects/Website
Start the local server (keep the quotes, because the folder name has spaces):
python3 -m http.server 5510 --directory "portfolio web 1"
Open http://localhost:5510 in your browser.

Leave the terminal open while you’re viewing the site. To stop the server, press Ctrl + C in that terminal.

If it says the port is already in use: the copy I started earlier for the preview pane may still be running. Either open http://localhost:5510 straight away, or use a different port:

python3 -m http.server 8000 --directory "portfolio web 1"

Then open http://localhost:8000 instead.

Quick option without a server: run

xdg-open ~/Documents/Projects/Website/"portfolio web 1"/index.html

This opens the page directly in your browser, and it works fine for this site.
