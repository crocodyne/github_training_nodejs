## Remind 

```javascript
app.use((req,res, next) => {
   res.setHeader('Content-Type','text/plain');
   res.status(404).send('Unfound page'); 
});

app.listent(8080);
```

if i create a form i need  to set the attribute action to a form for manage the data 

<form action ="create_monster>...data... </form>

create a route about :

```javascript
app.get(/'create_monster', function(req, res) {
    //manage form data
})
```

## Process

setting a port by object app or process.env 

```javascript
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
```
