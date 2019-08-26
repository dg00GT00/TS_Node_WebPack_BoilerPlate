// @classDecorator
// class Boat {
//     // @testDecorator
//     color: string = 'red';
//
//     // @testDecorator
//     get formattedColor(): string {
//         return `This boats color is ${this.color}`
//     }
//
//     // @logError('The boat was sunk!')
//     pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
//         if (speed === 'fast') {
//             console.log('swish');
//         } else {
//             console.log('nothing');
//         }
//     }
// }
//
// function classDecorator(constructor: { new(...args: any[]): {} }) {
//     console.log(constructor);
// }
//
// function parameterDecorator(target: any, key: string, index: number) {
//     console.log(key, index);
// }
//
// function testDecorator(target: any, key: string) {
//     console.log(target);
//     console.log(key);
//
// }
//
// function logError(errorMessage: string) {
//     return function (target: any, key: string, descriptor: PropertyDescriptor): void {
//         const method = descriptor.value;
//         descriptor.value = function () {
//             try {
//                 method()
//             } catch (e) {
//                 console.log(errorMessage);
//             }
//         }
//     }
// }
//
// new Boat();


// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }
//
//
//
// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }

// console.log(new Greeter("world"));

function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
        console.log("f(): propertyKey", propertyKey);
        console.log("f(): descriptor", descriptor);
        console.log(target[propertyKey].prototype.fProperty());
    }
}

function g() {
    console.log("g(): evaluated");
    const gProperty = 'testing...';
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target[propertyKey].prototype = {fProperty: () => console.log('I am inside g()')};
        console.log("g(): called", gProperty);
        console.log("g(): propertyKey", propertyKey);
        console.log("g(): descriptor", descriptor);
    };
}

class C {
    @f()
    @g()
    method() {
        this.method.prototype.fProperty();
    }
}

new C().method();
