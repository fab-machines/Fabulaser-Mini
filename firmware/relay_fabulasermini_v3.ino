#define RELAY_PIN 4
#define DELAY_TIME 6000


void setup() { 

  pinMode(RELAY_PIN, OUTPUT); 
  digitalWrite(RELAY_PIN, LOW); 
  delay(DELAY_TIME);
} 
void loop() { 
  

 digitalWrite(RELAY_PIN, HIGH);
  
}
