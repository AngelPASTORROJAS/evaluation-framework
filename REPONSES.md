## QUESTIONS DE COURS /5 POINTS

### 1. Quel composant vu en cours permet la gestion des routes avec React ?

On doit installer le package:

```bash
npm i react-router-dom
```

On utilise les composants BrowserRouter, Route, Routes; ewemple :
```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Effect from "./pages/Effect";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/effect/:decimal?" element={<Effect />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
```

### 2. Quel hook permet de récupérer un paramètre passé dans l’url ?

Pour récupérer un paramètre dans l'url on peut utiliser le hook useParams, exemple:

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

### 3. Quelle ligne de commande permet de créer un projet React ?

Celui vu en cours pour créer un project React avec Vite:

```bash
npm create vite
#On choisi React
#On choisi Javascript
#On nomme le project et on suis les instruction pour installer le projet
```

### 4. Expliquez la notion de hook.

Un hook est un fonction qui gère la gestion des fonctionalité d'un composant telle que celle vu e cours:

```jsx
//On a les hook d'état
useState();
useReducer();
//Les hook de context
useContext();
//Les hook de Reférence
useRef();
//Les hoook avec un cycle de vie
useEffect();
```

### 5. React manipule-t-il directement le DOM de l’application ? expliquez...

## QUESTIONS PRATIQUES /5 POINTS

Pour les questions suivantes, la réponse devra être une et une seule ligne de code :

### 1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en lui transmettant le slug du post à afficher en paramètre

```jsx
<>
  <BrowserRouter>
    <Routes>
      <Route path="/post/:decimal" element={<Post />} />
    </Routes>
  </BrowserRouter>
</>
```

### 2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque l’on clique dessus, lance l’action « SET_ITEM »

```jsx
<>
  <button onClick={() => dispatch({ type: "SET_ITEM" })}></button>
</>
```

### 3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer.

```jsx
const [isAdmin, setIsAdmin] = useState(false);
```

### 4. En JSX, une div affiche le texte du state « message », elle possède su style inline déterminant sa couleur de police à rouge.

```jsx
<><div style={{ color: "red" }}>{state.message}</div></>
```

### 5. En JSX, créez un input qui est rattaché au state « ville » et qui réagira à la saisie dans le champ.

```jsx
<input value={state.ville} onChange={{(e)=> dispatch({type: "updateVille", value: e.target.value})}}></input>
```

## EXERCICE /10 POINTS

Créez une application pour une « librairie » avec React. Ce projet contient 2 pages :

- La page d’accueil affiche une liste de titres de livres avec à côté de chacun le stock disponible et 2 boutons :
  - « + » permet d’ajouter 1 au stock
  - « - » permet d’enlever 1 au stock

Chaque livre qui a 0 en stock est affiché sur fond gris. Les autres sont affichés sous une autre couleur de votre choix.

On ne doit pas pouvoir passer le stock sous 0.

- La page ajout, affiche un formulaire pour ajouter des livres (titre et stock). Le formulaire doit être fonctionnel.

Une navigation devra être présente. Les données sont gérées par un reducer et un context.
