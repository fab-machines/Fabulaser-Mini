#include <avr/io.h>
#include <util/delay.h>


#define DELAY_TIME 6000

int main(){
  
  DDRB = (1<<DDB4);
  PORTB = (1<<PB4);
  _delay_ms(DELAY_TIME);
  PORTB = (0<<PB4);
  
}
