var dataString ='<chart manageResize="1"  origW="400" origH="200" lowerLimit="0" upperLimit="100" numberSuffix="%" chartTopMargin="100"  chartBottomMargin="20" showBorder="0" basefontColor="FFFFFF" toolTipBgColor="453269" bgColor="443266,333235" bgAngle="0" bgAlpha="100,100" >\n\
   <colorRange>\n\
      <color minValue="0" maxValue="75" code="FF654F"/>\n\
      <color minValue="75" maxValue="90" code="F6BD0F"/>\n\
      <color minValue="90" maxValue="100" code="8BBA00"/>\n\
   </colorRange>\n\
   <dials>\n\
      <dial value="92" rearExtension="10"/>\n\
   </dials>\n\
	<annotations>\n\
		<annotationGroup id="Grp1" showBelow="1" >\n\
			<!--Rectangles behind the gauge-->\n\
			<annotation type="rectangle" x="$chartStartX" y="$chartStartY" toX="$chartEndX" toY="$chartEndY" radius="10" fillColor="333333, 453269" fillAngle="180" />\n\
			<annotation type="rectangle" x="$chartStartX+5" y="$chartStartY+5" toX="$chartEndX-5" toY="$chartEndY-5" radius="10" fillColor="000000" fillAlpha="0" showBorder="1" borderColor="FFFFFF" borderThickness="3" borderAlpha="100"/>\n\
		</annotationGroup>\n\
		<!--Logo above the gauge-->\n\
		<annotationGroup id="Grp2" showBelow="1" x="$chartCenterX-113" y="$chartStartY+5">\n\
			<annotation type="image" URL="../Resources/logo.png" />\n\
		</annotationGroup>\n\
	</annotations>\n\
</chart>'; 