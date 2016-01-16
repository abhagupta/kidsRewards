## Kids Rewards Application

The backend REST API for Kids Rewards

Provides following API :
 
- `GET /summary/:id ` - Gets balance for kid with `id` 
-- example : `http://localhost:7000/summary/Aditi` 
- `POST /:id/:transactionType ` - Post a tansaction for kid with id = `id` and `transactionType` 
-- example : `http://localhost:7000/Aditi/AllNightSleep`

