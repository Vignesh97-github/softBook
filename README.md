# SoftBook
SoftBook is a modern social networking app designed to connect people through seamless interactions, engaging content, and a user-friendly interface. Built with a focus on privacy, personalization, and community engagement, SoftBook allows users to share updates, connect with friends, join interest-based groups, and explore trending topics.

## Features

- User Profiles – Customize profiles with photos, bios, and personal details.
- News Feed – View and interact with posts, images, and videos from friends and pages.
- Messaging – Real-time chat and private messaging for direct communication.
- Groups & Communities – Join or create groups around shared interests.
- Privacy Controls – Set post visibility, manage connections, and secure personal data.
- Notifications – Stay updated with alerts for likes, comments, and messages.
- Search & Discovery – Find new friends, trending topics, and relevant content easily.

## Tech Satck

- Node.js
- Express.js
- dotenv
- mongoose
- Nodemon
- jsonwebtoken
- bcryptjs
- cloudinary


## API Endpoints
Users
- /api/v1/user/create
- /api/v1/user/getall
- /api/v1/user/get/:id
- /api/v1/user/delete/:id
- /api/v1/user/update/:id
- /api/v1/user/logout

POST

- /api/v1/post/create
- /api/v1/post/delete/:id
- /api/v1/post/update/:id
- /api/v1/post/getall
- /api/v1/post/get/:id

MESSAGE

- /api/v1/message/send
- /api/v1/message/unsend/:id
- /api/v1/message/get/:id
- /api/v1/messgae/getAll
- /api/v1/messgae/read/:id
- /api/v1/messgae/delete/:id


## Security Consideration

