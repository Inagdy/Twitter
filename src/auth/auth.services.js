export class authservice {

   errors= document.getElementById('error-api')
   loading=document.getElementById('log-in')


  async login(email, password) {
    this.loading.innerHTML='<i class="fa-solid fa-spinner fa-spin " ></i>'




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
      this.loading.innerHTML='log in'
      if(data.message== 'success'){
        console.log('yse')
        this.errors.classList.replace('block','hide')

        window.location.href = '/src/index.html';
        localStorage.setItem('token', data.token)
    
      }else{

        this.errors.classList.replace('hide','block')
        this.errors.innerHTML=data.error
      }

    } catch (error) {
      console.log("Error during login:", error);
    }
  }
  async regster(name, email,password,rePassword,dateOfBirth,gender) {

    this.loadingregster='<i class="fa-solid fa-spinner fa-spin " ></i>'


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
      this.loadingregster='regster'
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("Login successful:", data); 
      if(data.message== 'success'){
        console.log('yse')
        this.errors.classList.replace('block','hide')
        window.location.href = '/auth.html';
      }else{

        this.errors.classList.replace('hide','block')
        this.errors.innerHTML=data.error
      }

    } catch (error) {
      console.log("Error during login:", error);
    }
  }
  












}
