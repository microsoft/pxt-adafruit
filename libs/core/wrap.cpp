#include <Adafruit_CircuitPlayground.h>

enum class Button {
    Left = CPLAY_LEFTBUTTON,
    Right = CPLAY_RIGHTBUTTON
};

//% color=300 weight=99
namespace sensors {

  // These are not public
  uint16_t lightSensor(void) {
      return CircuitPlayground.lightSensor();
  }

  uint16_t soundSensor(void) {
      return CircuitPlayground.soundSensor();
  }

}

namespace buttons {

  boolean leftButton(void) {
      return CircuitPlayground.leftButton();
  }

  boolean rightButton(void) {
      return CircuitPlayground.rightButton();
  }

}

 namespace music {

  void playTone(uint16_t freq, uint16_t time) {
      CircuitPlayground.playTone(freq, time);
  }

 }

 namespace neopixels {
    void clearPixels(void) {
        CircuitPlayground.clearPixels(); 
    }
    void setPixelColor(uint8_t p, uint32_t c) {
        CircuitPlayground.setPixelColor(p,c);
    }
    void setPixelColor(uint8_t p, uint8_t r, uint8_t g, uint8_t b) {
        CircuitPlayground.setPixelColor(p,r,g,b);
    }
    void setBrightness(uint16_t b){
        CircuitPlayground.setBrightness(b);
    }
    uint32_t colorWheel(uint8_t x) {
        return CircuitPlayground.colorWheel(x);
    }
 }

/*

#include <Wire.h>
#include <SPI.h>

void setup() {
  Serial.begin(9600);
  Serial.println("Circuit Playground test!");

  CircuitPlayground.begin();
}


void loop() {
  // test Red #13 LED
  CircuitPlayground.redLED(HIGH);
  delay(100);
  CircuitPlayground.redLED(LOW);
  delay(100);


*/