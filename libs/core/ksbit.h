#include "pxt.h"
#include "ManagedBuffer.h"

using namespace pxt;
MicroBitPin *getPin(int id);
typedef ImageData* Image;
typedef BufferData* Buffer;

namespace pxt {
  uint32_t programSize();
  uint32_t afterProgramPage();    
}
