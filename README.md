Here is a `README.md` file documenting the provided APIs:

---

# API Documentation

🌐 **Base URL**  
`http://your-api-base-url.com`

## 📚 Full Route List

| #  | Route                   | Method | Name            | Authentication    | Description                                        |
|----|-------------------------|--------|-----------------|-------------------|----------------------------------------------------|
| 1  | /signup                 | POST   | user.signup     | No                | Register a new user                                |
| 2  | /login                  | POST   | user.login      | No                | Authenticate user and generate JWT token           |
| 3  | /users                  | GET    | user.index      | Admin only        | Get a list of all users                           |
| 4  | /enquiries              | GET    | enquiry.index   | Yes (Admin)       | Fetch all enquiries                               |
| 5  | /enquiries              | POST   | enquiry.store   | Yes               | Create a new enquiry                              |
| 6  | /approved               | GET    | approved.index  | Yes (Admin)       | Fetch all approved enquiries                      |
| 7  | /approved/move/{id}     | PUT    | approved.move   | Yes (Admin)       | Move an enquiry from 'in review' to 'approved'    |
| 8  | /approved/{id}          | PUT    | approved.update | Yes (Admin)       | Update urgency and status of an approved enquiry  |

## 🛠️ Detailed Route Descriptions

### /signup (POST)  
**Name**: user.signup  
**Authentication**: No  
**Status Code**: 201 Created (success) / 400 Bad Request (validation failed)  
**Description**: Register a new user.  
**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "number": "09123456789",
  "password": "secret123"
}
```

**Response**:

```json
{
  "message": "Account created successfully!"
}
```

### /login (POST)  
**Name**: user.login  
**Authentication**: No  
**Status Code**: 200 OK / 401 Unauthorized (invalid credentials)  
**Description**: Authenticate a user and generate a JWT token.  
**Request Body**:

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

**Response**:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN",
  "user": {
    "email": "john@example.com",
    "name": "John Doe",
    "isAdmin": false
  }
}
```

### /users (GET)  
**Name**: user.index  
**Authentication**: Admin only  
**Status Code**: 200 OK  
**Description**: Fetch all users.  
**Response**:

```json
[
  {
    "_id": "user123",
    "name": "John Doe",
    "email": "john@example.com",
    "number": "09123456789",
    "isAdmin": false,
    "createdAt": "2025-04-01T00:00:00.000Z"
  }
]
```

### /enquiries (GET)  
**Name**: enquiry.index  
**Authentication**: Yes (Admin)  
**Status Code**: 200 OK  
**Description**: Fetch all enquiries.  
**Response**:

```json
[
  {
    "_id": "enquiry123",
    "name": "Jane Doe",
    "service": "Official Receipt",
    "contactNumber": "09123456789",
    "email": "jane@example.com",
    "location": "City A",
    "message": "Can you make this fast?",
    "status": "In review",
    "createdAt": "2025-04-01T00:00:00.000Z",
    "urgency": "High"
  }
]
```

### /enquiries (POST)  
**Name**: enquiry.store  
**Authentication**: Yes  
**Status Code**: 201 Created (success) / 400 Bad Request (validation failed)  
**Description**: Create a new enquiry.  
**Request Body**:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "businessName": "Jane's Business",
  "contactNumber": "09123456789",
  "location": "City A",
  "message": "I need some advice.",
  "service": "Consultation",
  "date": "2025-05-01"
}
```

**Response**:

```json
{
  "message": "Enquiry created successfully",
  "data": {
    "_id": "enquiry123",
    "name": "Jane Doe",
    "service": "Consultation",
    "contactNumber": "09123456789",
    "email": "jane@example.com",
    "location": "City A",
    "message": "I need some advice.",
    "status": "In review",
    "createdAt": "2025-04-01T00:00:00.000Z"
  }
}
```

### /approved (GET)  
**Name**: approved.index  
**Authentication**: Yes (Admin)  
**Status Code**: 200 OK  
**Description**: Fetch all approved enquiries.  
**Response**:

```json
[
  {
    "_id": "approved123",
    "name": "Jane Doe",
    "service": "Consultation",
    "contactNumber": "09123456789",
    "email": "jane@example.com",
    "location": "City A",
    "message": "I need some advice.",
    "status": "Approved",
    "createdAt": "2025-04-01T00:00:00.000Z",
    "urgency": "High"
  }
]
```

### /approved/move/{id} (PUT)  
**Name**: approved.move  
**Authentication**: Yes (Admin)  
**Status Code**: 200 OK (success) / 404 Not Found (enquiry not found)  
**Description**: Move an enquiry from 'in review' to 'approved'.  
**Request**:

```json
{
  "message": "Enquiry approved and moved.",
  "approvedEntry": { /* Approved entry details */ }
}
```

### /approved/{id} (PUT)  
**Name**: approved.update  
**Authentication**: Yes (Admin)  
**Status Code**: 200 OK (success) / 404 Not Found (approved enquiry not found)  
**Description**: Update urgency and status of an approved enquiry.  
**Request**:

```json
{
  "urgency": "Medium",
  "status": "Reviewed"
}
```

---

## 👨‍💻 Ground Members

- Joshua S. Valenzuela 
- Niel  Osinsao  
- John Aldrin Anthony Portento  
- Aaron Oriasel  

---

## 📢 Notes

- Users must be logged in to access most of the API routes like creating and viewing enquiries.
- Only admin users can access the approved enquiries and move enquiries from 'in review' to 'approved'.  
- JWT tokens are required for accessing secured routes. 

