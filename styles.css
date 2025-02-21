:root {
  --primary: #2563eb;
  --secondary: #1e40af;
  --accent: #3b82f6;
  --background: #f3f4f6;
  --text: #1f2937;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

body {
  background-color: var(--background);
  color: var(--text);
  line-height: 1.6;
}


header {
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: var(--primary);
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.875rem;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.carousel-item {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.carousel-item:hover {
  transform: translateY(-4px);
}

.carousel-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.carousel-item button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.carousel-item button:hover {
  background-color: var(--secondary);
}


.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 400px;
  margin: 4rem auto;
}

.close {
  float: right;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Form Styles */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

input {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}

button {
  padding: 0.75rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.auth-buttons button {
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--text);
}

.auth-buttons button:hover {
  background-color: var(--text);
  color: white;
}


footer {
  background-color: white;
  padding: 1.5rem;
  text-align: center;
  margin-top: 4rem;
}

@media (max-width: 768px) {
  nav ul {
    display: none;
  }
  
  .carousel {
    grid-template-columns: 1fr;
  }
}
