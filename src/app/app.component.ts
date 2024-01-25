import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

let round = 0
let totalScore = 0;
let roundScore: [number, number, number] = [0, 0, 0];
let scores = new Map<number, [number, number, number]>(); // roundScore

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bowling-42';

  totalScore = 0;
  result = lanzarBola(Math.floor(Math.random() * 10)); // INPUT 
}

function lanzarBola(numBolos) {

  if (numBolos == 10) { // pleno
    roundScore[0] = 10;
    roundScore[1] = 0;
    scores.set(round, [roundScore[0], roundScore[1], 0]);
    
    // SECCION CRITICA
    // ACTUALIZAR TOTAL SCORE
    
    
    console.log("Pleno: " + 10);
  } else {
    roundScore[0] = numBolos;
    lanzarBola2(Math.floor(Math.random() * (10 - numBolos))); // INPUT


    // SECCION CRITICA
    // ACTUALIZAR TOTAL SCORE
    // actulizarPuntaje()


    scores.set(round, [roundScore[0], roundScore[1], 0])
    console.log("Semipleno: " );
  }


  round++;
  return totalScore;

}


function lanzarBola2(numBolos) {
  roundScore[1] = numBolos;
  scores.set(round, [roundScore[0], roundScore[1], 0])
}



function actualizarPuntaje() {
  if (scores[0].get(round) == 10) { //PLENO 
    totalScore += 10;
    if (round > 0) {
      if (scores[1].get(round) == 10) {
        totalScore += 10;
        if (scores[2].get(round) == 10) {  
          totalScore += 10;
        } else {
          totalScore += scores[2].get(round);
        }
      }
    } else {
      totalScore += scores[1].get(round) + scores[2].get(round);
    }
  } 
}