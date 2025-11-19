# Frontend Setup Guide

## Prerequisites
- Node.js installed (v18 or higher)
- Git installed

## Installation Steps

1. Clone the repo (if you haven't already):
```bash
git clone git@github.com:lisetteleo1/booking-favorites.git
cd booking-favorites
```

2. Navigate to the Angular app:
```bash
cd client/booking-favorites-app
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
ng serve
```

5. Open your browser to:
```
http://localhost:4200
```

You should see the Booking.com favorites page with 2 hotel cards!

## Troubleshooting

**If you get "ng: command not found":**
```bash
npm install -g @angular/cli
```

**If port 4200 is in use:**
```bash
ng serve --port 4201
```

**If you get errors:**
- Make sure you pulled the latest code from main branch
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## What You're Looking At

The frontend currently uses mock data (fake hotels) so you can see the UI without needing the backend running.

**For Katie (Backend):**
Check `client/booking-favorites-app/src/app/data/mock-hotels.ts` to see the data structure the frontend expects from your API.

**For Amanda (Middleware):**
The favorites feature will need authentication - users should only see their own favorites.
