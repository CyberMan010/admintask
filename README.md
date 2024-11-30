# admintask
## This simple Admin Dashboard has some necessary security practices that as Front-End developer you should be known of em.

## HTTPS usage :
- Serve your React app over HTTPS protocol to ensure encrypted communication between client and server.

- Secure Authentication and Authorization :closed_lock_with_key:
Implement proper authentication and authorization mechanisms, such as OAuth, JWT, or cookie, and ensure secure storage of auth tokens.
Authorize users based on roles and permissions to restrict access to sensitive information.
Leverage established authentication, like Next.js Auth, passport to handle authentication flows securely. These libraries have been designed to handle common security concerns.

You can use JWT 

Use default XSS protection with data binding
React automatically escapes values in data bindings, which helps to protect against cross-site scripting (XSS) attacks. For example, the following code will safely render the value of the username prop, even if it contains malicious code:

const MyComponent = ({ username }) => {
  return <h1>Hello, {username}</h1>;
};

Watch out for dangerous URLs and URL-based script injection
Never render untrusted URLs directly into the DOM. Instead, use a library like DOMPurify to sanitize the URL before rendering it. For example, the following code will safely render the URL of the image prop, even if it contains malicious code:

const MyComponent = ({ image }) => {
  const sanitizedImageUrl = DOMPurify.sanitize(image);
  return <img src={sanitizedImageUrl} />;
};

Avoid direct DOM access
Whenever possible, avoid accessing the DOM directly from your React code. This can help to prevent XSS attacks and other security vulnerabilities. For example, instead of using the following code to add a new element to the DOM:

const MyComponent = ({ name }) => {
  const element = document.createElement('div');
  element.textContent = name;
  document.body.appendChild(element);
};
You can use the following code, which uses React’s createElement() method to create a new element and then safely inserts it into the DOM:

const MyComponent = ({ name }) => {
  const element = React.createElement('div', { textContent: name });
  return element;
};
