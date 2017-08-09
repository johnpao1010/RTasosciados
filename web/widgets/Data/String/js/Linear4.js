var dataString ='<chart manageResize="1" origW="380" origH="80" animation="0" showShadow="0" upperLimit="9" lowerLimit="0" chartTopMargin="5" chartBottomMargin="10" chartLeftMargin="30" chartRightMargin="30" \n\
\n\
placeTicksInside="1" placeValuesInside="1" pointerOnTop="0" ticksBelowgauge="0" valuePadding="0" \n\
\n\
minorTMHeight="4" majorTMHeight="8" \n\
majorTMColor="0B0D0F" majorTMNumber="10" majorTMThickness=".5" minorTMNumber="4" minorTMThickness=".5" \n\
pointerRadius="5" pointerBgColor="E00000" pointerBorderColor="E00000" \n\
showgaugeBorder="0" baseFontColor="FFFFFF" bgColor="004D69" bgAlpha="100">\n\
	<pointers>\n\
		<pointer value="6.7"/>\n\
	</pointers>\n\
	<annotations>\n\
		<annotationGroup id="Grp1" showBelow="1" x="0" y="0">\n\
			<!--The extended deep blue rectangle at the gauge background-->\n\
			<annotation type="rectangle" x="$gaugeStartX-17" y="$gaugeStartY+2" toX="$gaugeEndX+17" toY="$chartEndY-8" radius="8" color="004D69" />\n\
			<!--Gradient border around the gauge and first layer of gradient background of the gauge-->\n\
			<annotation type="rectangle" x="$gaugeStartX-17" y="$gaugeStartY+2" toX="$gaugeEndX+17" toY="$gaugeEndY+3" radius="8" color="09DBFE,32A6CF,0177A7" fillRatio="20,40,40" fillAngle="90"/>\n\
			<!--The gradient rectangle which provides the highlighted glass effect to the gauge-->\n\
			<annotation type="rectangle" x="$gaugeStartX-15" y="$gaugeStartY+4" toX="$gaugeEndX+15" toY="$gaugeEndY+1" radius="8" color="09DBFE,32A6CF,C1DFEA" fillRatio="20,40,40" fillAngle="90"/>\n\
			<!--gauge reflection-->\n\
			<annotation type="rectangle" x="$gaugeStartX-17" y="$gaugeEndY+5" toX="$gaugeEndX+17" toY="$chartEndY-8" radius="8" color="055472,1D89AF" fillAngle="90"/>\n\
		</annotationGroup>\n\
		<!--The text Richter Scale-->\n\
		<annotationGroup id="Grp2" showBelow="1" x="190" y="$gaugeStartY+36" >\n\
			<annotation type="text" label="Richter Scale" color="004D69" bold="1" x="0" y="0"/>\n\
		</annotationGroup>\n\
	</annotations>\n\
	<styles>\n\
		<definition>\n\
			<style name="TTipFont" type="Font" color="FFFFFF" bgColor="004D69" borderColor="9CCFD7"/>\n\
		</definition>\n\
		<application>\n\
			<apply toObject="TOOLTIP" styles="TTipFont" />\n\
		</application>\n\
	</styles>\n\
</chart>'; 