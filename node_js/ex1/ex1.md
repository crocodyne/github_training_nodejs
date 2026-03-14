## ECMASCRIPT 2015/6 

Add classes | module | promesse 

## Design pattern 

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