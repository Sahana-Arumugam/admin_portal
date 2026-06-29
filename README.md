# Admin Portal

A secure administrative dashboard that retrieves and manages registration data submitted through the Registration Portal. This application is part of a two-portal system where both applications share the same MongoDB database.

As users register through the Registration Portal, their information is instantly available for administrators to view and manage through this dashboard.

---
## Live Demo

**Admin Portal**

https://admin-portal-gamma-plum.vercel.app/

## System Overview

This project consists of two independent web applications:

### Registration Portal

* Allows users to register and submit their information.
* Stores all registration data in MongoDB.

### Admin Portal (Current Repository)

* Retrieves registration records from the shared database.
* Displays all submitted registrations.
* Provides a centralized interface for administrators to manage user data.

Both applications use the same backend services and database, enabling seamless synchronization across the platform.

---

## Architecture

```text
Users
   │
   ▼
Registration Portal
   │
   ▼
Node.js + Express API
   │
   ▼
MongoDB Atlas
   ▲
   │
Admin Portal
   │
Administrators
```

---

## Tech Stack

* React
* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

---



---

## Related Project

**Registration Portal**

GitHub:
https://github.com/Sahana-Arumugam/Registration_portal

Live:
https://registration-portal-jet.vercel.app/

---
