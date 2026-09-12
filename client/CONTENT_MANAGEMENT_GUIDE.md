# Technology Club Website — Content Management & Upload Guide

Welcome! This guide explains how to easily update, add, or remove events, images, videos, and team members with full control over the website.

---

## 1. How to Add or Update Upcoming Events

All events are configured in a single, simple file:
📁 **[`client/src/data/eventsData.js`](file:///c:/Users/rajur/Downloads/tech-club-completely-redesigned-v2-download/tech-club-light/client/src/data/eventsData.js)**

### Adding a New Event:
Open `client/src/data/eventsData.js` and add an event object inside the `upcomingEvents` array:

```javascript
export const upcomingEvents = [
  {
    id: 'ai-hackathon-2026',
    title: 'NIT Srinagar AI Hackathon 2026',
    status: 'Registrations Open',             // e.g. "Registrations Open", "Upcoming", "Closing Soon"
    date: 'April 25-26, 2026',
    time: '09:30 AM IST',
    venue: 'Main Auditorium & Computer Labs',
    poster: '/images/posters/hackathon2026.webp', // Image placed in public/images/posters/
    description: 'A 24-hour sprint focusing on edge AI, robotics, and generative agents.',
    registrationLink: 'https://forms.gle/your-registration-link', // Google Form or Unstop link
    tags: ['AI / ML', 'Hackathon', 'All Branches']
  }
];
```

> [!TIP]
> **When there are no active events:**  
> Simply leave `export const upcomingEvents = [];`. The website will automatically and cleanly display the *"Between active cycles"* status card with a direct link to the archives.

---

## 2. How to Upload Event Posters & Images

To use images anywhere on the website:

1. **Place your image file** in:
   📁 `client/public/images/posters/` (for event posters)  
   📁 `client/public/images/gallery/` (for general event photos)  
   📁 `client/public/images/gallery2/` (for community moments)  
   📁 `client/public/images/team/` (for member portraits)

2. **Supported formats:** `.webp` (recommended for best performance), `.png`, `.jpg`, `.jpeg`.

3. **Reference in code:** Always use leading slash:
   ```javascript
   poster: '/images/posters/your-image-name.webp'
   ```

---

## 3. How to Update the Moving Cards Slideshow on the Home Page

The Home page displays an automated moving cards slideshow that advances every ~2.5 seconds.
The image list is managed in:
📁 **[`client/src/data/homeSlideshow.js`](file:///c:/Users/rajur/Downloads/tech-club-completely-redesigned-v2-download/tech-club-light/client/src/data/homeSlideshow.js)**

To add an image to the cards slideshow, simply add a line:
```javascript
{ src: '/images/gallery/my-new-photo.webp', title: 'Robotics Workshop', tag: 'Robotics' },
```

---

## 4. How to Add Event Videos

To add videos to any event or section:
1. **YouTube Videos (Recommended):** Add the link or embed URL to your event in `eventsData.js`:
   ```javascript
   videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
   ```
2. **Local Video Files:**
   - Save your `.mp4` or `.webm` file into `client/public/videos/` (e.g. `event-recap.mp4`).
   - Reference it as:
     ```html
     <video controls src="/videos/event-recap.mp4"></video>
     ```

---

## 5. How to Update Google Drive Album Links & Gallery

Gallery albums and Google Drive links are defined in:
📁 **[`client/src/data/gallery.js`](file:///c:/Users/rajur/Downloads/tech-club-completely-redesigned-v2-download/tech-club-light/client/src/data/gallery.js)**

To update the Google Drive links for your albums:
```javascript
export const DRIVE_LINKS = {
  All: 'https://drive.google.com/drive/folders/YOUR_ALL_FOLDER_ID',
  'Orientation 2026': 'https://drive.google.com/drive/folders/YOUR_ORIENTATION_FOLDER_ID',
  'TechFusion 2025': 'https://drive.google.com/drive/folders/YOUR_TECHFUSION_FOLDER_ID',
  'Club moments': 'https://drive.google.com/drive/folders/YOUR_MOMENTS_FOLDER_ID',
};
```

---

## 6. How to Update Core Team & Faculty Details

Edit:
📁 **[`client/src/pages/Team.jsx`](file:///c:/Users/rajur/Downloads/tech-club-completely-redesigned-v2-download/tech-club-light/client/src/pages/Team.jsx)**

- **Faculty Advisor:** Update `facultyCoordinator` object with name, description, photo path, and social links.
- **Core Team Members:** Add or edit items in the `teamMembers` array with name, role, photo path, and GitHub/LinkedIn links.

---

## 7. Development & Live Preview

To test your changes locally:
```bash
cd client
npm run dev
```
Open **`http://localhost:5173/`** in your browser. Any changes you save in the data files will hot-reload instantly!
