
class Dog {
    constructor(data){
        Object.assign(this,data)           
    }
    
    dogPicHtml(){
        return `
        <img src="./${this.avatar}" class="dog-img">
        <p class="dog-title">${this.name}, ${this.age}</p>
        <p class="dog-bio">${this.bio}</p>`  
    }
        
}

export {Dog}