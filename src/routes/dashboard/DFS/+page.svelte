<div class="pagina-container">
   <div class="textAlgoritm">Depth-First Search (DFS)</div>

   <div class="container-cerinta">
      <div class="textProblema">
         În această problemă starea de start este Bucuresti, iar starea obiectiv este Sighisoara.
         Algoritmul explorează graful în adâncime. Să presupunem că legăturile (nodurile vecine) 
         sunt întotdeauna alese în ordine alfabetică pentru a fi adăugate pe stivă/expandate.
      </div>

      <img src="/poze/harta.png" alt="Graful problemei DFS" class="poza-graf">
   </div>
</div>

<style>
  .pagina-container {
     width: 100%; /* Folosește 100% din spațiul oferit de chenarul din layout */
     box-sizing: border-box;
     padding-top: 20px;
     /* MODIFICARE: Am scos margin-left: 360px și max-width ca să nu se mai strângă conținutul */
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
     /* MODIFICARE: Am scos margin-left: 300px ca titlul să stea fix pe centrul chenarului */
  }
  
  .textProblema {
     color: #1a2426;
     font-family: sans-serif;
     padding-top: 20px;
     font-size: 20px;
     line-height: 1.6;
     text-align: justify;
     flex: 1; /* Permite textului să ocupe flexibil partea stângă */
     max-width: 500px; /* Oprește textul din a strivi imaginea din dreapta */
  }
     
  .container-cerinta {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between; /* Împinge curat textul în stânga și poza în dreapta */
     gap: 40px; /* Spațiu egal și aerisit între ele */
  }

  .poza-graf {
     max-width: 55%; /* Ocupă maxim 55% din lățimea ferestrei de lucru */
     height: auto; /* MODIFICARE: Schimbat din 300px fix în auto pentru ca harta să nu mai apară deformată sau turtită */
     border-radius: 12px;
  }
</style>