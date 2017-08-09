var dataString ='<chart manageResize="1" origW="500" origH="350" bgColor="FFFFFF" showBorder="0" showValues="0" showLabels="0" isSliced="1" chartLeftMargin="10" chartRightMargin="190" showToolTip="1" annRenderDelay="1.5">\n\
   <set value="10" label="" color="AFD8F8" toolText="Stocks(speculative){BR}Options(uncovered){BR}Margin Accounts{BR}Limited Partnerships" />\n\
   <set value="16" label="" color="8BBA00" toolText="Corporate Bond Mutual Fund{BR}Stock Market Funds{BR}Blue Cip Stocks{BR}Investment Grade Bonds" />\n\
   <set value="18" label="" color="A66EDD" toolText="Money Market, Government and{BR}Municipal Bond Mutual Funds{BR}Government Securities{BR}Unit Investment Trusts" />\n\
   <set value="22" label="" color="F984A1" toolText="Certificates of deposits{BR}(CDs) (FDIC insured){BR}Bank Money Market{BR}Money Market Mutual Funds" />\n\
<annotations>\n\
<annotationGroup showBelow="1" constrainedScale="0">\n\
<annotation type="rectangle" x="$chartStartX+2" y="$chartStartY+2" toX="$chartEndX-2" toY="$chartEndY-2" fillAlpha="0" radius="15" showBorder="1" borderThickness="2" color="333333" borderAlpha="100"/>\n\
</annotationGroup>\n\
<annotationGroup showBelow="0" x="$canvasCenterX" constrainedScale="0">\n\
	<annotation type="circle"			y="50" 	radius="5" borderThickness="1" color="333333"/>\n\
	<annotation type="line" 			y="50" 	toX="55" borderThickness="1" color="333333"/>\n\
	<annotation type="line" 	x="55" 	y="25" 	toY="75" color="333333" borderThickness="1"/>\n\
	<annotation type="circle" 			y="110" radius="5" color="333333" borderThickness="1"/>\n\
	<annotation type="line" 			y="110" toX="85" color="333333" borderThickness="1"/>\n\
	<annotation type="line" 	x="85" 	y="85" 	toY="135" color="333333" borderThickness="1"/>\n\
	<annotation type="circle" 			y="180" radius="5" color="333333" borderThickness="1"/>\n\
	<annotation type="line" 			y="180" toX="105" color="333333" borderThickness="1"/>\n\
	<annotation type="line" 	x="105" y="155" toY="205" color="333333" borderThickness="1"/>\n\
	<annotation type="circle" 			y="280" radius="5" color="333333" borderThickness="1"/>\n\
	<annotation type="line" 			y="280" toX="155" color="333333"  borderThickness="1"/>\n\
	<annotation type="line" 	x="155" y="255"  toY="305" color="333333" borderThickness="1"/>\n\
	<annotation type="text" 	x="60" y="50" bold="1" isHTML="1" label="Stocks(speculative){BR}Options(uncovered){BR}Margin Accounts{BR}Limited Partnerships" align="left" color="333333" />\n\
	<annotation type="text" 	x="90" y="110" bold="1" label="Corporate Bond Mutual Fund{BR}Stock Market Funds{BR}Blue Cip Stocks{BR}Investment Grade Bonds" align="left" color="333333" />\n\
	<annotation type="text" 	x="110" y="180" bold="1" label="Money Market, Government and{BR}Municipal Bond Mutual Funds{BR}Government Securities{BR}Unit Investment Trusts" align="left" color="333333" />\n\
	<annotation type="text" 	x="160" y="280" bold="1" label="Certificates of deposits{BR}(CDs) (FDIC insured){BR}Bank Money Market{BR}Money Market Mutual Funds" align="left" color="333333" />\n\
</annotationGroup>\n\
</annotations>\n\
<styles>\n\
<definition>\n\
<style name="TTipFont" type="font" isHTML="1" />\n\
</definition>\n\
<application>\n\
<apply toObject="TOOLTIP" styles="TTipFont" />\n\
</application>\n\
</styles>\n\
</chart>';