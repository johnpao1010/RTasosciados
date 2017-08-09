var dataString ='<chart manageResize="1" origW="200" origH="190" bgColor="FFFFFF" lowerLimit="0" upperLimit="55" majorTMNumber="7" showTickValues="0" majorTMHeight="8" minorTMNumber="0" showToolTip="0" majorTMThickness="3" gaugeOuterRadius="130" gaugeOriginX="100" gaugeOriginY="160" gaugeStartAngle="125" gaugeEndAngle="55" placeValuesInside="1" gaugeInnerRadius="115" annRenderDelay="0" pivotFillMix="{000000},{FFFFFF}" pivotFillRatio="50,50" showPivotBorder="1" pivotBorderColor="444444" pivotBorderThickness="2" showShadow="0" pivotRadius="18" pivotFillType="linear">\n\
<dials>\n\
<dial value="10" borderAlpha="0" bgColor="FF0000" baseWidth="6" topWidth="6" radius="120"/>\n\
</dials>\n\
<trendpoints>\n\
<point startValue="0" displayValue="E" alpha="0"/>\n\
<point startValue="55" displayValue="F" alpha="0"/>\n\
</trendpoints>\n\
<annotations>\n\
<!-- Draw the background arc -->\n\
<annotationGroup x="100" y="160">\n\
<annotation type="arc" x="0" y="0" radius="145" innerRadius="132" startAngle="53" endAngle="127" showBorder="1" borderColor="444444" borderThickness="2"/>\n\
<annotation type="arc" x="0" y="0" radius="145" innerRadius="132" startAngle="53" endAngle="107" showBorder="1" color="ffffff" borderColor="444444" borderThickness="2"/>\n\
</annotationGroup>\n\
<annotationGroup x="$chartCenterX" y="160" showBelow="1" scaleImages="1">\n\
<annotation type="image" x="-12.5" y="-100" url="../Resources/Fuel.gif" />\n\
</annotationGroup>\n\
</annotations>\n\
<styles>\n\
<definition>\n\
<style name="trendValueFont" type="font" bold="1" size="12"/>\n\
</definition>\n\
<application>\n\
<apply toObject="TRENDVALUES" styles="trendValueFont"/>\n\
</application>\n\
</styles>\n\
</chart>'; 