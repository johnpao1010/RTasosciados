var dataString ='<chart manageResize="1" origW="250" origH="250" palette="4" lowerLimit="0" upperLimit="100" gaugeStartAngle="220" gaugeEndAngle="-40" numberSuffix="%" bgColor="FFFFFF" showBorder="0" basefontColor="FFFFFF" gaugeOuterRadius="80" gaugeInnerRadius="60" chartTopMargin="10" chartLeftMargin="5"  toolTipBgColor="AEC0CA" toolTipBorderColor="FFFFFF" pivotRadius="6" gaugeOriginX="125" gaugeOriginY="130">\n\
	<colorRange>\n\
		<color minValue="0" maxValue="99.99" code="F6BD0F"/>\n\
		<color minValue="99.99" maxValue="100" code="F6BD0F" alpha="0"/>\n\
	</colorRange>\n\
	<trendpoints>\n\
		<point startValue="70" endValue="100" color="E10000" radius="60" innerRadius="55" alpha="70"/>\n\
	</trendpoints>\n\
	<dials>\n\
		<dial value="62" rearExtension="10" baseWidth="6" />\n\
	</dials>\n\
	<annotations>\n\
		<!--Rectangles below the gauge-->\n\
		<annotationGroup id="Grp1" showBelow="1">\n\
			<annotation type="rectangle" x="$chartStartX" y="$chartStartY" toX="$chartEndX" toY="$chartEndY" radius="10" fillColor="333333,555555,333333" fillAngle="90" />\n\
			<annotation type="rectangle" x="$chartStartX+5" y="$chartStartY+5" toX="$chartEndX-5" toY="$chartEndY-5" radius="10" fillColor="777777,C3D0D8,777777" fillAngle="90" />\n\
			<annotation type="rectangle" x="$chartStartX+10" y="$chartStartY+10" toX="$chartEndX-10" toY="$chartEndY-10" radius="10" fillColor="333333,ADB0B2,333333" fillAngle="180" />\n\
		</annotationGroup>\n\
	</annotations>\n\
</chart>'; 