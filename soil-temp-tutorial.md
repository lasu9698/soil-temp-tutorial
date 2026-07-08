
```package
environment = github:tinkertanker/pxt-iot-environment-kit
octopus = github:elecfreaks/pxt-octopus
```




# Soil Moisture
Let's write a program to read soil temperature and show on your OLED screen




## Step 1
First, we need to set up the OLED screen by adding the OLED ``||OLED: initialize OLED with width 128 and height 64||`` block inside the basic ``||basic: on start||`` block


```blocks
OLED.init(128, 64)
```




## Step 2
Go to OLED ``||OLED : show number||``  and put it inside basic ``||basic: on start||`` block under where you initialize your screen




This step is to setup the command to show the number on your OLED screen


```blocks
OLED.init(128, 64)
OLED.writeNumNewLine()


```


## Step 3
Go to Octopus  ``||octopus: value of DS18B20 at pin P0 ||`` and replace 0 in OLED ``||OLED: show number||`` with this soil temperature block
```blocks
OLED.init(128, 64)
OLED.writeNumNewLine(Environment.Ds18b20Temp(DigitalPin.P0, Environment.ValType.DS18B20_temperature_C))

```


## Step 4
We need to change the pin number in the code block  Octopus  ``||octopus: value of DS18B20 at pin P0 ||``
to match the sensor pin on your board. In the drop down, change pin P0 to P2
```blocks
OLED.init(128, 64)
OLED.writeNumNewLine(Environment.Ds18b20Temp(DigitalPin.P2, Environment.ValType.DS18B20_temperature_C))
```


## Congratulations, you did it!
Download the program to your Micro:bit and test it out!












