(function (global) {
    global.UAM = global.UAM || {};

	function newObject(myObject) {
        //http://stackoverflow.com/questions/6750880/javascript-how-does-new-work-internally
        
        //     var obj, ret, proto;

        // Check if `myObject.prototype` is an object, not a primitive
        proto = Object(myObject.prototype) === myObject.prototype ? myObject.prototype : Object.prototype;

        // Create an object that inherits from `proto`
        obj = Object.create(proto);
        
        // Apply the function setting `obj` as the `this` value
        ret = myObject.apply(obj, Array.prototype.slice.call(arguments, 1));
        
        if (Object(ret) === ret) { // the result is an object?
            return ret;
        }
        return obj;
    }

	global.UAM.newObject = newObject;
    
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/