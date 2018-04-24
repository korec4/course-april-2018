# Unit Test using Jest

[![jest](https://facebook.github.io/jest/img/jest.svg)](https://facebook.github.io/jest/img/jest.svg)

### Using ES6 with modules
> Config Babel

```sh
$ npm install --save-dev babel-jest babel-core regenerator-runtime
$ npm install --save-dev babel-preset-env
```

> Config .babelrc

Create a file **.babelrc**

```json
{
  "presets": ["env"]
}
```

## Making unit tests

After preparing the environment to use babel, consider the next sintax for import and export modules:

```js
    import * as core from '../lib/index';
    import * as fs from 'fs';

    const myFunct = () => {
        // @TODO
    };

    export { myFunct };
```

### Test for a function returns an object or array
  ```js
  const getUserNameSync = () => {
    return {
        user: 'malforime'
    };
};

/*
* This is a sync example
* */
it('getUserNameSync function', () => {
    expect(core.getUserNameSync()).toEqual({
        user: 'malforime'
    });
});
  ```

### Test for a function returns a promise resolved
  ```js
 const getUserNameAsync = (handler) => {
    return new Promise((resolve, reject) => {
        if (handler === 1) {
            resolve({
                user: 'malforime'
            });
        } else {
            reject({
                code: 'ERROR101'
            });
        }
    });
};

/*
* This is a promise example resolves
* */
it('getUserNameAsync function resolves', () => {
    return core
        .getUserNameAsync(1)
        .then(data => expect(data).toEqual({
            user: 'malforime'
        }));
});
  ```

### Test for a function returns a promise rejected
  ```js
 const getUserNameAsync = (handler) => {
    return new Promise((resolve, reject) => {
        if (handler === 1) {
            resolve({
                user: 'malforime'
            });
        } else {
            reject({
                code: 'ERROR101'
            });
        }
    });
};

/*
* This is a promise example rejects
* */
it('getUserNameAsync function rejects', () => {
    expect.assertions(1);
    return core.getUserNameAsync(2).catch(error =>
        expect(error).toEqual({
            code: 'ERROR101'
        })
    );
});
  ```

  ### Test for a function returns a promise resolved nested
  ```js
 const nestedAsyncPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync('../', {encoding: 'utf8'});
            resolve(files);
        } catch(error) {
            reject(error => reject(error));
        }
    });
};

jest.mock('fs');
import * as fs from 'fs';

fs.readdirSync.mockImplementation(() => {
    return jest.fn().mockReturnValueOnce(['lib','test']);
})

it('nestedAsyncPromise function resolves a nested thirthy-party', () => {
    return core
        .nestedAsyncPromise()
        .then(data => expect(data()).toEqual(['lib','test']));
});
  ```

### Todos

 - Write MORE Tests
 - Add Night Mode

License
----
MIT
**Free Software, Hell Yeah!**
