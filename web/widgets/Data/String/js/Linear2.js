var dataString ='<chart manageResize="1" origW="450" oriH="120" bgColor="FFFFFF" bgAlpha="0" showBorder="0" upperLimit="100" lowerLimit="0" numberSuffix="%" gaugeRoundRadius="5" ticksBelowGauge="1" placeValuesInside="0" showGaugeLabels="0" valueAbovePointer="1" pointerOnTop="1" pointerRadius="6" chartTopMargin="15" chartBottomMargin="15" chartLeftMargin="25" chartRightMargin="30" majorTMColor="666666">\n\
    <colorRange>\n\
        <color minValue="0" maxValue="100" code="F6BD0F" />\n\
    </colorRange>\n\
	<pointers>\n\
		<pointer value="65"/>\n\
	</pointers>\n\
    <trendpoints>\n\
        <point startValue="75" displayValue="Target" dashed="1" dashLen="1" dashGap="3" color="FFFFFF" thickness="2"/>\n\
    </trendpoints>\n\
    <annotations>\n\
        <annotationGroup id="Grp1" showBelow="1">\n\
            <annotation type="rectangle" x="$chartStartX" y="$chartStartY" toX="$chartEndX" toY="$chartEndY" radius="10" fillColor="AEC0CA, 333333, AEC0CA" fillAngle="90" />\n\
            <annotation type="rectangle" x="$chartStartX+5" y="$chartStartY+5" toX="$chartEndX-5" toY="$chartEndY-5"  radius="10" fillColor="333333, C3D0D8, 333333" fillAngle="90" />\n\
            <annotation type="rectangle" x="$chartStartX+10" y="$chartStartY+10" toX="$chartEndX-10" toY="$chartEndY-10" radius="10" fillColor="C4D5DC, A3A5A4" fillAngle="180" />\n\
        </annotationGroup>\n\
    </annotations>\n\
    <styles>\n\
        <definition>\n\
            <style name="valueFont" type="Font" bgColor="333333" size="10" color="FFFFFF"/>\n\
        </definition>\n\
        <application>\n\
            <apply toObject="VALUE" styles="valueFont"/>\n\
        </application>\n\
    </styles>\n\
</chart>'; 