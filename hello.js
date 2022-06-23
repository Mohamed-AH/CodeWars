function hello(name) {
 // let firstLetter = name[0].toUpperCase();
 // let nextLetter = name.toLowerCase().slice(1)

  
  
  return `Hello, ${name ? name[0].toUpperCase()+name.slice(1).toLowerCase() : "World"}!`;
}