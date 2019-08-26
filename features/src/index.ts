import 'reflect-metadata';

// const plane = {
//     color: 'red'
// };
//
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
//
// const note = Reflect.getMetadata('note', plane, 'color');
//
// console.log(note);
class AnotherTest{
    anotherTest(): void{}

}

class Test extends AnotherTest{
    testing(): void {
        
    }
}

@controller()
class Plane extends Test{
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vrrrrrr');
    }

    get getColor(): string {
        return this.color
    }
}

function get(path: string) {
    return function (target: any, key: string) {
        console.log(target);
        console.log(key);
        Reflect.defineMetadata('path', path, target, key);
    }
}


function controller() {
    return function printMetadata<T extends {new(...args:any[]):{}}>(target:T) {
        const test = Object.getOwnPropertyNames(Object.getPrototypeOf(target).prototype);
        for (const key of [...test, ...Object.getOwnPropertyNames(target.prototype)]) {
            // console.log(key);
            const secret = Reflect.getMetadata('path', target.prototype, key);
            if (secret) {
                console.log(secret);
            }
        }
    }

}

// function printMetadata<T extends {new(...args:any[]):{}}>(target:T)  {
//     // for (const key in target.prototype) {
//     //     const secret = Reflect.getMetadata('secret', target.prototype, key);
//     //     console.log(secret);
//     // }
//     console.log(target.prototype);
// }

// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) : T {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }
//
// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }
//
// console.log(new Greeter("world"));
