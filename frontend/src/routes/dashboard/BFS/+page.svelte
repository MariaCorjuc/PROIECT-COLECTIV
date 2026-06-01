<div class="pagina-container">
   <div class="textAlgoritm">Breadth-First Search (BFS)</div>
   <div class="container-cerinta">
      <div class="textProblema">
            În această problemă starea de start este Bucuresti, iar starea obiectiv este Sighisoara.
            Costurile de tranziție sunt scrise pe muchii, iar estimarea euristică, h, a distanței de la start
            la obiectiv este scrisă în nod. Să presupunem că legăturile sunt întotdeauna rupte prin
            alegerea stării care urmează mai întâi în ordine alfabetică.
      </div>

      <img src="/poze/harta.png" alt="Graful problemei BFS" class="poza-graf">
   </div>
</div>

<style>
  .pagina-container {
     width: 100%; 
     box-sizing: border-box;
     padding-top: 20px;
  }

  .textAlgoritm {
     color: #0A7E8C;
     font-weight: bold;
     text-align: center;
     font-family: sans-serif;
     font-size: 50px;
     display: flex;
     justify-content: center;
     padding-top: 10px;
     margin: 0 0 30px 0;
  }
  
  .textProblema {
     color: #1a2426;
     font-family: sans-serif;
     padding-top: 20px;
     font-size: 20px;
     line-height: 1.6;
     text-align: justify;
     flex: 1; 
     max-width: 500px; 
  }
     
  .container-cerinta {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 40px; 
  }

  .poza-graf {
     max-width: 55%; 
     height: auto; 
     border-radius: 12px;
  }
</style>