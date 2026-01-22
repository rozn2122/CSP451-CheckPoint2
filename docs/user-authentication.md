User Authentication Feature

Endpoint:
POST /auth/login

Validations:
	•	Email required
	•	Must contain @
	•	Password minimum 6 characters

Example request:
{
“email”: “test@test.com”,
“password”: “123456”
}
