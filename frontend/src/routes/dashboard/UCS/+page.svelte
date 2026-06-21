<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { monteazaArbore } from './Arbore.js';
  import { istoricPasi } from './dateArbore.js'

/** @type {HTMLDivElement | undefined} */
  let containerArbore = undefined;

/** @type {HTMLDivElement | undefined} */

  let zonaGraf=undefined; 


  /** @type {number}*/
   let pasCurent=0;

  /** @type {any} */
  let cronometru = null;

  /** @type {any}*/
  let problemaActiva=null;

  function actualizeazaEcran(){

      if(zonaGraf)
      {
         const datePasCurent=istoricPasi[pasCurent];
         monteazaArbore(zonaGraf,datePasCurent.noduri,datePasCurent.muchii);
      }
  }


    function butonBack(){
   
       if(pasCurent>0)
         {
            pasCurent-=1;
            actualizeazaEcran();
         }
  }


  function butonNext(){
   
       if(pasCurent<istoricPasi.length-1)
         {
            pasCurent+=1;
            actualizeazaEcran();
         }
  }


function butonProblema1(){
    goto('/dashboard/UCS/Problema1');
}
  function butonProblema2(){
      goto('/dashboard/UCS/Problema2');
  }

function restartAnimatia(){
   pasCurent=0;
   actualizeazaEcran();
}

function fullScreen(){
   if(containerArbore){
      if(!document.fullscreenElement){
         containerArbore.requestFullscreen().then(() =>{
            setTimeout(actualizeazaEcran,300);
         }).catch(err=>{
            console.error('Eroare la activarea Fullscreen: ${err.message}');
         });
      }
      else{
         document.exitFullscreen();
         problemaActiva=null;
         setTimeout(actualizeazaEcran,300);
      }
      
      }
   }

  onMount(() => {
      actualizeazaEcran();
  });
</script>

<div class="pagina-container">
<div class="textAlgoritm">Uniform Cost</div>

   <div class="container-cerinta">

         <div class="textProblema">În această problemă starea de start este Arad, iar starea obiectiv este Bucuresti.
         Costurile de tranziție sunt scrise pe muchii, iar estimarea euristică, h, a distanței de la start
         la obiectiv este scrisă în nod. Să presupunem că legăturile sunt întotdeauna rupte prin
         alegerea stării care urmează mai întâi în ordine alfabetică.
         </div>

         <img src="/poze/harta.png" alt="Graful problemei UCS" class="poza-graf">
      </div>

   <div bind:this={containerArbore} class="container-aplicatie-fullscreen" >
   
      <div class="container-butoane">
         <button class="btn-nav" onclick={butonBack}>Back</button>
         <button class="btn-nav" onclick={butonNext}>Next</button>
         <button class="btn-nav" onclick={restartAnimatia}>Restart</button>
         <button class="btn-nav" onclick={fullScreen}>⛶</button>
      </div>

      <div bind:this={zonaGraf} class="container-zonaGraf"></div>

   <div class="container-butoane">
         <button class="btn-nav" onclick={butonProblema1}>Problema 1</button>
         <button class="btn-nav" onclick={butonProblema2}>Problema 2</button>
   </div>
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

  .container-butoane{
      display: flex;
      justify-content: center;
      gap: 30px;
      padding: 40px 0;
      width: 100%;
      background: transparent;
  }

   .btn-nav{
        background: #0A7E8C;
        border: none;
        text-align: center;
        padding: 10px 35px;
        font-size: 20px;
        font-weight: 700;
        color: white;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 4px 10px rgba(10, 126, 140, 0.2);
        transition: all 0.25s ease;
    }

    .btn-nav:hover {
      background: #08636e;  
      transform: translateY(-2px); 
      box-shadow: 0 6px 15px rgba(10, 126, 140, 0.3);
  }

    .btn-nav:active {
      transform: translateY(1px); 
      box-shadow: 0 2px 5px rgba(10, 126, 140, 0.2);
  }

    div:fullscreen{
      width: 100vw !important;
      height: 100vh !important;
      box-sizing: border-box;
      margin: 0 !important;
      padding: 20px 20px 100px !important;
        background-color: #dae9eb !important; 
        background-image: 
            radial-gradient(at 0% 0%, rgba(169, 209, 215, 0.6) 0px, transparent 50%),  
            radial-gradient(at 100% 0%, rgba(218, 185, 252, 0.5) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(10, 126, 140, 0.15) 0px, transparent 50%) !important;
    }

    div:fullscreen .container-butoane{
      position: absolute !important;
      bottom: 30px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      z-index: 100 !important;
    }

    .container-aplicatie-fullscreen{
      position: relative; 
      width: 100%;
      height: 500px;
    }
    
    .container-zonaGraf{
      width:100%;
      height: 450px;
    }

    div:fullscreen .container-zonaGraf{
      width: 100% !important;
      height:100% !important;
      transform: translateY(-80px) !important;
    }
</style>