OLED.init(128, 64)
OLED.writeNumNewLine(Environment.Ds18b20Temp(DigitalPin.P2, Environment.ValType.DS18B20_temperature_C))
