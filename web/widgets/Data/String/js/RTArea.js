var currentDate = new Date();
currentDate.addSeconds(-6*8);


var dataString ='<chart manageResize="1" animation="0" numDisplaySets="10" showRealTimeValue="1" rotateLabels="1" slantLabels="1" \n\
	caption="Web Traffic"  subcaption="(Refreshes every 6 seconds)"  yAxisName="Unique Visitors"  \n\
	showValues="0" formatNumberScale="0" showLimits="0" showShadow="0" \n\
	paletteThemeColor="205279" canvasBorderColor="1F6397" canvasBorderThickness="3" canvasBorderAlpha="100" showBorder="0" divLineAlpha="30"\n\
	anchorRadius="3" anchorBgColor="0377D0" anchorBorderColor="FFFFFF" \n\
	anchorBorderThickness="1" anchorAlpha="90"  showPlotBorder="1" plotBorderThickness="3" \n\
	plotBorderColor="0377D0" plotFillColor="0377D0"  plotGradientColor="" plotFillAlpha="80" bgColor="FFFFFF" \n\
	showAlternateHGridColor="0" numVDivLines="2"  toolTipBgColor ="DEF1FF" toolTipBorderColor ="2C516D" canvasPadding="0" \n\
	yAxisMaxValue="5000">\n\
<categories>\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
<category label="'+currentDate.addSeconds(6).toString("HH:mm:ss") +'" />\n\
</categories>\n\
<dataset seriesName="Unique Visitors" showValues="0" >\n\
<set value="2800" />\n\
<set value="3200" />\n\
<set value="3000" />\n\
<set value="2500" />\n\
<set value="3000" />\n\
<set value="3200" />\n\
<set value="3400" />\n\
<set value="3000" />\n\
</dataset>\n\
<styles>\n\
      <definition>\n\
         <style type="font" name="BigFont" size="16"  bgColor="DEF1FF" BorderColor ="2C516D"  />\n\
      </definition>\n\
      <application>\n\
         <apply toObject="REALTIMEVALUE" styles="BigFont" />\n\
      </application>\n\
   </styles>\n\
</chart>'; 