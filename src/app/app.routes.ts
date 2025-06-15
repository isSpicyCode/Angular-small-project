import { Routes } from '@angular/router';
import { Solutions } from './solutions/solutions';
import { Aide } from './aide/aide';
import { DocS } from './doc.s/doc.s';
import { Prix } from './prix/prix';
import { Compteur } from './compteur/compteur';
import { Login } from './login/login';

export const routes: Routes = [
    {path: "solutions", component: Solutions },
    {path: "aide", component: Aide },
    {path: "docs", component: DocS },
    {path: "prix", component: Prix },
    {path: "compteur", component: Compteur },
    {path: "login", component: Login }
];
