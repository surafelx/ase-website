# Sun Farm Prosper Backend

A comprehensive backend system for Sun Farm Prosper with modular architecture including inventory management, CRM, analytics, finance, and admin dashboard.

## Features

### Core Modules
- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Inventory Management**: Track solar panels, pumps, batteries, and agricultural equipment
- **CRM**: Manage farmers, partners, and stakeholders
- **Analytics**: Dashboard with project metrics, financial insights, and performance tracking
- **Finance Management**: Transaction tracking, budgeting, and financial reporting
- **Website Content**: API endpoints for frontend content management

### Admin Dashboard
- User management
- System monitoring
- Real-time analytics
- Inventory oversight
- Financial reporting

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Frontend (Admin)**: React, Vite, Tailwind CSS
- **API Documentation**: RESTful APIs

## Project Structure

```
backend/
├── config/           # Database configuration
├── controllers/      # Route handlers
├── middleware/       # Authentication & validation
├── models/          # MongoDB schemas
├── routes/          # API routes
├── utils/           # Helper functions
└── server.js        # Main server file

admin/               # Admin dashboard
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── hooks/
└── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or bun

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:
   ```env
   MONGODB_URI=mongodb+srv://surafelyimamsy:surafelyimamsy@cluster0.52qf4yp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=30d
   PORT=5000
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Run the backend**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

### Admin Dashboard Setup

1. **Navigate to admin directory**
   ```bash
   cd admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the admin dashboard**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Inventory Management
- `GET /api/inventory` - Get all inventory items
- `POST /api/inventory` - Create inventory item
- `PUT /api/inventory/:id` - Update inventory item
- `DELETE /api/inventory/:id` - Delete inventory item
- `GET /api/inventory/stats` - Get inventory statistics

### CRM
- `GET /api/crm/customers` - Get all customers
- `POST /api/crm/customers` - Create customer
- `PUT /api/crm/customers/:id` - Update customer
- `DELETE /api/crm/customers/:id` - Delete customer
- `GET /api/crm/stats` - Get CRM statistics

### Analytics
- `GET /api/analytics/overview` - Get dashboard overview
- `GET /api/analytics/projects` - Get project analytics
- `GET /api/analytics/finance` - Get financial analytics
- `GET /api/analytics/customers` - Get customer analytics

### Finance
- `GET /api/finance/transactions` - Get all transactions
- `POST /api/finance/transactions` - Create transaction
- `GET /api/finance/summary` - Get financial summary
- `GET /api/finance/budgets` - Get budgets

### Content Management
- `GET /api/content/projects` - Get all projects for website
- `GET /api/content/featured` - Get featured projects
- `GET /api/content/stats` - Get project statistics

### Admin
- `GET /api/admin/dashboard` - Get admin dashboard
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users` - Create user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

## Default Users

After starting the backend, you can create an admin user or use these defaults:

- **Admin**: admin@sunfarmprosper.com / admin123
- **Manager**: manager@sunfarmprosper.com / manager123

## Database Models

### User
- Authentication and authorization
- Role-based access (admin, manager, user)

### Inventory
- Product catalog with categories
- Stock management and reorder points
- Supplier and location tracking

### Project
- Solar irrigation project details
- Beneficiary and impact tracking
- Geographic and technical specifications

### Customer
- Farmer and stakeholder management
- Interaction tracking and notes
- Project associations

### Transaction
- Financial transaction recording
- Income and expense categorization
- Budget tracking

### Analytics
- Dashboard metrics and KPIs
- Report generation
- Performance tracking

## Development

### Running Tests
```bash
npm test
```

### Code Linting
```bash
npm run lint
```

### API Documentation
The API follows RESTful conventions with JSON responses. All endpoints require authentication except public content endpoints.

## Deployment

1. **Environment Variables**: Set production environment variables
2. **Database**: Configure production MongoDB instance
3. **Build Admin Dashboard**: Run `npm run build` in admin directory
4. **Start Services**: Use process manager like PM2 for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support, please contact the development team or create an issue in the repository.