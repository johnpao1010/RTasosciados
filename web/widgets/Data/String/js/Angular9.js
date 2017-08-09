var dataString ='<chart manageResize="1" origW="330" origH="300" bgColor="000000" bgAlpha="100" gaugestartAngle="235" gaugeEndAngle="-55" lowerLimit="0" upperLimit="10" majorTMNumber="11" majorTMThickness="5" majorTMColor="F48900" majorTMHeight="15" minorTMNumber="4" minorTMThickness="2" minorTMColor="FFFFFF" minorTMHeight="13" placeValuesInside="1" gaugeOuterRadius="140" gaugeInnerRadius="85%" baseFontColor="F48900" baseFont="Impact" baseFontSize="30" showShadow="0" pivotRadius="20" pivotFillColor="000000,383836"   pivotFillType="linear" pivotFillRatio="50,50" pivotFillAngle="240" annRenderDelay="0" >\n\
	<dials>\n\
		<dial value="5" color="E70E00" borderColor="E70E00" baseWidth="25" topWidth="1" radius="85" />\n\
	</dials>\n\
	<trendpoints>\n\
        	<point startValue="8" endValue="10"  radius="140" innerRadius="0" color="F48900" alpha="35" showBorder="0"/>\n\
	</trendpoints>\n\
	<annotations>\n\
		<annotationGroup id="Grp1" showBelow="0" xScale="200" yScale="120" x="$chartCenterX" y="$chartCenterY">\n\
			<annotation type="circle" x="0" y="8" color="FFFFFF" alpha="15" radius="7" />\n\
		</annotationGroup>\n\
	</annotations>\n\
	<styles>\n\
		<definition>\n\
			<style name="pivotGlow" type="glow" color="F48900" blurX="15" blurY="15" alpha="60"/>\n\
			<style name="circleBlur" type="blur"/>\n\
			<style name="TTipFont" type="font" color="F48900" bgColor="000000" borderColor="F48900" font="Verdana" size="10" />\n\
		</definition>\n\
		<application>\n\
			<apply toObject="PIVOT" styles="pivotGlow" />\n\
			<apply toObject="Grp1" styles="circleBlur" />\n\
			<apply toObject="TOOLTIP" styles="TTipFont" />\n\
		</application>\n\
	</styles>\n\
</chart>'; 