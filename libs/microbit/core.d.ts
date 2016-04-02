/// <reference no-default-lib="true"/>

interface Array<T> {
    /**
      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
      */
    //% shim=collection::count
    length: number;

    /**
      * Appends new elements to an array.
      * @param items New elements of the Array.
      */
    //% shim=collection::add
    push(item: T): void;
    
    /**
      * Removes the last element from an array and returns it.
      */
    //% helper=arrayPop
    pop(): T;

    /**
      * Reverses the elements in an Array. 
      */
    //% helper=arrayReverse
    reverse(): void;
    
    /**
      * Removes the first element from an array and returns it.
      */
    //% helper=arrayShift
    shift(): T;
    
    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
    //% helper=arraySlice
    slice(start: number, end: number): T[];

    /** Removes the first occurence of an object. Returns true if removed. */
    //% shim=collection::remove
    removeElement(element:T) : boolean;
    
    /** Removes the object at position index. */
    //% shim=collection::remove_at
    removeAt(idx:number) : void;
    
    
    /**
      * Removes elements from an array.
      * @param start The zero-based location in the array from which to start removing elements.
      * @param deleteCount The number of elements to remove.
      */
    //% helper=arraySplice
    splice(start: number, deleteCount: number): void;

    /**
      * Inserts new elements at the start of an array.
      * @param items  Elements to insert at the start of the Array.
      */
    //% helper=arrayUnshift
    unshift(item:T): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    //% shim=collection::index_of
    indexOf(searchElement: T, fromIndex?: number): number;


    [n: number]: T;
}


interface String {
    [index: number]: string;
}


/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  */
  //% shim=string::to_number
declare function parseInt(s: string): number;

interface Object {}
interface Function {}
interface IArguments {}
interface RegExp {}

interface Boolean {
    /**
      * Returns a string representation of an object.
      */
    //% shim=boolean::to_string
    toString(): string;
}

declare namespace String {
    /**
      * Make a string from the given ASCII character code. 
      */
    //% shim=number::to_character
    export function fromCharCode(code:number): string;
}

interface Number {
    /**
      * Returns a string representation of an object.
      */
    //% shim=number::to_string
    toString(): string;
}

