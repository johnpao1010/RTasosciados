var dataString ='<chart manageResize="1" origW="420" origH="90"  lowerLimit="0" upperLimit="100" numberSuffix="%" showBorder="0" bgColor="FFFFFF" ticksBelowGauge="1" valuePadding="0" gaugeFillMix="" showGaugeBorder="0" pointerOnTop="0" pointerRadius="5" pointerBorderColor="000000" pointerBgColor="000000"  annRenderDelay="0" showShadow="0" minorTMNumber="0" baseFontColor="000000" animation="0">\n\
	<colorRange>\n\
		<color minValue="0" maxValue="100" alpha="0"/>\n\
	</colorRange>\n\
	<pointers>\n\
		<pointer value="62"/>\n\
	</pointers>\n\
	<annotations>\n\
		<!--The circle which makes for the arc shape above the gauge-->\n\
		<annotationGroup id="Grp1" showBelow="0" x="210" y="-765">\n\
			<annotation type="circle" radius="800" color="FFFFFF"/>\n\
		</annotationGroup>\n\
		<!--The gradient rectangle which is usd as the gauge-->\n\
		<annotationGroup id="Grp2" showBelow="1" >\n\
			<annotation type="rectangle" x="$gaugeStartX" y="$gaugeStartY" toX="$gaugeEndX" toY="$gaugeEndY" fillColor="678000,FCEF27,E00000"/>\n\
		</annotationGroup>\n\
		<!--The labels Good and Bad-->\n\
		<annotationGroup id="Grp3" showBelow="0">\n\
			<annotation type="text" x="$gaugeStartX+25" y="40" size="10" color="FFFFFF" bold="1" label="Good" />\n\
			<annotation type="text" x="$gaugeEndX-25" y="40" size="10" color="FFFFFF" bold="1" label="Bad" />\n\
		</annotationGroup>\n\
	</annotations>\n\
	<styles>\n\
		<definition>\n\
			<style name="LabelShadow" type="shadow" distance="1" strength="3" color="333333"/>\n\
		</definition>\n\
		<application>\n\
			<apply toObject="Grp3" styles="LabelShadow" />\n\
		</application>\n\
	</styles>\n\
</chart>'; 