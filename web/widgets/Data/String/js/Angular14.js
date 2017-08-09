var dataString ='<chart manageResize="1" origW="415" origH="415"  manageValueOverlapping="1" autoAlignTickValues="1"  tickValueDistance="1" bgColor="FFFFFF" upperLimit="5000" lowerLimit="0" numberSuffix="/s" baseFontColor="646F8F"  majorTMNumber="11" majorTMColor="646F8F"  majorTMHeight="9" minorTMNumber="5" minorTMColor="646F8F" minorTMHeight="3" showGaugeBorder="0" gaugeOuterRadius="150" gaugeInnerRadius="135" gaugeOriginX="210" gaugeOriginY="210" gaugeAlpha="50" placeValuesInside="1" toolTipBgColor="F2F2FF" toolTipBorderColor="6A6FA6" gaugeFillMix="" showShadow="0" annRenderDelay="0" pivotRadius="14" pivotFillMix="{A1A0FF},{6A6FA6}" pivotBorderColor="bebcb0" pivotFillRatio="70,30" showBorder="0" gaugeStartAngle="230" gaugeEndAngle="-50"  >\n\
	<colorRange>\n\
		<color minValue="0" maxValue="4999" code="A1A0FF" />\n\
		<color minValue="4999" maxValue="5000" code="A1A0FF" />\n\
	</colorRange>\n\
	<dials>\n\
		<dial value="2265" bgColor="6A6FA6,A1A0FF" borderAlpha="0" baseWidth="5" topWidth="4" />\n\
	</dials>\n\
	<!-- To draw the pre built custom objects -->\n\
	<annotations>\n\
		<!-- To draw it below the chart-->\n\
		<annotationGroup x="210" y="210" showBelow="1">\n\
			<!-- To draw the outer blue dial with gradient effect-->\n\
			<annotation type="circle" x="0" y="0" radius="200" fillColor="000000,2C6BB2, 135FAB"  fillRatio="80,15, 5" borderColor="2C6BB2" />\n\
			<!-- To fill the dial with gradient effect-->\n\
			<annotation type="circle" x="0" y="0" radius="180" fillColor="FFFFFF, D4D4D4" fillRatio="20,80" borderColor="2C6BB2" />\n\
			<!-- To draw the green arc circling the outer dial-->\n\
			<annotation type="arc" x="0" y="0" radius="180" innerRadius="170" startAngle="-60" endAngle="240" fillColor="51884F" fillAlpha="50" borderColor="51884F" />\n\
		</annotationGroup>\n\
	</annotations>\n\
</chart>'; 