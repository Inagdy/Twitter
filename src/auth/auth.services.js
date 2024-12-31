export class authservice {
  async login(email, password) {
    console.log("login", email, password);
    const url = "https://linked-posts.routemisr.com/users/signin";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify({ email, password }), // Convert the data to JSON
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("Login successful:", data); 

    } catch (error) {
      console.log("Error during login:", error);
    }
  }
  async regster(name, email,password,rePassword,dateOfBirth,gender) {
    console.log("login", email, password);
    const url = "https://linked-posts.routemisr.com/users/signup";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify({name, email, password,rePassword,dateOfBirth,gender }), // Convert the data to JSON
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("Login successful:", data); 

    } catch (error) {
      console.log("Error during login:", error);
    }
  }
}
