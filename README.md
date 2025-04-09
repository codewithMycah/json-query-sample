# json-query-sample

### [JsonQueryLang Library](https://jsonquerylang.org/)

In terminal run:
```
npm install
npm run dev
```

Data looks like this:
```
const data = {
    friends: [
        { name: "Chris", age: 23, city: "New York" },
        { name: "Emily", age: 19, city: "Atlanta" },
        { name: "Joe", age: 32, city: "New York" },
        { name: "Kevin", age: 19, city: "Atlanta" },
        { name: "Michelle", age: 27, city: "Los Angeles" },
        { name: "Robert", age: 45, city: "Manhattan" },
        { name: "Sarah", age: 31, city: "New York" },
    ],
}
```

Query looks like this using jsonquery library:
```
query = jsonquery(data,`
    .friends
    | filter(.city == "New York")
    | sort(.age)
    | pick(.name, .age, .city)
`)
```
OR
```
query = jsonquery(data['friends'], `filter(.city == "New York") | sort(.age) | pick(.name, .age, .city)`)
```
