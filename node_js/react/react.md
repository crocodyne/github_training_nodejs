## REACT

Les applications React sont construites avec une structure arborescente de composants, formant une hiérarchie. React part du composant racine lors du rendu et effectue un rendu récursif de ses composants enfants.

**React application are built with a tree-like structure of components, forming a hierarchy.React starts from the root component 
during rendering and recursively renders its child components**


React la plupart des composant sont des fonctions pures elles reçoivent des entrées (props) et produisent des sorties prévisibles (JSX)
In React, most components are pure functions: they receive inputs (props) and produce predictable outputs(JSX)
```javascript
export default function App() {
    return <User username="JaneDoe" />
}
function User(props) {
    return <h1>{props.username} </h1>
}
```

## HOOK useEffect
```javascript
    useEffect(() => {
        fetch('https://api.example.com/data)
        .then((res) => res.json())
        .then((data) => {
            //do sth with data
        })
    }, [/*dependency tab*/])
```

## REACT Form

```javascript
function App() {
    const [firstname, setFirstname] = useState("John doe")

    const handleChange = (e) => {
        setFirstname(e.target.value)
    }

    const reset = () => {
        setFirstname("")
    }

    return <form>
        <input type = "text" name="firstname" value = {firstname} onChange= {handleChange}/>
        <button onClick={reset} type="button">Reset</button>
    </form>
}
```
Le problème de ce code c'est que chaque appui ou modification du champ firstname react va re-rendre tout le composant
Pour que les champs ne soient plus controlés par **react** il faut supprimer la prop value du chanp **firsname**

```javascript
function App() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(new FormData(e.target))
    }
    return <form onSubmit={handleSubmit}>
        <input type = "text" name="firstname"/>
        <button>Envoyer</button>
    </form>
}
```