// 1. Tell TypeScript that Node has the .instanceOf method, 
// and extend your existing global definitions.
declare global {
    interface Node {
        instanceOf<T extends abstract new (...args: any[]) => any>(targetClass: T): this is InstanceType<T>;
    }
    // Type definitions for your existing globalThis polyfills
    var activeDocument: Document | undefined;
    var activeWindow: Window | undefined;
}

// 2. Your existing logic for activeDocument and activeWindow
if (typeof globalThis !== "undefined") {
    const g = globalThis as unknown as {
        document?: Document;
        window?: Window;
        activeDocument?: Document;
        activeWindow?: Window;
    };
    if (g.document !== undefined && g.activeDocument === undefined) {
        g.activeDocument = g.document;
    }
    if (g.window !== undefined && g.activeWindow === undefined) {
        g.activeWindow = g.window;
    }
}

// 3. New logic: Polyfill Obsidian's multi-window helper on the Node prototype for Jest
if (typeof Node !== 'undefined' && !Node.prototype.instanceOf) {
    Node.prototype.instanceOf = function (targetClass: any): boolean {
        // Fall back to standard instanceof logic inside Jest's JSDOM environment
        return this instanceof targetClass;
    };
}


// 1. Extend the global Node type so TypeScript recognizes .instanceOf() in your tests
declare global {
    interface Node {
        instanceOf<T extends abstract new (...args: any[]) => any>(targetClass: T): this is InstanceType<T>;
    }
}

// 2. Polyfill the method on the prototype for the Jest JSDOM runtime
if (typeof Node !== 'undefined' && !Node.prototype.instanceOf) {
    Node.prototype.instanceOf = function (targetClass: any): boolean {
        // Fallback to standard instanceof check inside Jest environment
        return this instanceof targetClass;
    };
}
