#include "BitVM.h"

namespace bitvm {
  namespace bitvm_micro_bit {
    void registerWithDal(int id, int event, Action a);
  }
}  

MicroBitPin *getPin(int id);
using namespace bitvm::bitvm_micro_bit;
