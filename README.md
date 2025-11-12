# Booking.com Favorites Feature - Cloud Cuties Team

A full-stack MEAN (MongoDB, Express, Angular, Node.js) application for managing favorite hotels on Booking.com, deployed on AWS EC2.

## Project Structure

```
booking-favorites/
├── .gitignore
├── README.md
├── package.json
├── docker-compose.yml
├── server/
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   ├── database.js
│   │   └── env.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Hotel.js
│   │   └── Favorite.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── favorites.routes.js
│   │   └── hotels.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── favorites.controller.js
│   │   └── hotels.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── errorHandler.js
│   └── tests/
│       └── favorites.test.js
├── client/
│   ├── package.json
│   ├── angular.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── favorites-page/
│   │   │   │   ├── hotel-card/
│   │   │   │   └── favorite-button/
│   │   │   ├── services/
│   │   │   │   ├── favorites.service.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── hotel.service.ts
│   │   │   ├── models/
│   │   │   │   ├── hotel.model.ts
│   │   │   │   └── favorite.model.ts
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   └── app.module.ts
│   │   ├── assets/
│   │   └── environments/
│   │       ├── environment.ts
│   │       └── environment.prod.ts
└── deployment/
    ├── ec2-setup.sh
    ├── nginx.conf
    └── ecosystem.config.js
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (v6+)
- Angular CLI (`npm install -g @angular/cli`)
- AWS EC2 instance with Ubuntu 22.04

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/cloud-cuties/booking-favorites.git
cd booking-favorites
```

2. **Set up environment variables**
```bash
# Create server .env file
cp server/.env.example server/.env

# Edit with your configuration
nano server/.env
```

Required environment variables:
```
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/booking-favorites
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:4200
```

3. **Install dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

4. **Run the application**
```bash
# Terminal 1 - Start MongoDB
mongod

# Terminal 2 - Start backend server
cd server
npm run dev

# Terminal 3 - Start Angular frontend
cd client
ng serve
```

Access the application at `http://localhost:4200`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Favorites
- `GET /api/favorites` - Get all favorites for current user
- `POST /api/favorites` - Add hotel to favorites
- `DELETE /api/favorites/:hotelId` - Remove hotel from favorites
- `GET /api/favorites/check/:hotelId` - Check if hotel is favorited

### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel by ID

## Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  createdAt: Date
}
```

### Hotel Model
```javascript
{
  _id: ObjectId,
  name: String,
  location: String,
  description: String,
  imageUrl: String,
  price: Number,
  rating: Number
}
```

### Favorite Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  hotelId: ObjectId (ref: Hotel),
  createdAt: Date
}
```

## AWS EC2 Deployment

### 1. Launch EC2 Instance
- AMI: Ubuntu Server 22.04 LTS
- Instance Type: t2.medium (recommended)
- Security Group: Open ports 22 (SSH), 80 (HTTP), 443 (HTTPS), 3000 (API)

### 2. Connect and Setup
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip

# Run deployment script
chmod +x deployment/ec2-setup.sh
./deployment/ec2-setup.sh
```

### 3. Configure Environment
```bash
# Set production environment variables
sudo nano /home/ubuntu/booking-favorites/server/.env
```

### 4. Start Application with PM2
```bash
pm2 start deployment/ecosystem.config.js
pm2 save
pm2 startup
```

## Team - Cloud Cuties 👾☁️

- [Add team member names and roles]

## Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Emergency fixes

### Commit Convention
```
feat: Add favorite button component
fix: Resolve duplicate favorites bug
docs: Update API documentation
style: Format code with Prettier
refactor: Optimize favorites query
test: Add favorites service tests
```

### Pull Request Process
1. Create feature branch from `develop`
2. Commit changes with descriptive messages
3. Push to remote and create PR to `develop`
4. Request review from team member
5. Merge after approval

## Testing

### Backend Tests
```bash
cd server
npm test
```

### Frontend Tests
```bash
cd client
ng test
```

## Monitoring & Logs

### View PM2 Logs
```bash
pm2 logs booking-favorites
```

### Monitor Application
```bash
pm2 monit
```

## Troubleshooting

### Common Issues

**MongoDB Connection Failed**
```bash
# Check MongoDB status
sudo systemctl status mongod

# Restart MongoDB
sudo systemctl restart mongod
```

**Port Already in Use**
```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 
```

## License

MIT License - Cloud Cuties Team

## Support

For issues or questions, contact the Cloud Cuties team or create an issue in this repository.

