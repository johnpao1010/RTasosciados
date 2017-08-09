var dataString ='<chart manageResize="1" origW="320" origH="320"  tickValueDistance="-10" \n\
bgColor="FFFFFF" upperLimit="240" lowerLimit="0" baseFontColor="FFFFFF"  majorTMNumber="9" majorTMColor="FFFFFF"  majorTMHeight="8" majorTMThickness="5" \n\
minorTMNumber="5" minorTMColor="FFFFFF" minorTMHeight="3" minorTMThickness="2" \n\
pivotRadius="10" pivotBgColor="000000" pivotBorderColor="FFFFFF" pivotBorderThickness="2" toolTipBorderColor="FFFFFF" toolTipBgColor="333333" \n\
gaugeOuterRadius="135" gaugeStartAngle="240" gaugeEndAngle="-60" gaugeAlpha="0" decimals="0" showColorRange="0" placeValuesInside="1" pivotFillMix="" \n\
showPivotBorder="1" annRenderDelay="0" gaugeOriginX="160" gaugeOriginY="160" showValue="1">\n\
	<dials>\n\
		<dial value="65" bgColor="000000" borderColor="FFFFFF" borderAlpha="100" baseWidth="4" topWidth="4" borderThickness="2"  valueY="260"/>\n\
	</dials>\n\
	<annotations>\n\
		<!-- Draw the black background -->\n\
		<annotationGroup x="160" y="160">\n\
			<annotation type="circle" radius="150" fillAsGradient="1" fillColor="4B4B4B,AAAAAA" fillAlpha="100,100" fillRatio="95,5" />\n\
			<annotation type="circle" x="0" y="0" radius="140"  showBorder="1" borderColor= "cccccc" fillAsGradient="1"  fillColor="ffffff,000000"  fillAlpha="50,100"  fillRatio="1,99" />\n\
		</annotationGroup>\n\
		<!-- To display indicator-->\n\
		<annotationGroup x="160" y="160" showBelow="0" scaleText="1">\n\
			<annotation type="text" y="120" label="KPH" fontColor="FFFFFF" fontSize="14" bold="1"/>\n\
		</annotationGroup>\n\
	</annotations>\n\
	<styles>\n\
		<definition><style type="font" name="valueFont" color="FFFFFF" size="14" bold="1" /></definition>\n\
		<application><apply toObject="VALUE" styles="valueFont" /></application>\n\
	</styles>\n\
</chart>'; 