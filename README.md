# welcome to paginate-middleware

> ### A paginate middlware for your mongoose collection or just array of data

## Table Of Contents

- ### [How to use](#How-It-Work)
  - ### [Installation](#installation)
  - ### [Importing](#importing)
  - ### [Overview](#overview)
- ### [Technologies](#Technologies)
- ### [Minimal Requirements](#Minimal-Requirements)
- ### [Author](#Author)

# How It Work

## Installation

```
npm install paginate-middleware

```

## Importing

`const paginate = require("paginate-middleware")`

## Overview

you will be passing a mongoose model just like below

```
    const paginate = require("paginate-middleware")

    const usermodel = require("usermodel")

    app.get("/users", paginate(usermodel),(req,res)=>{
        res.json(res.paginatedResult);
    })

```

and the request url will look like below

GET http://localhost:3000/users?page=2&limit=3

which will return page two and the limit of 3 users

Another case study if an array is passed in just like below

```
let users = ["sixtus","john","micheal","donald","princewill"],
page = 2,
limit= 2
let result = paginate(users,page,limit)


```

## results here contains

```
{
    next: {
    page: 3,
    limit: 3
},
    previous: {
    page: 1,
    limit: 3
},
    results: [
    {3 items},
    {3 items},
    {3 items}
    ]
}
```

`so as the res.paginatdResult`

# Technologies

- ### javascript
- ### node.js

# Minimal-Requirements

- ### npm or Yarn

* ### installation of node.js

# 👤 Author

### 🤓 sixtus chibuike iwuchukwu sixtusiwuchukwu21@gmail.com

### Twitter: https://twitter.com/sixtusiwuchukwu

### Github: https://github.com/sixtusiwuchukwu/

### LinkedIn: https://www.linkedin.com/in/sixtusiwuchukwu/
