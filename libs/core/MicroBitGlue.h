#ifndef MICROBIT_GLUE_H
#define MICROBIT_GLUE_H

#include <stdint.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>

#define MICROBIT_OK 0
#define MICROBIT_INVALID_PARAMETER -1001

void microbit_panic(int code);

// #include "Arduino.h"

#define microbit_random ::random

/**
  * Determines the smallest of the two numbers
  *
  * @param a the first number
  *
  * @param b the second number
  *
  * @return The smallest of the two given values.
  */
inline int min(int a, int b)
{
    return (a < b ? a : b);
}

/**
  * Determines the largest of the two numbers
  *
  * @param a the first number
  *
  * @param b the second number
  *
  * @return The larger of the two given values.
  */
inline int max(int a, int b)
{
    return (a > b ? a : b);
}

enum PanicCode{
    // PANIC Codes. These are not return codes, but are terminal conditions.
    // These induce a panic operation, where all code stops executing, and a panic state is
    // entered where the panic code is diplayed.

    // Out out memory error. Heap storage was requested, but is not available.
    MICROBIT_OOM = 20,

    // Corruption detected in the micro:bit heap space
    MICROBIT_HEAP_ERROR = 30,

    // Dereference of a NULL pointer through the ManagedType class,
    MICROBIT_NULL_DEREFERENCE = 40,
};


#endif
