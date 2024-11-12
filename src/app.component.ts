import { Component } from '@angular/core';

@Component ( {
  selector: 'app-root', 
  template : `<router-outlet></router-outlet>`//é utilizado pra definir um espaço onde os componentes
                                              //são usados pra definir rotas, estrutura pra navegar
                                              //entre elas e pode ser usado para múltiplas rotas
})
export class AppComponent {
title = "vehicle-app-ui";
  
}

