class ProductError extends Error{
   constructor(message){
    super(message);
    this.name= "productsError";
   } 
}module.exports = ProductError;