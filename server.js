const express = require('express'); 

const app = express(); 

const port = 3000; 

let pageHits = 0;  

app.get(`/`, (req, res) => { 

  pageHits++;  

  res.set(`Content-type`, `text/html`); //Manually set the header 

  res.send(`Install MEAN on Ubuntu 24.04 <br>Page Hits: ${pageHits} <br> by Lisette Leonard >;)`); 

}); 

app.listen(port, () => { 

  console.log(`Server running on port ${port}`); 

}); 
