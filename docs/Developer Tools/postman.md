---
slug: /category/developer-tools/postman
description: Postman is tool to make network requests, simpllifying API development and testing.
tags:
- network
- api
- testing
---

# Postman

## What is it?
Postman is tool to make network requests, simpllifying API development and testing. More info available at [postman.com](https://www.postman.com/).

More information on installation and basics can be found on their site. Here are some helpful resources to get started:

* [App Download](https://www.postman.com/downloads/)
* [Postman Interceptor](https://learning.postman.com/docs/sending-requests/capturing-request-data/interceptor/)
* [Learning Center](https://learning.postman.com/docs/getting-started/introduction/)

## Quick References Overview

Postman is filled with a lot of great features, but here's just a quick reference guide into some of the features often used but hardly remembered.

## Working with variables

Variables can be set from the environment tab, but sometimes you want to do something more dynamic, like setting an access token as a global variable to use in a future request. Examples on use cases below

### Reading a response JSON body and setting a value to a global variable
```javascript
pm.globals.set('your_global_variable_name', pm.response.json()['json_key_name'])
```

### Reading a response JSON body and setting as an environment variable
```javascript
var data = pm.response.json()['your_data']
pm.environment.set('your_environment_variable_name', JSON.stringify(data));
```

### Accessing a variable in a script (ex: pre-request, test)
```javascript
pm.environment.get("your_environment_variable_name")
```

### Reading response headers
```javascript
pm.response.headers.get('Location');
```

## Working with Tests

### Basic Syntax
```javascript
pm.test("Something should do something expected description", function () {
    // your tests
});
```

### Expecting a response to include a string
```javascript
pm.expect(pm.response.text()).to.include("hello world");
```

### Expect a response to equal (or not equal) something
```javascript
// Expect it to equal
pm.expect(respones_value).to.equal(expected_response_value);

// Expect it to not equal
pm.expect(respones_value).not.to.equal(unexpected_response_value)
```

### Expect a specific response status code
```javascript
pm.response.to.have.status(302);
```

