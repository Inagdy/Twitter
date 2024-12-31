export class uiAUTH {
  inputs = [
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
    { name: "rePassword", type: "password" },
    { name: "dateOfBirth", type: "date" },
    { name: "gender", type: "text" },
  ];

  display() {
    let box = "";

    for (let i = 0; i < this.inputs.length; i++) {
      box += `
    
     <div class="flex flex-col mt-4 w-full">
                  <label for="${this.inputs[i].name}" class="mb-2">${this.inputs[i].name}</label>
                  <input
                    type="${this.inputs[i].type}"
                    id="${this.inputs[i].name}"
                    class="bg-black border border-[#4d5054] p-1 outline-blue-500"
                    required
                  />        
    </div>
    `;
    }
    document.getElementById("signin-form").innerHTML = box;

    const submitButton = `
        <button
          id="register-btn"
          type="submit"
          class="bg-white w-full my-5 rounded-[20px] text-black p-1 uppercase font-bold"
        >
          Register
        </button>

       <div class="justify-end items-end flex  w-full ">
              <span id="sing in" class="text-[16px] block uppercase"
                >sing in</span
              >
       </div>
      `;
    document.getElementById("signin-form").innerHTML += submitButton;

    document.getElementById("sing in").addEventListener("click", () => {
        this.displayLogin();
      });
  }

  inputslogin = [
    { name: "email-id", type: "email" },
    { name: "password", type: "password" },
  ];

  displayLogin() {
    let box = "";
    for (let i = 0; i < this.inputslogin.length; i++) {
      box += `
   <div class="flex flex-col mt-4 w-full">
                  <label for="${this.inputslogin[i].name}" class="mb-2">${this.inputslogin[i].name}</label>
                  <input
                    type="${this.inputslogin[i].type}"
                    id="${this.inputslogin[i].name}"
                    class="bg-black border border-[#4d5054] p-1 outline-blue-500"
                    required
                  />        
    </div>
        `;
    }
    document.getElementById("signin-form").innerHTML = box;

    const submitButton = `
    <button
      id="register-btn"
      type="submit"
      class="bg-white w-full my-5 rounded-[20px] text-black p-1 uppercase font-bold"
    >
      log in
    </button>

   <div class="justify-end items-end flex  w-full ">
          <span id="sing up" class="text-[16px] block uppercase"
            >sing up</span
          >
   </div>
  `;
    document.getElementById("signin-form").innerHTML += submitButton;
    document.getElementById("sing up").addEventListener("click", () => {
        this.display();
      });
  }
}



