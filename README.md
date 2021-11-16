Steps: 

1. Create an app for this project
2. Initialize github Repos
3. Create proper structure for the project 
    * Index.js will be used for just diffrent setup purposes
    * Component folder containes all the components for the app
    * 2 Components as of now : searchbar and App
    * Search bar is class based componenent as we want to use state.
    * Added some semantic ui styling things....


4. Making Controlled component by the use of State instead of using callbacks for conventional props like onChange, onSubmit and so ...  

5. Figured out Es6 arrow function will not throw any error for referencing the 'this' ketyword when using plain javascript does so. ( there can be more way to solve this issue...)

Will Throw Error -:

      onSubmitUsingPlainJs(e) {
        e.preventDefault();
        console.log("the Submitted Term", this.state.term)
    }

Will not throw any error : -

        onSubmitUsingModernes15JS = (e)=> {
        e.preventDefault();
        console.log("the Submitted Term", this.state.term)
    }

Why ? 
Becuase, Here, When We actully call the plainJS function it basically get calls without any referencing an hence it trhows error. 

so it is like 

const car = new Car();
car.drive() ( here reference is set to instance of Car class)

but of it is like this

const carfun = car.drive()
carfun() // Now it will not going to reference any Instance of Car objects as it is being treated as a returned value and in js we can return js functions as well. So that's how it thowrs an error.


Another way to solve this isuee is bying tightly binding the Function using Construction:

like this 
Constructor() {
    this.func = this.func.bind(this)
}



6. How to communicate From children to Parent ?
    *   First make the Parent Class based