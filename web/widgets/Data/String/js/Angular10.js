var dataString ='<chart manageResize="1" origW="300" origH="300" bgColor="FFFFFF" gaugeStartAngle="225" gaugeEndAngle="-45" bgAlpha="100" lowerLimit="0" upperLimit="180" majorTMNumber="8" majorTMThickness="3" majorTMColor="FFFFFF" majorTMHeight="7" minorTMNumber="0" placeValuesInside="1"  gaugeOuterRadius="110" gaugeInnerRadius="100" showShadow="0" pivotRadius="20" pivotFillColor="000000,383836"   pivotFillType="linear" pivotFillRatio="50,50" pivotFillAngle="240" annRenderDelay="0" gaugeFillMix="" showPivotBorder="1" pivotBorderColor="999999" pivotBorderThickness="2" decimals="0" \n\
gaugeOriginX="150" gaugeOriginY="150" baseFontColor="FFFFFF"\n\
>\n\
	<dials>\n\
		<dial value="50" color="FFFFFF,999999" alpha="100" showBorder="0" baseWidth="3" topWidth="3" radius="100" />\n\
	</dials>\n\
	<annotations>\n\
		<annotationGroup id="Grp1" showBelow="1" x="150" y="150" >\n\
			<annotation type="circle" color="1C1C1C,AAAAAA,1C1C1C" radius="127" fillPattern="linear" />\n\
			<annotation type="circle" color="9E9E9E,ECECEC" radius="117" fillPattern="linear" fillAngle="270"/>\n\
			<annotation type="circle" color="000000,6C6C6C" radius="115" fillPattern="linear" fillAngle="270"/>\n\
		</annotationGroup>\n\
	</annotations>\n\
	<styles>\n\
		<definition>\n\
			<style name="TTipFont" type="font" color="FFFFFF" bgColor="333333" borderColor="333333" font="Verdana" size="10" />\n\
			<style name="ValueFont" type="font" size="12" color="FFFFFF" bold="1" />\n\
			<style name="LimitFont" type="font" size="12" color="70E300" bold="1" />\n\
		</definition>\n\
		<application>\n\
			<apply toObject="TOOLTIP" styles="TTipFont" />\n\
			<apply toObject="TICKVALUES" styles="ValueFont" />\n\
			<apply toObject="LIMITVALUES" styles="LimitFont" />\n\
		</application>\n\
	</styles>\n\
</chart>'; 