## ECMASCRIPT 2015/6 

Add classes | module | promesse 

```javascript
//map in ecmascript 2015
let books = new Map();
books.set('Umberto','Joe');
```
## JS DOM
```javascript
const newlink = document.createElement('a');
newlink.setAttribute('tabindex', '10');
newlink.id = 'nav';
```

## Design pattern 

-the main principles of design pattern are based on **SOLID** 
    Single responsibility pattern : A class should have only one responsability
    Open |Close principle : A class should be open for extension but closed for modification
    Liskov Substituin principle : Object should be replaceable with instances of their subtypes without breaking the program
    Interface Segregation Principle: Interfaces should be small and specific rather than large and general
    Dependency inversion principle : High-level modules should not depend on low-level modules; both should depend on abstractions

Behavior design pattern : 
    - Mediator | observator | visitor | iterator | command

Structural design pattern :
    - Decorator | facade | proxy | flyweigh


```java
public float getTemp() {
    Thermometre therm = station.getThermometre();
    return therm.getTemperature();
}
```

best pratice : 
```java
public float getTemp() {
    return station.getTemperature(); // réduit le nombre de classe dont nous dépendons
}
```

## Ajax
use callback for manage event **onreadyStateChange**

```javascript
xhr.onreadyStateChange = function() {
    //manage event with xhr.readyState && xhr.status
};
```
## Event 

The **input** event occurs whenever the value of a field changes 

```javascript
input.addEventListener('input', (e) => {
    output.innerHTML = e.target.value;
})
```
the **submit** evnt can send form by js without triggering submit event
```javascript
    element.submit();
```
## URL
localhost:8888/create_monster**?name=greg&level=2**
the parameter after the question marks are called query parameters

## Node JS

for exports a module : 
```
export.server = s;
```