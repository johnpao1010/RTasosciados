var dataString ='<chart manageResize="1" origW="350" origH="200"  palette="2" bgAlpha="0" bgColor="FFFFFF" lowerLimit="0" upperLimit="100" numberSuffix="%" showBorder="0" basefontColor="FFFFDD" chartTopMargin="5" chartBottomMargin="5" \n\
toolTipBgColor="009999" gaugeFillMix="{dark-10},{light-70},{dark-10}" gaugeFillRatio="3" pivotRadius="8" gaugeOuterRadius="120" gaugeInnerRadius="70%"  \n\
gaugeOriginX="175" gaugeOriginY="170" trendValueDistance="5" tickValueDistance="3" manageValueOverlapping="1" autoAlignTickValues="1">\n\
   <colorRange>\n\
      <color minValue="0" maxValue="45" code="FF654F"/>\n\
      <color minValue="45" maxValue="80" code="F6BD0F"/>\n\
      <color minValue="80" maxValue="100" code="8BBA00"/>\n\
   </colorRange>\n\
   <dials>\n\
      <dial value="72" rearExtension="10" baseWidth="10"/>\n\
   </dials>\n\
   <trendpoints>\n\
      <point startValue="62" displayValue="Average" useMarker="1" markerRadius="8" dashed="1" dashLen="2" dashGap="2"  />\n\
   </trendpoints>\n\
   <!--Rectangles behind the gauge -->\n\
   <annotations>\n\
      <annotationGroup id="Grp1" showBelow="1" showShadow="1">\n\
         <annotation type="rectangle" x="$chartStartX+5" y="$chartStartY+5" toX="$chartEndX-5" toY="$chartEndY-5" radius="10" fillColor="009999,333333" showBorder="0" />\n\
      </annotationGroup>\n\
   </annotations>\n\
   <styles>\n\
      <definition>\n\
         <style name="RectShadow" type="shadow" strength="3"/>\n\
		 <style name="trendvaluefont" type="font" bold="1" borderColor="FFFFDD"/>\n\
      </definition>\n\
      <application>\n\
         <apply toObject="Grp1" styles="RectShadow" />\n\
		 <apply toObject="Trendvalues" styles="trendvaluefont" />\n\
      </application>\n\
   </styles>\n\
</chart>'; 