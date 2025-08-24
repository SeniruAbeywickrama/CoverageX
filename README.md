# 📝 To-Do List Project

A full-stack To-Do List application built with:
- **Frontend:** React
- **Backend:** ASP.NET Core Web API
- **Database:** MySQL
- **Containerization:** Docker & Docker Compose

---

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```


# Way to set up To-Do-List

### Instructions

Inside the root folder you should check 'docker-composer.yml' file:

On that one first you should look on following,
- Database credentials 

Also, You have to create the data table on you local server

```bash
cd ToDoList-API
cd ToDoList-API
dotnet ef migrations add InitialCreate
dotnet ef database update

```
Then, need to packages for react application

```bash
cd todo
npm install
```

The second,

- On the backend port and connection string

Finally you should look on,

- Frontend ports and URLS

Then you should start the containers

### `docker-compose up --build`

If you want to stop the containers

### `docker-compose down`

Then the,
- Frontend: http://localhost:3000
- Backend API: http://localhost:5067/api/... (endpoints)

